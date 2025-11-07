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
        "text-left block overflow-hidden rounded-2xl bg-surface p-7 transition duration-300 hover:bg-surface-soft",
        "border border-border",
        "transform hover:scale-[1.01] hover:-translate-y-0.5",
        "group shadow-sm hover:shadow-md"
      )}
    >
      <h2 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
        {post.title}
      </h2>
      <time
        dateTime={post.publishedAt}
        className="block text-sm font-semibold text-text-muted mt-2 group-hover:text-text-secondary transition-colors duration-300"
      >
        {format(parseISO(post.publishedAt), "MMMM d, yyyy")}
      </time>
      <p className="mt-4 text-text-secondary group-hover:text-text-primary transition-colors duration-300 line-clamp-3">
        {post.description}
      </p>
      <div className="mt-4 flex items-center text-text-muted group-hover:text-accent transition-colors duration-300">
        <span className="text-sm">Read more</span>
        <svg
          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
