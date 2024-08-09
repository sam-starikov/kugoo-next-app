// /** @type {import('next').NextConfig} */
/* const nextConfig = {
  images: {
    domains: ['loremflickr.com', 'cloudflare-ipfs.com'],
  },
}

export default nextConfig
 */

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        // port: '',
        // pathname: '/path/to/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        // port: '',
        // pathname: '/images/**',
      },
    ],
  },
}
