import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const font = fetch(
    new URL("../../../public/fonts/Nunito-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
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
            display: "flex",
            alignContent: "center",
            color: "transparent",
            fontFamily: "Nunito",
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
            display: "flex",
            alignContent: "center",
            marginTop: 80,
            color: "white",
            fontFamily: "Nunito",
            fontSize: 50,
            fontStyle: "normal",
            letterSpacing: "-0.05em",
            whiteSpace: "pre-wrap",
          }}
        >
          <span
            style={{
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
      fonts: [
        {
          name: "Nunito",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
