import Image from "next/image";
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
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "url(https://blog.nafiasib.com/og-bg.png)",
          fontSize: 130,
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
            textAlign: "right",
            marginLeft: 190,
            marginRight: 190,
          }}
        >
          {postTitle}
        </div>
        <div
          style={{
            // backgroundImage:
            // "linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))",
            // backgroundClip: "text",
            // WebkitBackgroundClip: "text",
            color: "white",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            whiteSpace: "pre-wrap",
            fontSize: 50,
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            marginTop: 80,
            alignContent: "center",
          }}
        >
          <img
            src="https://blog.nafiasib.com/avatar-rounded.png"
            height={150}
            width={150}
            alt="rounded avatar"
          />
          <span
            style={{
              marginLeft: 40,
              marginTop: 35,
            }}
          >
            Nafi Asib
          </span>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
