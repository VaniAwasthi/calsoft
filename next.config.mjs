/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://35.162.115.74/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dev.calsoft.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev.calsoft.org",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "35.162.115.74",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "35.162.115.74",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
  // ✅ Inject NEXT_PUBLIC_BASE_URL for client-side and server-side code
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || "https://origin.calsoft.org/admin/assets/dist",
  },
};

export default nextConfig;
