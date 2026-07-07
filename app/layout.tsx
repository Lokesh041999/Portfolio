import type { Metadata } from "next";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollBarHandler from "@/components/ScrollBarHandler";
import "./globals.css";

const nodeEnvironment = process.env.NEXT_PUBLIC_NODE_ENVIRONMENT;
const isProduction = nodeEnvironment === "production";
const basePath = isProduction ? "/Portfolio" : "";

const withBasePath = (path: string) => `${basePath}${path}`;

const siteUrl = "https://lokesh041999.github.io/Portfolio/";
const ogImageUrl = `${siteUrl}icons/og-image.png`;

export const metadata: Metadata = {
  title: "Lokesh Agarwal",
  description:
    "Portfolio of Lokesh Agarwal, Software Engineer II specializing in React.js, Next.js, Node.js, Mapbox GL JS, dashboards, and geospatial applications.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: withBasePath("/icons/variant6-blue.svg"),
    shortcut: withBasePath("/icons/variant6-blue.svg"),
    apple: withBasePath("/icons/variant6-blue-180.png"),
  },
  openGraph: {
    title: "Lokesh Agarwal",
    description:
      "Portfolio of Lokesh Agarwal, Software Engineer II specializing in React.js, Next.js, Node.js, Mapbox GL JS, dashboards, and geospatial applications.",
    url: siteUrl,
    siteName: "Lokesh Agarwal",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Lokesh Agarwal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Agarwal",
    description:
      "Portfolio of Lokesh Agarwal, Software Engineer II specializing in React.js, Next.js, Node.js, Mapbox GL JS, dashboards, and geospatial applications.",
    images: [ogImageUrl],
  },
};

const themeScript = `
(function () {
  try {
    var savedMode = localStorage.getItem('portfolio-theme-mode');
    var mode = savedMode === 'light' || savedMode === 'dark' || savedMode === 'system'
      ? savedMode
      : 'system';

    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolvedTheme = mode === 'system' ? (isDark ? 'dark' : 'light') : mode;

    document.documentElement.setAttribute('data-theme', resolvedTheme);
    document.documentElement.setAttribute('data-theme-mode', mode);
  } catch (error) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('data-theme-mode', 'system');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <GoogleAnalytics />
        <ScrollBarHandler />
        {children}
      </body>
    </html>
  );
}
