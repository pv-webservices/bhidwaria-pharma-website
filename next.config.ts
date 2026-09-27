import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The franchise page moved under Services; keep old links and search results working.
    return [{ source: "/business-opportunity", destination: "/services/monopoly-pcd-pharma-franchise", permanent: true }];
  },
};

export default nextConfig;
