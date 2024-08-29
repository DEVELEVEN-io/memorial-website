"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addPerson(
  personName: string,
  userEmail: string,
  dateOfBirth: Date,
  birthplace: string,
  education: string,
) {
  try {
    // Debugging: Log the received data
    console.log("Received personName:", personName);
    console.log("Received userEmail:", userEmail);
    console.log("Received dateOfBirth:", dateOfBirth);
    console.log("Received birthplace:", birthplace);
    console.log("Received education:", education);

    // Ensure the user exists
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      console.error("User not found for email:", userEmail);
      throw new Error("User not found");
    }

    // Ensure the post exists or create it if not
    let post = await prisma.userPost.findUnique({
      where: { userId: { name: personName, userId: user.id } },
    });

    if (!post) {
      post = await prisma.userPost.create({
        data: {
          name: personName,
          dateOfBirth: dateOfBirth,
          birthplace: birthplace,
          education: education,
          user: { connect: { id: user.id } },
          region: {
            connectOrCreate: {
              where: { id: user.id }, // Adjust based on your actual setup
              create: { name: "Default Region" },
            },
          },
        },
      });
    } else {
      console.log("Post already exists.");
    }

    console.log("Post added successfully for user:", user.email);
    // Revalidate or redirect as needed
    revalidatePath("/post");
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
}
