import Link from "next/link";
import React from "react";
import { Heart } from "./icons";

export default function Footer() {
  return (
    <footer className="text-text-muted mt-20 flex gap-x-1">
      Built with{" "}
      <Link
        href={"https://nextjs.org/"}
        className="hover:underline hover:text-text-secondary hover:underline-offset-4 transition-colors duration-200"
      >
        Next.js,
      </Link>
      <Link
        href={"https://contentlayer.dev/"}
        className="hover:underline hover:text-text-secondary hover:underline-offset-4 transition-colors duration-200"
      >
        Contentlayer
      </Link>
      and
      <Link
        href={"https://tailwindcss.com/"}
        className="group hover:underline hover:text-text-secondary items-center flex gap-x-1 hover:underline-offset-4 transition-colors duration-200"
      >
        Tailwind{" "}
        <Heart className="group-hover:text-red-500 transition-colors duration-200" />
      </Link>
    </footer>
  );
}
