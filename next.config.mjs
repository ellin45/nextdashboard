/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "ih1.redbubble.net"},
      {protocol: "https", hostname: "cloudflare-ifps.com"},
      {protocol: "https", hostname: "i.namu.wiki"},
    ],
  },
};

export default nextConfig;
