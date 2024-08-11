import userService from "@/backend/services/user-service";
import IUser from "@/backend/types/IUser";
import userSchema from "@/backend/validation/User-validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userData: IUser = await userSchema.validateAsync(body);
    const user = await userService.createUser(userData);
    return NextResponse.json(
      { message: "user created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
}
