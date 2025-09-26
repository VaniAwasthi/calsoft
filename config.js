// config.js
//export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// export const baseUrl = "https://cms.calsoft.org:4000/admin/assets/dist";
export const baseUrl = "https://images.calsoft.org/dist";
export const envi = 'local';

export const securityHeaders = [
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
