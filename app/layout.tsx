import type { Metadata } from "next";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollBarHandler from "@/components/ScrollBarHandler";
import "./globals.css";

const nodeEnvironment = process.env.NEXT_PUBLIC_NODE_ENVIRONMENT;
const isProduction = nodeEnvironment === "production";

const basePath = isProduction ? "/Portfolio" : "";

const withBasePath = (path: string) => `${basePath}${path}`;

const siteUrl = "https://lokesh041999.github.io";
const portfolioUrl = `${siteUrl}/Portfolio`;
const ogImage = `${portfolioUrl}/icons/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Lokesh Agarwal",
    template: "%s | Lokesh Agarwal",
  },

  description:
    "React.js, Next.js & Node.js developer building scalable dashboards, geospatial tools, API integrations and production-ready web applications.",

  applicationName: "Lokesh Agarwal Portfolio",

  keywords: [
    "Lokesh Agarwal",
    "Software Engineer",
    "Software Engineer II",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Mapbox GL JS",
    "Geospatial Tools",
    "API Integrations",
    "Portfolio",
  ],

  authors: [
    {
      name: "Lokesh Agarwal",
      url: portfolioUrl,
    },
  ],

  creator: "Lokesh Agarwal",

  publisher: "Lokesh Agarwal",

  alternates: {
    canonical: portfolioUrl,
  },

  icons: {
    icon: withBasePath("/icons/variant6-blue.svg"),
    shortcut: withBasePath("/icons/variant6-blue.svg"),
    apple: withBasePath("/icons/variant6-blue-180.png"),
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioUrl,
    siteName: "Lokesh Agarwal Portfolio",

    title: "Lokesh Agarwal",

    description:
      "React.js, Next.js & Node.js developer building scalable dashboards, geospatial tools and production-ready web applications.",

    images: [
      {
        url: ogImage,
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
      "React.js, Next.js & Node.js developer building scalable dashboards, geospatial tools and production-ready web applications.",

    creator: "@lokeshagarwal",

    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function () {
  try {
    var savedMode = localStorage.getItem('portfolio-theme-mode');
    var mode =
      savedMode === 'light' ||
      savedMode === 'dark' ||
      savedMode === 'system'
        ? savedMode
        : 'system';

    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    var resolvedTheme =
      mode === 'system'
        ? (isDark ? 'dark' : 'light')
        : mode;

    document.documentElement.setAttribute(
      'data-theme',
      resolvedTheme
    );

    document.documentElement.setAttribute(
      'data-theme-mode',
      mode
    );
  } catch {
    document.documentElement.setAttribute(
      'data-theme',
      'dark'
    );

    document.documentElement.setAttribute(
      'data-theme-mode',
      'system'
    );
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
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body>
        <GoogleAnalytics />
        <ScrollBarHandler />
        {children}
      </body>
    </html>
  );
}
