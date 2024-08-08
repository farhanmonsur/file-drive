/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "trustworthy-chihuahua-123.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
