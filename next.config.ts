import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // redirect /privacy-policy/uae to /
  async redirects() {
    return [
      {
        source: "/privacy-policy/uae",
        destination: "/",
        permanent: false,
      },
      // {
      //   source: "/privacy-policy",
      //   destination: "/",
      //   permanent: false,
      // },
      {
        source: "/terms-and-conditions/uae",
        destination: "/",
        permanent: false,
      },
      // {
      //   source: "/terms-and-conditions",
      //   destination: "/",
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
