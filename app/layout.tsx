import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, siteUrl } from "@/lib/site";
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
  "Joseph Kasongo, also known as Chiko DK, is a Cape Town full stack software developer and UCT graduate building responsive web and mobile apps, backend APIs, and practical software products";

export const metadata: Metadata = {
  applicationName: "Joseph Kasongo Portfolio",
  category: "Portfolio",
  title: {
    default: "Joseph Kasongo | Full Stack Software Developer",
    template: "%s | Joseph Kasongo",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "Joseph Kasongo",
    "Joseph Chiko Kasongo",
    "Chiko",
    "Chiko Damberd",
    "Chiko Kasongo",
    "Chiko DK",
    "full stack software developer",
    "junior full stack developer",
    "entry level software developer",
    "React developer",
    "Next.js developer",
    "Vue.js developer",
    "FastAPI developer",
    "Firebase developer",
    "React Native developer",
    "data visualisation developer",
    "fintech software developer",
    "UCT Computer Science graduate",
    "BCom Honours Information Systems",
    "Cape Town software developer",
  ],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Joseph Kasongo | Full Stack Software Developer",
    description: siteDescription,
    url: siteUrl,
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
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  other: {
    "profile:first_name": "Joseph",
    "profile:last_name": "Kasongo",
    "profile:username": "Chiko-DK",
    "og:see_also": [profile.github, profile.linkedin, profile.cv],
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
