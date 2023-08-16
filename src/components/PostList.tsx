import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostPreview from "@/components/PostPreview";

export default function PostList() {
  return (
    <div className="flex flex-col gap-y-6">
      {allPosts
        .sort((a, b) => {
          return compareDesc(new Date(a.date), new Date(b.date));
        })
        .map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
    </div>
  );
}
