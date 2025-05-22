"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Book, Home } from "@/components/icons";
import AnimatedBorderLink from "@/components/AnimatedBorderLink";

export default function Header() {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

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
        visible: { y: 30 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mb-10 py-3 px-4 top-0 sticky w-full bg-slate-800/50 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 
      border border-white/10 shadow-lg flex items-center justify-between gap-x-3"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src="/logo.png"
          height={35}
          width={35}
          alt="logo"
          className="rounded-lg"
        />
      </motion.div>
      <nav className="flex self-end gap-x-3 items-center">
        <AnimatedBorderLink
          href="/"
          icon={
            <Home className="group-hover:text-indigo-400 transition-colors duration-300" />
          }
          label="Home"
        />
        <AnimatedBorderLink
          href="/posts"
          icon={
            <Book className="group-hover:text-indigo-400 transition-colors duration-300" />
          }
          label="All Notes"
        />
      </nav>
    </motion.header>
  );
}
