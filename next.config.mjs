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
      // dev.calsoft.org - allow both http and https
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

      // 35.162.115.74 - allow both http and https
      {
        protocol: "http",
        hostname: "dev.calsoft.org",
        pathname: "/**", // Allow all image paths from this host
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