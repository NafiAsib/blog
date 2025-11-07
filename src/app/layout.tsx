import type { PropsWithChildren } from "react";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import PHProvider from "@/providers/PHProvider";

import { TailwindIndicator } from "@/components/TailwindIndicator";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.nafiasib.com"),
  title: {
    default: "Nafi Asib",
    template: "%s | Nafi Asib",
  },
  description: "Blog of Nafi | Engineer | Explorer",
  authors: [{ name: "K M Nafi Asib", url: "https://blog.nafiasib.com" }],
  keywords: [
    "Blog, Software Enginner",
    "React.js",
    "Next.js",
    "Backend",
    "Frontend",
  ],
  openGraph: {
    title: "K M Nafi Asib",
    description: "Blog of Nafi | Engineer | Explorer",
    url: "https://blog.nafiasib.com",
    siteName: "Nafi Asib",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "K M Nafi Asib",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <PHProvider>
        <body
          className={cn(
            "max-w-2xl antialiased font-sans bg-bg text-text-primary mx-auto mt-20 mb-40 px-4 sm:px-16",
            GeistSans.variable,
            GeistMono.variable
          )}
        >
          <main>{children}</main>
          <TailwindIndicator />
          <Footer />
        </body>
      </PHProvider>
    </html>
  );
}
