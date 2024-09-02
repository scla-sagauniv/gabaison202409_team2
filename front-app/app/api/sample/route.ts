import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function POST(req: NextRequest) {
  try {
    // リクエストボディをJSON形式で取得
    const data = await req.json();

    // データベースに新しい飲食店情報を追加
    await prisma.restaurant.create({
      data: {
        name: data.name,
        address: data.address,
        description: data.description,
        image_url: data.image_url,
      },
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
