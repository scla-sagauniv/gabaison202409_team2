"use client";
import HeaderBar from "./components/HeaderBar";
import HomeBar from "./components/HomeBar";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

interface Restrant {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function Home() {
  const [recruitings, setRecruitings] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [fetcheddata, setFetcheddata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //apiでデータを取得する
  useEffect(() => {
    //バックエンドからデータを取得する関数
    const fetchRecruitings = async () => {
      try {
        const response = await fetch("/api/getrestaurantsandrecruitings");
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
    {
      id: 1,
      name: "ra-men",
      image:
        "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg",
      description: "soltRa-men",
    },
    {
      id: 2,
      name: "sushi",
      image:
        "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg",
      description: "egg",
    },
    {
      id: 3,
      name: "karaage",
      image:
        "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg",
      description: "solt",
    },
    {
      id: 4,
      name: "omlet",
      image:
        "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg",
      description: "cheese",
    },
  ];

  console.log(recruitings);
  return (
    <div>
      <HeaderBar />
      <Box sx={{ paddingTop: 7, paddingX: 2, paddingBottom: 7 }}>
        <Typography
          variant="h4"
          sx={{ paddingTop: 2, paddingBottom: 2 }}
          textAlign="center"
        >
          募集中
        </Typography>

        {recruitings.map((res) => (
          <a href={`/participation/detail?id=${res["id"]}`}>
            <button
              key={res["id"]}
              className="w-full bg-white text-black font-bold py-2 px-4 mb-2 text-left rounded shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div>最大参加人数: {res["max_guests"]}</div>
              <div>費用: {res["budget"]}</div>
              <div>集合時間: {res["meeting_time"]}</div>
              <div>飲食店名: {res["restaurant"]["name"]}</div>
              <div>住所: {res["restaurant"]["address"]}</div>
              <div>お店紹介: {res["restaurant"]["description"]}</div>
              {/* <div>restaurant image_url: {res["restaurant"]["image_url"]}</div> */}
              {/* <CardActionArea>
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
              </CardActionArea> */}
            </button>
          </a>
        ))}
      </Box>
      <Stack direction="column" alignItems="center" marginBottom={17}>
        <Button
          variant="contained"
          sx={{
            width: "70%",
            height: 60,
            bgcolor: "#80cbc4",
            "&:active": {
              bgcolor: "#80cbc4", // クリック時の背景色を同じにする
            },
          }}
          href="./reservations/executive-page"
        >
          募集する
        </Button>
      </Stack>
      <HomeBar status="home" />
    </div>
  );
}
