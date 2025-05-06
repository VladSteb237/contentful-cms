/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.images.ctfassets.net",
        port: "",
        pathname: "/{2eees5q1eein}/**",
      },
    ],
  },
};

export default nextConfig;
