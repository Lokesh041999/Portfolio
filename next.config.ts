import type { NextConfig } from "next";

const nodeEnvironment = process.env.NEXT_PUBLIC_NODE_ENVIRONMENT;
const isProduction = nodeEnvironment === "production";

const basePath = isProduction ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
