"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bard from "../../images/TSUTAYA-SagaUni.jpg"
import { Typography } from "@mui/material";
import HomeBar from "@/app/components/HomeBar";
import HeaderBar from "@/app/components/HeaderBar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSearchParams } from "next/navigation";

//予約確認画面
const Confirm = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data ={
          restaurantId: Number(searchParams.get("id")),
        }
        const response = await fetch("/api/getrestaurantbyid", {
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
        });
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const res_json = await response.json();
        setRestaurant(res_json.res); //データをセット
        setLoading(false); //ローディングを終了
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);


  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }
  console.log(restaurant);
  return (
    <div>
      <HeaderBar></HeaderBar>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 80, paddingBottom: 10 }}>
        <div style={{ width: '90%' }}>
          <Image
            src={bard}
            layout="responsive"
            width={100}
            height={100}
            alt="food"
          />
        </div>
      </div>

      <Typography variant="h4" component="h5" textAlign="left" sx={{ paddingTop: 5, paddingLeft: 3 }}>
        {restaurant["name"]}
      </Typography>
      <Typography variant="h5" component="h6" textAlign="left" sx={{ paddingTop: 5, paddingLeft: 3 }}>
        利用可能人数： 10人
      </Typography>
      <Stack spacing={2} direction="column" alignItems="center" paddingTop={17}>
        <Button variant="contained" sx={{ width: "70%" }}>
          予約する
        </Button>
      </Stack>

      <HomeBar status="reservation"></HomeBar>
    </div>
  )
};

export default Confirm;
