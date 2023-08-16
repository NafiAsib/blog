import { Metadata } from "next";
import PostList from "@/components/PostList";

export const metadata: Metadata = {
  title: "Posts | Nafi Asib",
};

export default function Posts() {
  return <PostList />;
}
