import type { Metadata } from "next";
import Image from "next/image";
import { getMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import { AnimatePage } from "@/components/atoms/AnimatePage";
import WIP from "@/components/WIP";
import Alert from "@/components/Alert";
import Header from "@/components/Header";

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
  const { title, publishedAt: publishedTime, description, slug } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://blog.nafiasib.com/posts/${slug}`,
      images: [
        {
          url: `https://blog.nafiasib.com/og?title=${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://blog.nafiasib.com/og?title=${title}`],
    },
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

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  WIP,
  Alert,
  Image: RoundedImage,
};

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Cannot find post with slug ${params.slug}`);
  const MDXContent = getMDXComponent(post.body.code);
  return (
    <AnimatePage>
      <Header />
      <section className="prose prose-headings:text-text text-left text-[#D4D4D4] prose-a:text-neutral-50 prose-a:no-underline prose-strong:text-[#D4D4D4] prose-code:text-white/80 prose-blockquote:text-[#D4D4D4]">
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-2xl font-bold">{post.title}</h1>
          <time dateTime={post.publishedAt} className="text-sm text-slate-400">
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <MDXContent components={{ ...components }} />
      </section>
    </AnimatePage>
  );
};

export default PostLayout;
