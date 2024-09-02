"use client";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import HomeBar from "../../components/HomeBar";
import IMG_2545 from "../../images/IMG_2545.jpg";
import Image from "next/image";
import {Stack} from "@mui/material";

const executive = () => {
    // 店の情報を配列として保持
    const stores = [
        { id: 1, name: "Store A", location: "Tokyo", available: 5 },
        { id: 2, name: "Store B", location: "Osaka", available: 10 },
        { id: 3, name: "Store C", location: "Nagoya", available: 3 },
        { id: 4, name: "Store D", location: "Kyoto", available: 7 },
        { id: 5, name: "Store E", location: "Fukuoka", available: 10 },
        { id: 6, name: "Store F", location: "Sapporo", available: 4 },
        { id: 7, name: "Store G", location: "Kobe", available: 5 },
        { id: 8, name: "Store H", location: "Sendai", available: 6 },
        { id: 9, name: "Store I", location: "Hiroshima", available: 2 },
        { id: 10, name: "Store J", location: "Yokohama", available: 20 },
        { id: 11, name: "Store K", location: "Naha", available: 8 },
        { id: 12, name: "Store L", location: "Kagoshima", available: 8 },
        { id: 13, name: "Store M", location: "Shizuoka", available: 5 },
    ];

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
            
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold mb-4 m-20">利用可能な店舗</h1>
                {stores.map((store, index) => (
                    <div key={store.id} className={`bg-white p-4 rounded shadow-md mb-4 w-80 ${index === stores.length - 1 ? "mb-10" : "mb-5"}`}>
                        <h2 className="text-green-700 text-lg font-semibold">{store.name}</h2>
                        
                        <p>Location: {store.location}</p>
                        <p>利用可能な人数: {store.available}人</p>
                    </div>
                ))}
            </div>
            
            <HomeBar />
        </div>
    );
};

export default executive;