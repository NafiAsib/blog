import Link from "next/link";
import React from "react";
import { Heart } from "./icons";

export default function Footer() {
  return (
    <footer className="text-white/60 mt-20 flex gap-x-1">
      Built with{" "}
      <Link
        href={"https://nextjs.org/"}
        className="hover:underline hover:text-white hover:underline-offset-4"
      >
        Next.js,
      </Link>
      <Link
        href={"https://contentlayer.dev/"}
        className="hover:underline hover:text-white hover:underline-offset-4"
      >
        Contentlayer
      </Link>
      and
      <Link
        href={"https://tailwindcss.com/"}
        className="group hover:underline hover:text-white items-center flex gap-x-1 hover:underline-offset-4"
      >
        Tailwind <Heart className="group-hover:text-red-600" />
      </Link>
    </footer>
  );
}
