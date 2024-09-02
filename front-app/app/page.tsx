import HeaderBar from "./components/HeaderBar";
import HomeBar from "./components/HomeBar";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";

interface Restrant {
  id: number;
  name: string;
  image: string;
  description: string;
}


export default function Home() {
  const [recruitings, setRecruitings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //apiでデータを取得する
  useEffect(() => {
    //バックエンドからデータを取得する関数
    const fetchRecruitings = async () => {
      try {
        const response = await fetch("/api/restaurants");
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const data = await response.json();
        setRecruitings(data.recruitings); //データをセット
        setLoading(false); //ローディングを終了
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecruitings(); //関数を実行
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }
  // ダミーデータ
  const dummy_data: Restrant[] = [
    { id: 1, name: "ra-men", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "soltRa-men" },
    { id: 2, name: "sushi", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "egg" },
    { id: 3, name: "karaage", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "solt" },
    { id: 4, name: "omlet", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "cheese" }
  ];

  return (
    <div>
      <HeaderBar />
      <Box sx={{ paddingTop: 7, paddingX: 2, paddingBottom: 7 }}>
        <Typography variant="h4" sx={{ paddingTop: 2, paddingBottom: 2 }} textAlign='center'>
          募集中
        </Typography>

        {recruitings.map((res) => (
          <Card key={res.id} sx={{ maxWidth: "100%", marginBottom: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={res.image}
                alt={res.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {res.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {res.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Stack direction="column" alignItems="center" marginBottom={17} >
        <Button variant="contained" sx={{
          width: "70%", height: 60, bgcolor: "#80cbc4",
          "&:active": {
            bgcolor: "#80cbc4", // クリック時の背景色を同じにする
          }
        }} href="./reservations/executive-page">
          募集する
        </Button>
      </Stack>
      <HomeBar status="home" />
    </div >
  );
}

