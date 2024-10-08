"use client"
import * as React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Skeleton from '@mui/material/Skeleton';
import { redirect } from "next/navigation";

export default function TestMain() {
    const { data: session, status } = useSession()

    //追加
    if (session) redirect("/");

    return (

        <>
            <div className="flex items-center flex-col">
                {/* <h1 className="text-3xl m-10 font-bold">Next Auth</h1> */}
                <div className="flex items-center flex-col m-5">
                    <div className="m-2">ログイン中のユーザー</div>
                    {status === "loading" ? (
                        <Skeleton variant="text" animation="wave" width={175} height={25} />
                    ) : (
                        <p className="font-bold">{session?.user?.email}</p>
                    )}
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 py-2 px-3 text-xs text-white rounded-lg"
                >
                    サインアウトする
                </button>
            </div>
        </>
    );
}