import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
            <Link href='/about/contacts'>contact</Link>
        </li>
        <li>
            <Link href='/about/team'>team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
