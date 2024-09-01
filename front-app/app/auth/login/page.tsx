"use client";
import React from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください"),
});
import BasicButtons from "@/app/components/BasicButtons";
import UserField from "@/app/components/UserField";
import User1 from "../../images/user1.png";
import Image from "next/image";

const Login = () => {
  const { data: session, status } = useSession();
  const [resError, setResError] = useState<Error>();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  //セッション判定
  if (session) redirect("/");

  const handleLogin = async (data: any) => {
    const email = data.email;
    const password = data.password;
    const res = await fetch("/api/signIn", {
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    if (res.ok) {
      signIn("credentials", { email: email, password: password });
    } else {
      const resError = await res.json();
      setResError(resError.errors);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 overflow-x-hidden">
      <div className="mb-10 text-center">
        <Image src={User1} alt="User" width={100} height={100} />
        <div className="text-2xl tracking-widest mt-4">ログイン</div>
      </div>

      <div className="w-full mb-4 mr-5">
        <UserField label="ユーザーID" defaultValue="" />
      </div>

      <div className="w-full mb-4 mr-5">
        <UserField label="パスワード" defaultValue="" />
      </div>

      <div className="w-full">
        <BasicButtons buttonText="ログイン" />
      </div>

      <nav className="mt-4 text-center w-full">
        <ul>
          <li>
            <a
              href="/auth/register"
              className="text-blue-500 hover:text-blue-700"
            >
              新規登録はこちら
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Login;