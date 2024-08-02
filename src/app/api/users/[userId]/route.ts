import userService from "@/backend/services/user-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const user = await userService.getUserById(userId);
    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      error.message;
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
}
