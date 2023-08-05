import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    url: post.url,
  }));
}

type Props = {
  [param: string]: any;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Cannot find post with slug ${params.slug}`);
  return (
    <article className="mx-auto max-w-2xl">
      <div className="mb-6 text-center">
        <Link href="/posts">
          <span className="text-center text-sm font-bold uppercase text-slate-100">
            Back to all notes
          </span>
        </Link>
      </div>
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div
        className="cl-post-body"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostLayout;
