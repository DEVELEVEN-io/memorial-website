// src/app/contribute/ContributeForm.tsx
"use client";

import { Button, Editor } from "@/components";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";

export default function ContributeForm() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color.configure({ types: ["textStyle"] }),
      Highlight.configure({ multicolor: true }),
      Link,
    ],
    content: "<p>Start typing from here.</p>",
    immediatelyRender: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submission data:");
    console.log("Title:", title);
    console.log("Content:", editor?.getHTML());

    if (status === "authenticated" && session?.user?.email) {
      console.log("User Email:", session.user.email);

      try {
        const response = await fetch("/api/createPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content: editor?.getHTML(),
            userEmail: session.user.email,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create post");
        }

        router.push("/");
      } catch (error) {
        console.error("Error creating post:", error);
      }
    } else {
      console.error("User email not found.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-6 flex flex-col">
        <label htmlFor="title" className="text-xl font-semibold">
          Title:
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-2 rounded-md border border-gray-700 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="my-6">
        <Editor editor={editor} />
      </div>
      <Button
        text="Create Post"
        place="end"
        size="large"
        color="primary"
        type="submit"
        icon={<MdOutlinePostAdd />}
        onClick={() => console.log("Button clicked!")}
      />
    </form>
  );
}
