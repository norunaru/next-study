import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });

  if (!post) return new Response("Not found", { status: 404 });
  return Response.json(post);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, content } = await req.json();

  const updated = await prisma.post.update({
    where: { id: Number(params.id) },
    data: { title, content },
  });

  return Response.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.post.delete({
    where: { id: Number(params.id) },
  });

  return new Response("Deleted", { status: 204 });
}
