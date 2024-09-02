import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function POST(req: NextRequest) {
  const { restaurantId } = await req.json();

  try {
    // データベースにから取得
    const res = await prisma.restaurants.findUnique({
      where:{
        id: restaurantId
      }
    });

    // 成功メッセージを返す
    return new NextResponse(
      JSON.stringify({res}),
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


