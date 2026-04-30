import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Belgiumtown Bar & Restaurant",
    template: "%s | Belgiumtown Bar & Restaurant",
  },
  description:
    "A Michigan supper club with roadhouse roots: scratch comfort food, Friday fish fry, and a dining room that still believes in the long table.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="grain-page flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex min-h-0 flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
