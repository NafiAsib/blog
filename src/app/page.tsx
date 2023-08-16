import PostList from "@/components/PostList";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className="">
      <div className="mb-10 text-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
        <p className="mb-8 text-5xl text-zinc-300">
          Hey<span className={`wave mx-4`}> 👋 </span>
        </p>
        I&apos;m Nafi Asib!
        <p>Software Engineer from Dhaka, Bangladesh</p>
      </div>

      <div className="mb-5  text-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
        <p>This an experimental digital garden where I share my learnings!</p>
      </div>
      <PostList />
    </section>
  );
}
