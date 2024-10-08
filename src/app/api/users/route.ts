import userService from "@/backend/services/user-service";
import User from "@/backend/types/IUser";
import userSchema from "@/backend/validation/User-validation";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await userService.getUsers();
  return NextResponse.json({
    message: "people retrived successfully",
    users,
  });
}
export async function POST(request: NextRequest) {
  //here it will service function as logic

  // to be protective coder
  //validate we can create function to validate validation layer //mw in express with joi or yup

  //business logic
  // create use in the database

  try {
    const reqBody = await request.json();
    await userSchema.validateAsync(reqBody);
    const user = await userService.createUser(reqBody);
    return NextResponse.json(
      {
        message: "User added successfully!",
        user: user,
      },
      { status: 201 }
    );
  } catch (error) {
    const err = error as ApiError;

    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode }
    );
  }
}
