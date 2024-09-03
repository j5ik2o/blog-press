import NaviButton from "@/components/ui/LinkButton";
import { fetchPosts } from "@/lib/api/posts";
import { cache } from "react";
import Posts from "../components/feature/Posts";
import LinkButton from "@/components/ui/LinkButton";

const cachedFetchPosts = cache(fetchPosts);

export default async function Home() {
  const posts = await cachedFetchPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">BlogPressへようこそ</h1>
        <p className="text-xl text-center">最新の記事や人気の記事をチェックして、興味深い情報を見つけましょう。</p>
        <Posts caption="最新の記事" posts={posts} />
        <div className="text-center">
          <LinkButton href="/blog" variant="default" size="lg">すべての記事を見る</LinkButton>
        </div>
      </div>
    </main>
  );
}
