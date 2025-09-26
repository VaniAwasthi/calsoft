/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://cms.calsoft.org:4000/api/:path*",
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
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "origin.calsoft.org",
        pathname: "/**",
      },

      // www.calsoftinc.com
      {
        protocol: "https",
        hostname: "www.calsoftinc.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "www.calsoftinc.com",
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

      // cms.calsoft.org (with port 4000)
      {
        protocol: "https",
        hostname: "cms.calsoft.org",
        port: "4000",
        pathname: "/**",
      },

      // YouTube thumbnails
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
