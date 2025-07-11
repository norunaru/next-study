// app/posts/[id]/page.tsx (서버 컴포넌트)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
