import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ["@react-pdf/renderer"],
  // outputFileTracingRoot removed — only needed for Docker/standalone, causes EPERM on Windows
  outputFileTracingExcludes: {
    // Use forward slashes — glob requires it even on Windows
    "*": [
      "C:/Users/**",
      "C:/Windows/**",
      "C:/Program Files/**",
      "C:/Program Files (x86)/**",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "inspect-hub-six.vercel.app",
        pathname: "/uploads/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Prevent @react-pdf/renderer font scanner from accessing system dirs
      const existingExternals = config.externals ?? [];
      const extArr = Array.isArray(existingExternals)
        ? existingExternals
        : [existingExternals];
      config.externals = [
        ...extArr,
        "@react-pdf/renderer",
        "@react-pdf/font",
        "fontkit",
      ];
    }
    // Silence EPERM errors from glob during file watching / scanning
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        "**/node_modules/**",
        "C:/Users/**",
        "C:/Windows/**",
      ],
    };
    return config;
  },
};

export default nextConfig;
