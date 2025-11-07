"use client";
import { motion, useReducedMotion } from "framer-motion";
import PostList from "@/components/PostList";
import { TypeWriter } from "@/components/TypeWriter";

const initial = {
  y: 10,
  opacity: 0,
};

const animate = {
  y: 0,
  opacity: 1,
};

const getAnimateProps = ({ delay = 0, shouldReduceMotion }) => ({
  initial: shouldReduceMotion ? false : initial,
  animate,
  transition: {
    type: "spring",
    delay,
  },
});

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="">
      <motion.div
        {...getAnimateProps({ shouldReduceMotion })}
        className="flex flex-col gap-4 mb-12 text-2xl"
      >
        <div className="">
          <p className="mb-8 text-6xl font-bold text-text-primary">
            Hey<span className={`wave mx-4 text-text-primary`}> 👋🏻 </span>
          </p>
          <h1 className="text-4xl font-bold mb-4">I&apos;m Nafi Asib!</h1>
          <TypeWriter />
        </div>
      </motion.div>

      <motion.div
        className="mb-8 text-xl text-text-secondary leading-relaxed"
        {...getAnimateProps({ delay: 0.3, shouldReduceMotion })}
      >
        <p className="max-w-2xl">
          Welcome to my experimental digital garden! Here I occassionally share
          my learning journey and insights into software engineering, product
          development, and technology in general!
        </p>
      </motion.div>

      <motion.div
        {...getAnimateProps({ delay: 0.5, shouldReduceMotion })}
        className="space-y-8"
      >
        <h2 className="text-2xl font-semibold text-text-primary mb-6">
          Latest Posts
        </h2>
        <PostList />
      </motion.div>
    </section>
  );
}
