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
      className="mb-10 py-2 px-2 top-0 sticky w-full bg-slate-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 flex items-center justify-between gap-x-3"
    >
      <Image src="/logo.png" height={30} width={30} alt="logo" />
      <nav className="flex self-end gap-x-2 items-center">
        <AnimatedBorderLink href="/" icon={<Home />} label="Home" />
        <AnimatedBorderLink href="/posts" icon={<Book />} label="All Notes" />
      </nav>
    </motion.header>
  );
}
