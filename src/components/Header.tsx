"use client";
import React from "react";
import { ProfileImage } from "./ProfileImage";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Book, Home } from "./icons";
import Image from "next/image";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 110) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mb-6 py-2 px-2 top-0 sticky w-full bg-slate-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 flex items-center justify-between gap-x-3"
    >
      <Image src="/logo.png" height={30} width={30} alt="logo" />
      <nav className="flex self-end gap-x-2 items-center">
        <Link
          href={`/`}
          className="items-center flex gap-x-1 hover:text-white font-semibold text-white group relative overflow-hidden p-2 rounded"
        >
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-slate-400 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-slate-400 transition-all duration-200 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-slate-400 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-slate-400 transition-all duration-200 group-hover:h-full"></span>

          <Home />
          <span className="">Home</span>
        </Link>
        <Link
          href={`/posts`}
          className="items-center flex gap-x-1 hover:text-white font-semibold text-white group relative overflow-hidden p-2 rounded"
        >
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-slate-400 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-slate-400 transition-all duration-200 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-slate-400 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-slate-400 transition-all duration-200 group-hover:h-full"></span>

          <Book />
          <span className="">All Notes</span>
        </Link>
      </nav>
    </motion.header>
  );
}
