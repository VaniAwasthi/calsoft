/** @type {import('next').NextConfig} */

// hardcode environment: 'prod' or 'local'
const envi = 'prod'; // <-- change to 'prod' when building for production

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: envi === 'prod'
      ? `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https:;
        style-src 'self' 'unsafe-inline' https:;
        img-src 'self' data: https:;
        font-src 'self' https:;
        connect-src 'self' https:;
        object-src 'none';
        frame-ancestors 'none';
        upgrade-insecure-requests;
      `.replace(/\s{2,}/g, ' ')
      : ''
  },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
  { key: 'Strict-Transport-Security', value: envi === 'prod' ? 'max-age=31536000; includeSubDomains; preload' : '' },
];

const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders.filter(h => h.value !== ''),
      },
    ];
  },

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
      hostname: "images.calsoftinc.com",
      pathname: "/dist/**",
    },
    {
      protocol: "http",
      hostname: "images.calsoftinc.com",
      pathname: "/dist/**",
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
