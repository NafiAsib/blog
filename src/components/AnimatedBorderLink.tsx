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
      className="items-center flex gap-x-2 text-text-secondary font-medium group relative px-3 py-1.5 rounded-lg
      hover:text-accent transition-all duration-500"
    >
      <span className="absolute inset-0 rounded-lg bg-surface-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="absolute inset-0 rounded-lg border-[0.5px] border-border group-hover:border-accent/30 transition-colors duration-500"></span>

      {!!icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}
