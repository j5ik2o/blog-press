import type { Post } from "@/types/post";
import Link from "next/link";

type Props = {
    caption: string;
  posts: Post[];
};

const Posts = ({ caption, posts }: Props) => {
  if (posts.length === 0) {
    return <div>投稿がありません。</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{caption}</h2>
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

export default Posts;
