import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) throw new Error("что то не так");

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>blog</h1>
      <div className="blogs">
        <ul>
          {posts.map((post: { title: string; id: string }) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
