/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "reqres.in",
      },
    ],
  },
};

export default nextConfig;
