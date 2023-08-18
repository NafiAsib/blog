"use client";
import { motion, useReducedMotion } from "framer-motion";
import PostList from "@/components/PostList";
import { AnimatePage } from "@/components/atoms/AnimatePage";

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
        className="mb-10 text-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent"
      >
        <p className="mb-8 text-5xl text-zinc-300">
          Hey<span className={`wave mx-4`}> 👋 </span>
        </p>
        I&apos;m Nafi Asib!
        <p>Software Engineer from Dhaka, Bangladesh</p>
      </motion.div>

      <motion.div
        className="mb-5 text-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent"
        {...getAnimateProps({ delay: 0.3, shouldReduceMotion })}
      >
        <p>
          This is an experimental digital garden where I share my learnings!
        </p>
      </motion.div>
      <motion.div {...getAnimateProps({ delay: 0.5, shouldReduceMotion })}>
        <PostList />
      </motion.div>
    </section>
  );
}
