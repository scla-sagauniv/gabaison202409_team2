"use client";
import React, { useState, useEffect } from "react";
import HeaderBar from "@/app/components/HeaderBar";

const executive = () => {
    // 店の情報を配列として保持
    const stores = [
        { id: 1, name: "Store A", location: "Tokyo", available: true },
        { id: 2, name: "Store B", location: "Osaka", available: false },
        { id: 3, name: "Store C", location: "Nagoya", available: true },
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
                <h1 className="text-4xl font-bold mb-4">利用可能な店舗情報</h1>
                {stores.map(store => (
                    <div key={store.id} className="bg-white p-4 rounded shadow-md mb-4 w-80">
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
            <h1 className="text-xl">ページ1</h1>
        </div>
    );
};

export default executive;