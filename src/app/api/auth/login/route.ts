import authService from "@/backend/services/auth-service";
import loginSchema from "@/backend/validation/login-validation";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const user = await request.json();
  // login validation;

  try {
    const isValid = await loginSchema.validateAsync(user);
    const token = await authService.login(isValid);
    return NextResponse.json(
      { message: "logged in successfully", token },
      { status: 200 }
    );
  } catch (error) {
    const err = error as ApiError;

    // const errorMessage =
    //   error instanceof Error ? error.message : "Validation error";
    // const errorStatusCode = error instanceof ApiError ? error.statusCode : 500;
    return NextResponse.json(
      { message: "failed to log in", error: err.message },
      { status: err.statusCode }
    );
  }
}
