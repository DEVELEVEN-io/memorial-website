// src/app/api/createPost/route.ts
import { createPost } from "@/actions/actions";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, content, userEmail } = await request.json();

    // Validate request body
    if (!title || !content || !userEmail) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Call the server-side function to create a new post
    const post = await createPost(title, content, userEmail);

    // Trigger revalidation of the homepage or relevant page
    revalidatePath("/");
    revalidateTag("/api/getPost");

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}
