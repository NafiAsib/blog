import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage:
            "linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))",
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(255, 228, 230), rgb(204, 251, 241))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",

            color: "transparent",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
            fontSize: "40",
          }}
        >
          Nafi Asib
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
