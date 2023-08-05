import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-100">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <span className="text-zinc-500 hover:text-zinc-300">
            {post.title}
          </span>
        </Link>
      </h2>
    </div>
  );
}

export default function Home({}) {
  return (
    <div className="mx-auto max-w-2xl  text-center">
      <Head>
        <title>All my notes</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">All my notes</h1>
      {allPosts
        .sort((a, b) => {
          return compareDesc(new Date(a.date), new Date(b.date));
        })
        .map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
    </div>
  );
}
