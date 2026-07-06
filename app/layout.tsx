import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh Agarwal",
  description:
    "Portfolio of Lokesh Agarwal, Software Engineer II specializing in React.js, Next.js, Node.js, Mapbox GL JS, dashboards, and geospatial applications.",
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
      <body>{children}</body>
    </html>
  );
}
