// src/app/api/createPost/route.ts
import { createPost } from "@/actions/actions";
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

    // Call the server-side function
    const post = await createPost(title, content, userEmail);

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}
