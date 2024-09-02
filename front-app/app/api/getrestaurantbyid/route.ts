import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function POST(req: NextRequest) {
  const { restaurantID } = await req.json();

  try {
    // データベースに新しい飲食店情報を追加
    await prisma.restaurants.findUnique({
      where:{
        id: restaurantID
      }
    });

    // 成功メッセージを返す
    return new NextResponse(
      JSON.stringify({ message: "Restaurant added successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    // エラーメッセージを返す
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}


