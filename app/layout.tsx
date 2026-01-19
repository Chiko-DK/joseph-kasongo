import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import { Analytics } from "@vercel/analytics/react";
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

// change later for optimization and better SEO with images
export const metadata: Metadata = {
  title: {
    default: "Joseph Kasongo | Software Developer",
    template: "%s | Joseph Kasongo",
  },
  description:
    "Software developer who builds real things. Full stack focused with experience in web, mobile, data visualization, and machine learning.",
  metadataBase: new URL("https://joseph-kasongo.vercel.app/"),
  openGraph: {
    title: "Joseph Kasongo | Software Developer",
    description:
      "Software developer who builds real things. Full stack focused with experience in web, mobile, data visualization, and machine learning.",
    url: "https://joseph-kasongo.vercel.app/",
    siteName: "Joseph Kasongo Portfolio",
    images: [
      {
        url: "/og-image.png",
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
    title: "Joseph Kasongo | Software Developer",
    description:
      "Software developer who builds real things. Full stack focused with experience in web, mobile, data visualization, and machine learning.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
      </body>
    </html>
  );
}
