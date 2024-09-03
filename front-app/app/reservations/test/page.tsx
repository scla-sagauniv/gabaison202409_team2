"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderBar from "@/app/components/HeaderBar";
import HomeBar from "@/app/components/HomeBar";
import { Button } from "@mui/material";

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

interface Store {
  id: number;
  name: string;
  location: string;
  available: number;
  url: string;
}

function StoreDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    if (id) {
      const storeData = stores.find((store) => store.id === parseInt(id));
      if (storeData) {
        setStore(storeData);
      }
    }
  }, [id]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderBar />
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center  mt-10">
          <img src={store.url} alt={store.name} className="h-auto rounded mt-10" />
        </div>
        <h1 className="text-xl font-bold mb-2">{store.name}</h1>
        <p className="text-md mb-1">場所: {store.location}</p>
        <p className="text-md mb-4">利用可能人数: {store.available}人</p>
        <Button
          variant="contained"
          color="primary"
          className="w-full"
          style={{ backgroundColor: "#a5a6f6", color: "#fff", padding: "12px", fontSize: "16px", borderRadius: "8px" }}
        >
          予約する
        </Button>
      </div>
      <HomeBar status="none" />
    </div>
  );
}

export default StoreDetail;