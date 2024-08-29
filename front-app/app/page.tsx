import HeaderBar from "./components/HeaderBar";
import HomeBar from "./components/HomeBar";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

interface Restrant {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function Home() {

  //apiでデータを取得する

  // ダミーデータ
  const dummy_data: Restrant[] = [
    { id: 1, name: "ra-men", image: "ra-menImg", description: "soltRa-men" },
    { id: 2, name: "sushi", image: "sushiImg", description: "egg" },
    { id: 3, name: "karaage", image: "karaageImg", description: "solt" },
    { id: 4, name: "omlet", image: "omletImg", description: "cheese" }
  ];

  return (
    <div>
      <HeaderBar />
      <Box sx={{ paddingTop: 7, paddingX: 2, paddingBottom: 7 }}>
        <Typography variant="h4" sx={{ paddingTop: 2, paddingBottom: 2 }} textAlign='center'>
          募集中
        </Typography>

        {dummy_data.map((res) => (
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

      <HomeBar />
    </div>
  );
}

