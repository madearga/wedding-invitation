import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				protocol: 'https',
				hostname: 'me7aitdbxq.ufs.sh',
			},
			{
				protocol: 'https',
				hostname: 'rvmyspork8.ufs.sh',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
};

export default nextConfig;
