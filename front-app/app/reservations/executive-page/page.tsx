"use client";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import HomeBar from "../../components/HomeBar";
import { Stack } from "@mui/material";

const executive = () => {
    // 店の情報を配列として保持
    const stores = [
        { id: 1, name: "Store A", location: "Tokyo", available: true },
        { id: 2, name: "Store B", location: "Osaka", available: false },
        { id: 3, name: "Store C", location: "Nagoya", available: true },
        { id: 4, name: "Store D", location: "Kyoto", available: true },
        { id: 5, name: "Store E", location: "Fukuoka", available: false },
        { id: 6, name: "Store F", location: "Sapporo", available: true },
        { id: 7, name: "Store G", location: "Kobe", available: false },
        { id: 8, name: "Store H", location: "Sendai", available: true },
        { id: 9, name: "Store I", location: "Hiroshima", available: true },
        { id: 10, name: "Store J", location: "Yokohama", available: false },
        { id: 11, name: "Store K", location: "Naha", available: true },
        { id: 12, name: "Store L", location: "Kagoshima", available: false },
        { id: 13, name: "Store M", location: "Shizuoka", available: true },
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
            <Stack marginBottom={10} >
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-3xl font-bold mb-4 m-20">利用可能な店舗</h1>
                    {stores.map((store, index) => (
                        <div key={store.id} className={`bg-white p-4 rounded shadow-md mb-4 w-80 ${index === stores.length - 1 ? "mb-20" : "mb-4"}`}>
                            <h2 className="text-green-700 text-lg font-semibold">{store.name}</h2>
                            <p>Location: {store.location}</p>
                            <p>Availability: {store.available ? "Yes" : "No"}</p>
                            <select name="cnt" className="mt-2 p-2 border rounded">
                                <option value="2" defaultValue="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                    ))}
                </div>
            </Stack>
            <HomeBar status="reservation" />
        </div>
    );
};

export default executive;