import React from "react";
import { Check, Warning } from "@/icons";

export default function Alert(props) {
  return (
    <div className="relative w-full px-4 py-2 border border-neutral-600 rounded text-sm flex items-center">
      <span className="m-0 mr-4">{props.type === "warn" && <Warning />}</span>
      <span className="m-0 mr-4">{props.type === "check" && <Check />}</span>
      <p className="m-0">{props.children}</p>
    </div>
  );
}
