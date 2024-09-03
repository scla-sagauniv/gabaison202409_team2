"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bard from "../../images/TSUTAYA-SagaUni.jpg"
import { Typography } from "@mui/material";
import HomeBar from "@/app/components/HomeBar";
import HeaderBar from "@/app/components/HeaderBar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { redirect, useSearchParams } from "next/navigation";

//予約確認画面
const Confirm = () => {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      budget: budget,
      max_guests: max_guests,
      meeting_time: meeting_time,
      restaurantID: restaurant["id"]
    };

    try {
      const response = await fetch("/api/recruitings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        setResOK(true);
      } else {
        const errorResult = await response.json();
        alert(`Error: ${errorResult.error}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }

  if (res_ok){
    redirect('/')
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
      {/* <Typography variant="h5" component="h6" textAlign="left" sx={{ paddingTop: 5, paddingLeft: 3 }}>
        利用可能人数： 10人
      </Typography> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            費用:
          </label>
          <input
            type="text"
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="enter budget"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            最大人数:
          </label>
          <input
            type="text"
            onChange={(e) => setMaxGuests(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="enter max guests"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            集合時刻:
          </label>
          <input
            type="time"
            onChange={(e) => setMeetingTime(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        {/* <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Add Restaurant
        </button> */}
        <Stack spacing={2} direction="column" alignItems="center" paddingTop={5} paddingBottom={17}>
          <Button variant="contained" sx={{ width: "70%" }} type="submit">
            予約する
          </Button>
        </Stack>
      </form>
      {/* <Stack spacing={2} direction="column" alignItems="center" paddingTop={5} paddingBottom={17}>
        <Button variant="contained" sx={{ width: "70%" }} type="submit">
          予約する
        </Button>
      </Stack> */}
      

      <HomeBar status="reservation"></HomeBar>
    </div>
  )
};

export default Confirm;
