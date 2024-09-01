import { atom } from "jotai";
import { loadable } from "jotai/utils";
import type { Post } from "@/types/post";

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const rawPostsAtom = atom(fetchPosts());
export const postsAtom = loadable(rawPostsAtom);
