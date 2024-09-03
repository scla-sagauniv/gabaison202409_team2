import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function POST(req: NextRequest) {
  const { name, address, description, image_url } = await req.json();

  try {
    // データベースに新しい飲食店情報を追加
    await prisma.restaurants.create({
      data: {
        name,
        address,
        description,
        image_url,
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

export async function GET(req: NextRequest) {
  try {
    const restaurants = await prisma.restaurants.findMany();

    return new NextResponse(JSON.stringify({ restaurants }), { status: 200 });
  } catch (error) {
    //エラーログを出力
    console.error("Error:", error);
    //エラーレスポンスを返す
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
