import { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nafi Asib | Blog",
  description: "Blog of Nafi Asib",
  authors: [{ name: "K. M. Nafi Asib", url: "https://nafiasib.com" }],
  keywords: [
    "Blog, Software Enginner",
    "React.js",
    "Next.js",
    "Backend",
    "Frontend",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans bg-gradient-to-r from-gray-700 to-gray-800 max-w-4xl mx-auto mt-20`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}