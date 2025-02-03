import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'photo-resize-zmp3.zmdcdn.me',
            port:'',
            pathname:'/**',
        },
    ],
    },
};

export default nextConfig;
