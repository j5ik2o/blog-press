import { BASE_URL } from "@/lib/config";
import type { Post } from "@/types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  const url = `${BASE_URL}/api/posts`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts.ts");
  }
  return response.json();
};
