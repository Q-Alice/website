/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ];
  },
  experimental: {
    outputFileTracingIncludes: {
      '/api/index.py': [
        '/path/to/your/virtualenv/lib/python3.9/site-packages/**',
      ],
    },
  },
};

module.exports = nextConfig;
