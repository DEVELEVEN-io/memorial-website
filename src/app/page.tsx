// src/app/page.tsx

export const revalidate = 60; // Revalidate every 60 seconds

async function fetchPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${baseUrl}/api/getPost`, {
    cache: "no-store", // Ensure no caching for fetch requests
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function Main() {
  try {
    const posts = await fetchPosts();

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
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-xl">Posts:</h2>
        <p className="text-red-500">
          Failed to load posts. Please try again later.
        </p>
      </div>
    );
  }
}
