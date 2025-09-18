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
      // dev.calsoft.org
      {
        protocol: "https",
        hostname: "dev.calsoft.org",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "dev.calsoft.org",
        pathname: "/**",
      },

      // origin.calsoft.org
      {
        protocol: "https",
        hostname: "origin.calsoft.org",
        pathname: "/**", // covers /admin/assets/dist/uploads/**
      },
      {
        protocol: "http",
        hostname: "origin.calsoft.org",
        pathname: "/**",
      },

      // 35.162.115.74
      {
        protocol: "https",
        hostname: "35.162.115.74",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "35.162.115.74",
        pathname: "/**",
      },

      // YouTube images
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
