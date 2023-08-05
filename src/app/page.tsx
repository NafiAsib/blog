import ArrowRight from "@/components/icons";
import Link from "next/link";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className="">
      <div className="text-5xl mb-10">
        <p className="mb-8">
          Hey<span className={`wave mx-4`}> 👋 </span>I&apos;m Nafi!
        </p>
        <p>Software Engineer from Dhaka, Bangladesh</p>
      </div>
      <div className="mb-10 text-3xl">
        <p>Currently working remotely as an Associate Software Developer</p>
      </div>
      <div className="mb-5 text-xl">
        <p>
          Here I dump my (un-organized 🥲) notes while learning something fun!
        </p>
      </div>
      <Link href="/posts" className="flex text-2xl">
        View all my notes <ArrowRight />
      </Link>
    </section>
  );
}
