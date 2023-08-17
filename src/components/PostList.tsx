import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";

export default function PostList() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="mb-6 text-center">
        <Link href="/">
          <span className="text-center text-sm font-bold uppercase text-slate-100">
            Back to home
          </span>
        </Link>
      </div>
      {allPosts
        .sort((a, b) => {
          return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
        })
        .map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
    </div>
  );
}
