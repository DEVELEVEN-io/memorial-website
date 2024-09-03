// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/getPost");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div>
        <h2 className="mb-4 text-xl">Posts:</h2>
        <ul className="editor-container space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="rounded-md border p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: post.content }} // Render HTML content
              />
              <p className="text-sm text-gray-400">
                By{" "}
                <span className="text-blue-400">
                  {post.user?.name || "Unknown"}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
