import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany({ orderBy: { id: "desc" } });
  return Response.json(posts);
}

export async function POST(req: Request) {
  const { title, content } = await req.json();

  const newPost = await prisma.post.create({
    data: { title, content },
  });

  return Response.json(newPost, { status: 201 });
}
