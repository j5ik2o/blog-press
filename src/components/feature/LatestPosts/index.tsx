"use client";

import { postsAtom } from "@/lib/atom/posts";
import { useAtom } from "jotai";
import Link from "next/link";

const LatestPosts = () => {
  const [postsLoadable] = useAtom(postsAtom);

  if (postsLoadable.state === "loading") {
    return <div>投稿を読み込んでいます...</div>;
  }

  if (postsLoadable.state === "hasError") {
    return <div>エラーが発生しました: {(postsLoadable.error as Error).message}</div>;
  }

  const posts = postsLoadable.data;

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
};

export default LatestPosts;
