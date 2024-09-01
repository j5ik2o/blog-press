import type { Post } from "@/types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}/api/posts`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts.ts");
  }
  return response.json();
};
