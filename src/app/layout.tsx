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
  metadataBase: new URL("https://www.studiopensieve.com"),
  title: "Studio Pensieve | Architecture & Interior Design, Bangalore",
  description:
    "Studio Pensieve is a Bangalore-based architecture and interior design firm crafting thoughtful, timeless spaces.",
  keywords: ["architecture", "interior design", "Bangalore", "Studio Pensieve", "home design", "commercial interiors"],
  authors: [{ name: "Studio Pensieve" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Studio Pensieve | Architecture & Interior Design, Bangalore",
    description:
      "Studio Pensieve is a Bangalore-based architecture and interior design firm crafting thoughtful, timeless spaces.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Studio Pensieve" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Pensieve | Architecture & Interior Design, Bangalore",
    description:
      "Studio Pensieve is a Bangalore-based architecture and interior design firm crafting thoughtful, timeless spaces.",
    images: ["/og-default.jpg"],
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
