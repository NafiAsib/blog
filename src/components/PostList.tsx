"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostPreview from "@/components/PostPreview";

export default function PostList() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-6">
      {pathname !== "/" ? (
        <div className="mb-6 text-center">
          <Link
            href="/"
            className="hover:text-accent transition-all duration-500"
          >
            <span className="text-center text-sm font-bold uppercase">
              Back to home
            </span>
          </Link>
        </div>
      ) : null}

      {allPosts
        .filter((post) => post.draft !== true)
        .sort((a, b) => {
          return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
        })
        .map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
    </div>
  );
}
