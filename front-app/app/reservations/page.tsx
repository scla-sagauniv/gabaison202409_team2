import React from "react";
import HeaderBar from "../components/HeaderBar";
import HomeBar from "../components/HomeBar";
import Restaurant from "../images/yakiniku.jpg";
import Image from "next/image";

//幹事用の画面
const Reservation = () => {
  return (
    <div>
      {/* <HeaderBar /> */}
      <div className="text-2xl font-bold text-center pt-12">予約詳細画面</div>
      <div className="flex justify-center ">
        <Image src={Restaurant} alt="User" width={500} height={500} />
      </div>
      <div className="font-bold text-left">焼肉キング</div>
      <div>お店の紹介</div>
      <div className="py-5">お店の位置情報</div>
      <div className="h-64 bg-blue-500 border border-blue-700 rounded-lg shadow-lg w-full"></div>
      <div>現在の人数</div>

      {/* <HomeBar /> */}
    </div>
  );
};

export default Reservation;
