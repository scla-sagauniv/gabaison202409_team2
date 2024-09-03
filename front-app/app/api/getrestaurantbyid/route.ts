import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function POST(req: NextRequest) {
  const { restaurantId } = await req.json();

  try {
    // データベースにから取得
    const res = await prisma.restaurants.findUnique({
      where: {
        id: restaurantId,
      },
    });

    // 成功メッセージを返す
    return new NextResponse(JSON.stringify({ res }), { status: 201 });
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
    // クエリパラメータから restaurantId を取得
    const url = new URL(req.url);
    const restaurantId = url.searchParams.get("id");

    if (!restaurantId) {
      return new NextResponse(
        JSON.stringify({ error: "Restaurant ID is required" }),
        { status: 400 }
      );
    }

    // restaurantId に基づいて特定の飲食店を取得
    const restaurant = await prisma.restaurants.findUnique({
      where: {
        id: parseInt(restaurantId, 10),
      },
    });

    if (!restaurant) {
      return new NextResponse(
        JSON.stringify({ error: "Restaurant not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(restaurant), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
