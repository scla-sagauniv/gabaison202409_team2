"use client";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import HomeBar from "../../components/HomeBar";
import { Stack, Button } from "@mui/material";
import Image from "next/image";

const stores = [
  { id: 1, name: "Store A", location: "Tokyo", available: 5, url: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Red" },
  { id: 2, name: "Store B", location: "Osaka", available: 10, url: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue" },
  { id: 3, name: "Store C", location: "Nagoya", available: 3, url: "https://via.placeholder.com/150/008000/FFFFFF?text=Green" },
  { id: 4, name: "Store D", location: "Kyoto", available: 7, url: "https://via.placeholder.com/150/FFFF00/000000?text=Yellow" },
  { id: 5, name: "Store E", location: "Fukuoka", available: 10, url: "https://via.placeholder.com/150/800080/FFFFFF?text=Purple" },
  { id: 6, name: "Store F", location: "Sapporo", available: 4, url: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Orange" },
  { id: 7, name: "Store G", location: "Kobe", available: 5, url: "https://via.placeholder.com/150/FFC0CB/000000?text=Pink" },
  { id: 8, name: "Store H", location: "Sendai", available: 6, url: "https://via.placeholder.com/150/000000/FFFFFF?text=Black" },
  { id: 9, name: "Store I", location: "Hiroshima", available: 2, url: "https://via.placeholder.com/150/FFFFFF/000000?text=White" },
  { id: 10, name: "Store J", location: "Yokohama", available: 20, url: "https://via.placeholder.com/150/808080/FFFFFF?text=Gray" },
  { id: 11, name: "Store K", location: "Naha", available: 8, url: "https://via.placeholder.com/150/A52A2A/FFFFFF?text=Brown" },
  { id: 12, name: "Store L", location: "Kagoshima", available: 8, url: "https://via.placeholder.com/150/00FFFF/000000?text=Cyan" },
  { id: 13, name: "Store M", location: "Shizuoka", available: 5, url: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Magenta" },
];

const Executive = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <HeaderBar />
      <Stack marginBottom={10}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4 m-20">利用可能な店舗</h1>
          {stores.map((store, index) => (
            <Button
              key={store.id}
              className={`bg-white p-4 rounded shadow-md mb-4 w-80 ${index === stores.length - 1 ? "mb-20" : "mb-4"}`}
              style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
            >
              <div style={{ width: "150px", height: "150px", backgroundColor: "#E0E0E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={store.url} alt={`${store.name} image`} width={150} height={150} />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h2 className="text-black text-lg font-semibold">{store.name}</h2>
                <p>場所: {store.location}</p>
                <p>利用可能人数: {store.available}人</p>
              </div>
            </Button>
          ))}
        </div>
      </Stack>
      <HomeBar status="reservation" />
    </div>
  );
};

export default Executive;
