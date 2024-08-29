import React from "react";
import BasicButtons from "@/app/components/BasicButtons";
import UserField from "@/app/components/UserField";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 overflow-x-hidden">
      <div>
        <UserField label="ユーザーID" defaultValue="" />
      </div>
      <div>
        <UserField label="パスワード" defaultValue="" />
      </div>
      <div>
        <BasicButtons buttonText="ログイン" />
      </div>

      <nav className="mt-4 text-center">
        <ul>
          <li>
            <a
              href="/auth/register"
              className="text-blue-500 hover:text-blue-700"
            >
              新規登録
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Login;
