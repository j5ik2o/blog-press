"use client";

import { selectPosts, setPosts } from "@/lib/features/posts/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { LatestPostsProps } from "@/types/post";
import Link from "next/link";
import { useEffect } from "react";

export default function LatestPosts({ initialPosts }: LatestPostsProps) {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(setPosts(initialPosts));
  }, [dispatch, initialPosts]);

  if (posts.length === 0) {
    return <div>投稿がありません。</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">最新の記事</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
