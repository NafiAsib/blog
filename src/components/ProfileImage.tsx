import Image from "next/image";
import { cn } from "@/lib/utils";

export const ProfileImage = ({
  size = "large",
  isInteractive,
}: {
  size: "small" | "large";
  isInteractive?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-tl from-grey-900/60 to-grey-600/60 shadow-lg w-fit",
        size == "small" && "p-[2px]",
        size == "large" && "p-[3px]",

        isInteractive &&
          "group transform transition ease-out hover:scale-105 hover:from-grey-700 hover:to-grey-400 hover:shadow-yellow-500/25 active:translate-y-px",
        !isInteractive && "ring-[5px] ring-yellow-500/10"
      )}
    >
      <div
        className={cn(
          "rounded-full p-px",
          size == "small" && "p-[2px]",
          size == "large" && "p-[3px]",
          isInteractive && "group-hover:ring-yellow-400/50"
        )}
      >
        <Image
          src="https://res.cloudinary.com/ironyn/image/upload/c_thumb,w_2000,h_2000,g_auto/v1691235299/nafi.jpg"
          alt="K. M. Nafi Asib"
          quality={95}
          priority={true}
          className="rounded-full"
          width={size === "small" ? 36 : 64}
          height={size === "small" ? 36 : 64}
        />
      </div>
    </div>
  );
};
