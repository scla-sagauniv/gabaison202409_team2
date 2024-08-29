import React from "react";
import BasicButtons from "@/app/components/BasicButtons";
import UserField from "@/app/components/UserField";
// import PersonIcon from "@mui/icons-material/Person";

const Login = () => {
  return (
    <div>
      {/* <PersonIcon sx={{ fontSize: 40 }} /> */}

      <div>
        <UserField label="ユーザーID" defaultValue="" />
      </div>
      <div>
        <UserField label="パスワード" defaultValue="" />
      </div>
      <BasicButtons buttonText="ログイン" />

      <nav>
        <ul>
          <li>
            <a href="/auth/register">新規登録</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Login;
