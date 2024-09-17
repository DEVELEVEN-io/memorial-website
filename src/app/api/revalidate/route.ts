// src/app/api/revalidate/route.ts

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Perform any necessary authorization or validation checks here

  // Invalidate the cache for the specified path
  revalidatePath("/");

  return NextResponse.json({ message: "Cache revalidation triggered" });
}
