import type { Metadata } from "next";
import Link from "next/link";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { AnimatePage } from "@/components/atoms/AnimatePage";
import WIP from "@/components/WIP";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    url: post.slug,
  }));
}

type Props = {
  [param: string]: any;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }
  const { title, publishedAt, description } = post;

  return {
    title,
    description,
  };
}

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

const components = {
  WIP,
};

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Cannot find post with slug ${params.slug}`);
  const MDXContent = getMDXComponent(post.body.code);
  return (
    <AnimatePage>
      <article className="prose prose-headings:text-text text-left text-[#D4D4D4] prose-a:text-neutral-50 prose-a:no-underline prose-strong:text-[#D4D4D4]">
        <div className="mb-6 text-center">
          <Link href="/posts">
            <span className="text-center text-sm font-bold uppercase text-slate-100">
              Back to all notes
            </span>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-2xl font-bold">{post.title}</h1>
          <time dateTime={post.publishedAt} className="text-sm text-slate-400">
            {formatDate(post.publishedAt)}
            {/* {format(parseISO(post.publishedAt), "LLLL d, yyyy")} */}
          </time>
        </div>
        <MDXContent components={{ ...components }} />
      </article>
    </AnimatePage>
  );
};

export default PostLayout;
