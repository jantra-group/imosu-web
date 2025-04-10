import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: false, // Disable SWC minifier temporarily
  webpack(config) {
    config.optimization = {
      ...config.optimization,
      minimize: false, // Disable CSS minimizer temporarily
    };
    return config;
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'scontent-iad3-1.cdninstagram.com',
      'scontent-iad3-2.cdninstagram.com',
      'scontent-cgk1-1.cdninstagram.com',
      'scontent-bom1-2.cdninstagram.com',
      'scontent-bom2-1.cdninstagram.com',
      'scontent-bom2-4.cdninstagram.com',
      'scontent-bom2-2.cdninstagram.com',
      'scontent-bom4-2.cdninstagram.com',
      'mdtswauykfhfprscrcld.supabase.co',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        pathname: '/**', // This will match all Instagram image URLs
      },
      {
        protocol: 'https',
        hostname: 'scontent-iad3-1.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-iad3-2.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom1-2.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom2-1.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom2-4.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom4-2.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-cgk1-1.cdninstagram.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
