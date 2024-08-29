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
            <HeaderBar></HeaderBar>
            <h1>利用可能な店舗情報</h1>
            {stores.map(store => (
                <div key={store.id}>
                    <div>
                        <h2>{store.name}</h2>
                        <p>Location: {store.location}</p>
                        <p>Availability: {store.available ? "Yes" : "No"}</p>
                        <select name="cnt">
                            <option value="2" defaultValue="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default executive;
