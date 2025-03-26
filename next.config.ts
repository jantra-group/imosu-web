const nextConfig = {
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'scontent-iad3-1.cdninstagram.com',
      'scontent-iad3-2.cdninstagram.com',
      'scontent-cgk1-1.cdninstagram.com',
      'mdtswauykfhfprscrcld.supabase.co',
    ],
  },
  swcMinify: false, // Nonaktifkan minifikasi selama debugging
  experimental: { css: false }, // Tambahkan jika errornya terkait dengan CSS
};

module.exports = nextConfig;
