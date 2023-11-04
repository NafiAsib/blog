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
      className="items-center flex gap-x-1 hover:text-white font-semibold text-white group relative overflow-hidden p-2 rounded"
    >
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-slate-400 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-slate-400 transition-all duration-200 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-slate-400 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-slate-400 transition-all duration-200 group-hover:h-full"></span>

      {!!icon && icon}
      <span className="">{label}</span>
    </Link>
  );
}
