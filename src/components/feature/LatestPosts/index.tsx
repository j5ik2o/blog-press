import Link from "next/link";

// 仮の記事データ型
type Post = {
  id: number;
  title: string;
  slug: string;
};

// 仮の記事データ
const latestPosts: Post[] = [
  { id: 1, title: "サンプル記事1のタイトル", slug: "sample-post-1" },
  { id: 2, title: "サンプル記事2のタイトル", slug: "sample-post-2" },
  { id: 3, title: "サンプル記事3のタイトル", slug: "sample-post-3" },
];

export default function LatestPosts() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">最新の記事</h2>
      <ul className="space-y-2">
        {latestPosts.map((post) => (
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
