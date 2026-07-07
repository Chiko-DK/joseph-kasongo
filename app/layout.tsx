import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Joseph Kasongo is a full stack software developer building responsive web apps, backend APIs, dashboards, and practical software products.";

export const metadata: Metadata = {
  title: {
    default: "Joseph Kasongo | Full Stack Software Developer",
    template: "%s | Joseph Kasongo",
  },
  description: siteDescription,
  metadataBase: new URL("https://joseph-kasongo.vercel.app/"),
  authors: [{ name: "Joseph Kasongo" }],
  creator: "Joseph Kasongo",
  keywords: [
    "Joseph Kasongo",
    "Chiko Damberd",
    "Chiko Kasongo",
    "Chiko DK",
    "full stack software developer",
    "React developer",
    "Next.js developer",
    "Cape Town software developer",
  ],
  openGraph: {
    title: "Joseph Kasongo | Full Stack Software Developer",
    description: siteDescription,
    url: "https://joseph-kasongo.vercel.app/",
    siteName: "Joseph Kasongo Portfolio",
    images: [
      {
        url: "/pics/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joseph Kasongo Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Kasongo | Full Stack Software Developer",
    description: siteDescription,
    images: ["/pics/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
