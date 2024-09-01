import React from "react";
import BasicButtons from "@/app/components/BasicButtons";
import UserField from "@/app/components/UserField";

const Profile = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gray-100 px-4 overflow-x-hidden pt-10">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          ユーザー情報変更
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            名前
          </label>
          <UserField label="名前" defaultValue="" id="name" />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            メールアドレス
          </label>
          <UserField label="メールアドレス" defaultValue="" id="email" />
        </div>

        <div className="flex justify-center">
          <BasicButtons buttonText="保存する" />
        </div>

        <nav className="mt-4 text-center w-full">
          <ul>
            <li>
              <a
                href="/"
                className="text-blue-500 hover:text-blue-700"
              >
                Homeへ戻る
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Profile;
