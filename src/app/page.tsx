import LatestPosts from "@/components/feature/LatestPosts";
import { mockPosts } from "@/mocks/posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">BlogPressへようこそ</h1>
        <p className="text-xl text-center">最新の記事や人気の記事をチェックして、興味深い情報を見つけましょう。</p>
        <LatestPosts initialPosts={mockPosts} />
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            すべての記事を見る
          </Link>
        </div>
      </div>
    </main>
  );
}
