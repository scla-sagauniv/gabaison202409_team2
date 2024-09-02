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
      <div className="text-2xl font-bold text-center pt-12">参加確認画面</div>
      <div className="flex justify-center ">
        <Image
          src={Restaurant}
          alt="User"
          width={500}
          height={500}
          className="w-full h-auto max-w-xs mx-auto"
        />
      </div>
      <div className="font-bold text-left">焼肉キング</div>
      <div>お店の紹介</div>
      <div className="flex justfy-center w-96 h-32 border border-black "></div>
      <div className="pt-5">お店の位置情報</div>
      <div className="h-32 w-64 border border-black rounded-lg shadow-lg"></div>
      <div>現在の人数</div>

      {/* <HomeBar /> */}
    </div>
  );
};

export default Reservation;
