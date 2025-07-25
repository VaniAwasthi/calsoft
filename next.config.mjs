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
        hostname: "35.162.115.74",
        pathname: "/**", // Allow all image paths from this host
      },
    ],
  },
};

export default nextConfig;
