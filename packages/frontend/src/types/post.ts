export type LatestPostsProps = {
  initialPosts?: Post[];
};

export type Post = {
  id: number;
  title: string;
  slug: string;
  // 他の必要なプロパティ
};
