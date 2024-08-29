import React from "react";
import BasicButtons from "@/app/components/BasicButtons";
import UserField from "@/app/components/UserField";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 overflow-x-hidden">
      {/* <PersonAddIcon sx={{ fontSize: 40 }} /> */}

      <div>
        <UserField label="メールアドレス" defaultValue="" />
      </div>
      <div>
        <UserField label="ユーザーID" defaultValue="" />
      </div>
      <div>
        <UserField label="パスワード" defaultValue="" />
      </div>
      <BasicButtons buttonText="新規登録" />

      <nav className="mt-4 text-center">
        <ul>
          <li>
            <a href="/auth/login" className="text-blue-500 hover:text-blue-700">
              ログイン
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Register;
