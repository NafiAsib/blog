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
          <p className="mb-8 text-6xl font-bold bg-gradient-to-r from-white via-slate-300 to-indigo-200 bg-clip-text text-transparent">
            Hey<span className={`wave mx-4 text-white`}> 👋 </span>
          </p>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            I&apos;m Nafi Asib!
          </h1>
          <TypeWriter />
        </div>
      </motion.div>

      <motion.div
        className="mb-8 text-xl text-slate-300 leading-relaxed"
        {...getAnimateProps({ delay: 0.3, shouldReduceMotion })}
      >
        <p className="max-w-2xl">
          This is an experimental digital garden where I share my learning
          journey and insights into software engineering, product development,
          and technology!
        </p>
      </motion.div>

      <motion.div
        {...getAnimateProps({ delay: 0.5, shouldReduceMotion })}
        className="space-y-8"
      >
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
          Latest Posts
        </h2>
        <PostList />
      </motion.div>
    </section>
  );
}
