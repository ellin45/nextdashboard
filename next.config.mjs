/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "ih1.redbubble.net"},
      {protocol: "https", hostname: "cloudflare-ifps.com"},
      {protocol: "https", hostname: "i.namu.wiki"},
      {protocol: "https", hostname: "entertainimg.kbsmedia.co.kr"},
      {protocol: "https", hostname: "randomuser.me"},
      {protocol: "https", hostname: "utfs.io"},
    ],
  },
};

export default nextConfig;
