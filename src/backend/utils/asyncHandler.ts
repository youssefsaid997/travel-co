import { func } from "joi";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

const AsyncHandler =
  (func: any) => (req: NextRequest, res: NextResponse, next: any) =>
    Promise.resolve(func(req, res, next)).catch(next);
