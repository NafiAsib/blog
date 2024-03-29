import type { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

import PHProvider from "@/providers/PHProvider";

import { TailwindIndicator } from "@/components/TailwindIndicator";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Nafi Asib",
    template: "%s | Nafi Asib",
  },
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <PHProvider>
        <body
          className={`${poppins.variable} max-w-2xl antialiased font-sans bg-gradient-to-r from-gray-700 to-gray-800 mx-auto mt-20 mb-40 px-4 sm:px-16`}
        >
          <main>{children}</main>
          <TailwindIndicator />
          <Footer />
        </body>
      </PHProvider>
    </html>
  );
}
