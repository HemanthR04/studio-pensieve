import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import MenuProvider from "@/components/Menu";
import LoadAnimation from "@/components/LoadAnimation";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Studio Pensieve | Interior Design, Bangalore",
  description:
    "Studio Pensieve is a Bangalore-based interior design firm crafting thoughtful, timeless spaces.",
  keywords: ["interior design", "Bangalore", "Studio Pensieve", "home design", "commercial interiors"],
  authors: [{ name: "Studio Pensieve" }],
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
      <body className="min-h-screen bg-background text-foreground antialiased">
        <CustomCursor />
        <LoadAnimation />
        <TransitionProvider>
          <MenuProvider>{children}</MenuProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
