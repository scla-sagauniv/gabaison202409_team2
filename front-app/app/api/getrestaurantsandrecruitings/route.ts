import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/Prisma";

export async function GET(req: NextRequest) {

  try {
    // 取得したデータを合成
    const recruitings = await prisma.recruitings.findMany({
      select: {
        id: true,
        max_guests: true,
        budget: true,
        meeting_time: true,
        restaurant: {
          select: {
            name: true,
            address: true,
            description: true,
            image_url: true,
          },
        },
      },
    });
    return new NextResponse(JSON.stringify({ recruitings }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    // エラーメッセージを返す
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}


