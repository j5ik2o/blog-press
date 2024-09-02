import type { Post } from "@/types/post";
import {Config} from "@/lib/config";

export const fetchPosts = async (): Promise<Post[]> => {
  const url = `${Config.BASE_URL}/api/posts`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts.ts");
  }
  return response.json();
};
