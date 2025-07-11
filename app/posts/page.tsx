// app/posts/page.tsx (서버 컴포넌트)
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function PostListPage() {
  const posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

  return (
    <div>
      <h1>📌 게시글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/posts/new">➕ 새 글 쓰기</Link>
    </div>
  );
}
