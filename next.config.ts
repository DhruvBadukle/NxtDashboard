import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,  
  },
  images: {
    domains: ['api.dicebear.com'], // ✅ Add this line
  },
};

export default nextConfig;
