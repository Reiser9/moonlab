import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    reactStrictMode: false,
    output: "standalone",
};

export default nextConfig;
