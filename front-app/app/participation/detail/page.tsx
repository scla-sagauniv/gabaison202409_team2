"use client";

import React from "react";
import Image from "next/image";
// import bard from "../../images/TSUTAYA-SagaUni.jpg";
import { Typography } from "@mui/material";
import HomeBar from "@/app/components/HomeBar";
import HeaderBar from "@/app/components/HeaderBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { redirect, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

interface data {
  name: string;
  coupon: string;
}

const restrantDetail: data = {
  name: "TSUTAYA",
  coupon: "5% OFF",
};

//飲食店の詳細画面
export default function detail() {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [res_ok, setResOK] = useState(false);
  const searchParams = useSearchParams();
  const [budget, setBudget] = useState("");
  const [max_guests, setMaxGuests] = useState("");
  const [meeting_time, setMeetingTime] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = {
          restaurantId: Number(searchParams.get("id")),
        };
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
        setRestaurant(res_json.res);
        setLoading(false);
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

  if (res_ok) {
    redirect("/participation/detail");
  }

  return (
    <div>
      <HeaderBar></HeaderBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 10,
        }}
      >
        <div style={{ width: "90%" }}>
          {/* <Image
            src={bard}
            layout="responsive"
            width={100}
            height={100}
            alt="food"
          /> */}
        </div>
      </div>

      <Typography
        variant="h4"
        component="h5"
        textAlign="left"
        sx={{ paddingTop: 5, paddingLeft: 3 }}
      >
        {restaurant["name"]}
      </Typography>
      <Typography
        variant="h5"
        component="h6"
        textAlign="left"
        sx={{ paddingTop: 5, paddingLeft: 3 }}
      >
        クーポン
      </Typography>
      <Stack direction="column" alignItems="center">
        <Card sx={{ maxWidth: "90%", margin: "auto", width: "90%" }}>
          <CardContent>
            <Typography variant="h5" component="h5" textAlign="center">
              {restrantDetail.coupon}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Stack spacing={2} direction="column" alignItems="center" paddingTop={10}>
        <Button variant="contained" sx={{ width: "70%" }} href="/">
          参加する
        </Button>
      </Stack>

      <HomeBar status="home"></HomeBar>
    </div>
  );
}
