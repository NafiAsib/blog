import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

type Props = {
  post: Post;
};

export default function PostPreview({ post }: Props) {
  return (
    <Link
      href={`posts/${post.slug}`}
      className={cn(
        "text-left block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium"
      )}
    >
      <h2 className="text-xl font-bold text-zinc-300">{post.title}</h2>
      <time
        dateTime={post.publishedAt}
        className="block text-sm font-semibold text-slate-100"
      >
        {format(parseISO(post.publishedAt), "MMMM d, yyyy")}
      </time>
      <p className="mt-4 text-slate-300">{post.description}</p>
    </Link>
  );
}
