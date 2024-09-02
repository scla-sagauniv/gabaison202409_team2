import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function POST(req: NextRequest) {
  const { max_guests, budget, meeting_time, restaurantID } = await req.json();

  try {
    //データベースに募集情報を追加
    await prisma.recruitings.create({
      data: {
        max_guests,
        budget,
        meeting_time,
        restaurant:{
          connect:{ id: restaurantID }
        }
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
    const recruting = await prisma.recruitings.findMany();

    return new NextResponse(JSON.stringify({ recruting }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
