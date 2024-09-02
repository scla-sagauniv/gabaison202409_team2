"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoadingl] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //バックエンドからデータを取得する関数
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/api/restaurants");
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const data = await response.json();
        setRestaurants(data.restaurants); //データをセット
        setLoadingl(false); //ローディングを終了
      } catch (err) {
        setError(err.message);
        setLoadingl(false);
      }
    };

    fetchRestaurants(); //関数を実行
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">飲食店一覧</h1>
      <ul className="space-y-4">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="p-4 bg-white shadow-md rounded-lg">
            <Link href={`/restaurants/${restaurant.id}`}>
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p>住所: {restaurant.address}</p>
              <p>{restaurant.description}</p>
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                className="w-full h-auto rounded-lg mt-2"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
