
/** @type {import('next').NextConfig} */
  import { securityHeaders } from './config.js';

const nextConfig = {



  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)', // apply to all routes
        headers: securityHeaders.filter(h => h.value !== ''),
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://cms.calsoft.org:4000/api/:path*",
        // destination: "http://35.162.115.74/api/:path*",
      },
    ];
  },
 images: {
  remotePatterns: [
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
    {
      protocol: "https",
      hostname: "images.calsoft.org",
      pathname: "/dist/**",
    },
    {
      protocol: "http",
      hostname: "images.calsoft.org",
      pathname: "/dist/**",
    },
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
    {
      protocol: "https",
      hostname: "cms.calsoft.org",
      port: "4000",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "img.youtube.com",
      pathname: "/**",
    },
  ],
},

};

export default nextConfig;
