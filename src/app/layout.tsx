import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import MenuProvider from "@/components/Menu";
import LoadAnimation from "@/components/LoadAnimation";
import CustomCursor from "@/components/CustomCursor";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Pensieve | Interior Design, Bangalore",
  description:
    "Studio Pensieve is a Bangalore-based interior design firm crafting thoughtful, timeless spaces.",
  keywords: ["interior design", "Bangalore", "Studio Pensieve", "home design", "commercial interiors"],
  authors: [{ name: "Studio Pensieve" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Studio Pensieve | Interior Design, Bangalore",
    description:
      "Studio Pensieve is a Bangalore-based interior design firm crafting thoughtful, timeless spaces.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
        />
      </head>
      <body className={`min-h-screen bg-background text-foreground antialiased ${caveat.variable}`}>
        <CustomCursor />
        <LoadAnimation />
        <TransitionProvider>
          <MenuProvider>{children}</MenuProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
