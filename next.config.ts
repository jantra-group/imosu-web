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
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'scontent-iad3-1.cdninstagram.com',
      'scontent-iad3-2.cdninstagram.com',
      'scontent-cgk1-1.cdninstagram.com',
      'mdtswauykfhfprscrcld.supabase.co',
    ],
  },
};

export default nextConfig;
