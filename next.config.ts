import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://127.0.0.1:4523/m1/2482261-700654-default/:path*`,
      },
    ]
  },
};

export default nextConfig;
