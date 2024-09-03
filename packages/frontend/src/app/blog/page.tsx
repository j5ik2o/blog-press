import Posts from "@/components/feature/Posts";
import { fetchPosts } from "@/lib/api/posts";
import { cache } from "react";

const cachedFetchPosts = cache(fetchPosts);

const BlogIndex = async () => {
  const posts = await cachedFetchPosts();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
        <div className="max-w-4xl w-full space-y-8">
          <Posts caption="すべての記事"  posts={posts} />
        </div>
      </main>
    </>
  );
};

export default BlogIndex;
