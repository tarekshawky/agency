import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

import { themeChange } from 'theme-change'
import Footer from "@/app/components/Footer";
const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://tarekshawky.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tarek Shawky - Frontend Developer",
    template: "%s | Tarek Shawky",
  },
  description:
    "Tarek Shawky is a frontend developer skilled in HTML, CSS, JavaScript, Next.js, Bootstrap, TailwindCSS, WordPress, and Elementor. Passionate about creating engaging and responsive web experiences.",
  keywords: [
    "Tarek Shawky",
    "Tarek Shawky Developer",
    "Tarek Shawky Frontend Developer",
    "Tarek Shawky Portfolio",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TailwindCSS Developer",
    "WordPress Developer",
    "Web Developer Egypt",
  ],
  authors: [{ name: "Tarek Shawky", url: siteUrl }],
  creator: "Tarek Shawky",
  publisher: "Tarek Shawky",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tarek Shawky - Frontend Developer",
    description:
      "Tarek Shawky is a frontend developer skilled in HTML, CSS, JavaScript, Next.js, Bootstrap, TailwindCSS, WordPress, and Elementor.",
    url: siteUrl,
    siteName: "Tarek Shawky Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tarek Shawky - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarek Shawky - Frontend Developer",
    description:
      "Tarek Shawky is a frontend developer skilled in HTML, CSS, JavaScript, Next.js, Bootstrap, TailwindCSS, WordPress, and Elementor.",
    images: ["/og-image.png"],
  },
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
  verification: {
    google: "QB7w0bIGg_3VBosfpXwaiVc1c0hIxpQ0qRe6DC4Muj8",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tarek Shawky",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "Frontend Developer",
  description:
    "Tarek Shawky is a frontend developer skilled in HTML, CSS, JavaScript, Next.js, Bootstrap, TailwindCSS, WordPress, and Elementor.",
  sameAs: [
    "https://web.facebook.com/tarek.ahmad1",
    "https://www.freelancer.com/u/tarek752",
  ],
  knowsAbout: [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "Bootstrap",
    "TailwindCSS",
    "WordPress",
    "Elementor",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tarek Shawky Portfolio",
  url: siteUrl,
  publisher: {
    "@type": "Person",
    name: "Tarek Shawky",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
