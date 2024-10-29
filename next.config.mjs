/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "out", // Where to export all pages
  trailingSlash: true,
  assetPrefix: ".",

  // time in seconds of no pages generating during static
  // generation before timing out
  staticPageGenerationTimeout: 1000,
  reactStrictMode: false,
};

export default nextConfig;
