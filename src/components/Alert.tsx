import React from "react";
import { Check, Warning } from "@/icons";

export default function Alert(props) {
  return (
    <div className="relative w-full px-4 py-2 border border-neutral-600 rounded text-sm flex items-center">
      {props.type === "warn" && (
        <span className="m-0 mr-4">
          <Warning />
        </span>
      )}
      {props.type === "check" && (
        <span className="m-0 mr-4">
          <Check />
        </span>
      )}
      <span className="m-0">{props.children}</span>
    </div>
  );
}
