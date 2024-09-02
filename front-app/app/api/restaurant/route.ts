import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, address, description, image_url } = data;

  try {
    // リクエストボディをJSON形式で取得
    const data = await req.json();

    // データベースに新しい飲食店情報を追加
    await prisma.restaurant.create({
      data: {
        name: name,
        address: address,
        description: description,
        image_url: image_url,
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
    const restaurants = await prisma.restaurant.findMany();
    return new NextResponse(JSON.stringify({ restaurants }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
