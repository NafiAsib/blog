import type { Metadata } from "next";
import Link from "next/link";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { AnimatePage } from "@/components/atoms/AnimatePage";

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
  const MDXContent = getMDXComponent(post.body.code);
  return (
    <AnimatePage>
      <article className="mx-auto max-w-2xl prose">
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
        <MDXContent />
      </article>
    </AnimatePage>
  );
};

export default PostLayout;
