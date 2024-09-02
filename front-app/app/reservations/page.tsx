import React from "react";
import Image from "next/image";
import Restaurant from "../images/yakiniku.jpg";

const Reservation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md mb-8 p-4">
        <div className="text-2xl font-bold text-center">参加確認画面</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {/* Image Section */}
        <div className="flex justify-center mb-6">
          <Image
            src={Restaurant}
            alt="Restaurant"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Restaurant Info Section */}
        <section className="text-center mb-6">
          <div className="text-2xl font-semibold mb-2">お店の名前</div>
          <div className="text-lg text-gray-600 mb-2">お店の位置情報</div>
          <div className="text-lg font-medium text-gray-800">現在の人数</div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-around mt-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition">
            参加する
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-red-600 transition">
            キャンセル
          </button>
        </div>
      </main>
    </div>
  );
};

export default Reservation;
