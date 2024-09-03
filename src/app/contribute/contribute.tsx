// src/components/Contribute.tsx
"use client";

import { Editor } from "@/components";
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

export default function Contribute() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession(); // Get session data

  // Initialize the editor
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
        // Call the server-side function from the client
        const post = await fetch("/api/createPost", {
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

        if (!post.ok) {
          throw new Error("Failed to create post");
        }

        router.push("/contribute");
      } catch (error) {
        console.error("Error creating post:", error);
      }
    } else {
      console.error("User email not found.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Editor editor={editor} /> {/* Pass the editor instance */}
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
