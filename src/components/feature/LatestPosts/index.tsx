"use client";

import Link from "next/link";
import {Post} from "@/types/post";

type LatestPostsProps = {
  posts: Post[];
};

const LatestPosts = ({ posts } : LatestPostsProps) => {

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
