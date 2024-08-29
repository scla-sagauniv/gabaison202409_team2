import React from "react";
import BasicButtons from "@/app/components/BasicButtons";
import UserField from "@/app/components/UserField";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Register = () => {
  return (
    <div>
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
      <BasicButtons buttonText="新規登録" color="black" />

      <nav>
        <ul>
          <li>
            <a href="/auth/login">ログイン</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Register;
