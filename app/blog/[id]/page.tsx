// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { Metadata } from "next";
import Link from "next/link";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { next: { revalidate: 60 } }
  );

  return response.json();
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { id } = await params;
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>
        <Link href="/blog">Назад</Link>
      </h2>
    </>
  );
}
