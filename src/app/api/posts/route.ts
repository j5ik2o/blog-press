import { mockPosts } from "@/mocks/posts";
import { NextResponse } from "next/server";

export async function GET() {
  // 実際のAPIリクエストをシミュレートするために、少し遅延を入れます
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(mockPosts);
}
