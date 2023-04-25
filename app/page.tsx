import Link from "next/link";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <Link href="/posts"> Go to posts</Link>
    </section>
  );
}
