// src/app/api/revalidate/route.ts

"use server";

import { revalidatePath } from "next/cache";

export async function triggerRevalidate() {
  // Manually trigger revalidation for the specific path
  revalidatePath("/"); // Adjust path as needed
}
