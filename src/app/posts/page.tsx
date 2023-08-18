import { Metadata } from "next";
import PostList from "@/components/PostList";
import { AnimatePage } from "@/components/atoms/AnimatePage";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Posts() {
  return (
    <AnimatePage>
      <PostList />
    </AnimatePage>
  );
}
