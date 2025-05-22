import Link from "next/link";
import React from "react";

type Props = {
  icon?: React.ReactNode;
  label: string;
  href: string;
};

export default function AnimatedBorderLink({ icon, label, href }: Props) {
  return (
    <Link
      href={href}
      className="items-center flex gap-x-2 text-slate-300 font-medium group relative px-3 py-1.5 rounded-lg
      hover:text-white transition-all duration-500"
    >
      <span className="absolute inset-0 rounded-lg bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="absolute inset-0 rounded-lg border-[0.5px] border-white/10 group-hover:border-white/20 transition-colors duration-500"></span>

      {!!icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}
