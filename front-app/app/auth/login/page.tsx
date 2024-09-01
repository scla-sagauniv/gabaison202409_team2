"use client";
import React from "react";
<<<<<<< HEAD
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
=======
import BasicButtons from "@/app/components/BasicButtons";
import UserField from "@/app/components/UserField";
import User1 from "../../images/user1.png";
import Image from "next/image";
>>>>>>> main

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
<<<<<<< HEAD
    <>
      <div className="flex flex-col w-full h-screen text-sm items-center justify-center">
        <div className="flex flex-col items-center justify-center p-10 border-2 rounded-2xl">
          <p className="text-2xl font-bold mb-5">ログイン画面</p>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col items-center"
          >
            <div className="text-xs font-bold text-red-400 mb-4">
              {resError as React.ReactNode}
            </div>
            <label htmlFor="email">
              <p>メールアドレス</p>
              <input
                type="text"
                id="email"
                {...register("email")}
                className=" border-2 w-[300px] h-[35px] px-2 mb-2"
              />
              <div className="text-xs font-bold text-red-400 mb-2">
                {errors.email?.message as React.ReactNode}
              </div>
            </label>
            <label htmlFor="password">
              <p>パスワード</p>
              <input
                type="password"
                id="password"
                {...register("password")}
                className=" border-2 w-[300px] h-[35px] px-2 mb-2"
              />
              <div className="text-xs font-bold text-red-400 mb-2">
                {errors.password?.message as React.ReactNode}
              </div>
            </label>
            <button
              type="submit"
              className="text-white bg-gray-700 w-[300px] h-[35px] mt-2"
            >
              ログイン
            </button>
          </form>
          <hr className="my-4 border-gray-300 w-[300px]" />
          <div className="flex flex-col items-center">
            <button
              onClick={() => {
                signIn("github");
              }}
              className="bg-white text-black border-2 w-[300px] h-[35px] mb-2"
            >
              Githubでログイン
            </button>
            <button
              onClick={() => {
                signIn("google");
              }}
              className="bg-white text-black border-2 w-[300px] h-[35px] mb-2"
            >
              Googleでログイン
            </button>
            <Link href="/signup" className="mt-2">
              新規登録はこちら
            </Link>
          </div>
        </div>
      </div>
    </>
=======
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
>>>>>>> main
  );
};

export default Login;