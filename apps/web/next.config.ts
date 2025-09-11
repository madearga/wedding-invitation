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
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 86400, // 24 hours
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	// Enable experimental features for better performance
	experimental: {
		optimizePackageImports: ['framer-motion', 'lucide-react'],
	},
	// Add headers for better caching
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/api/wishes',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=60, s-maxage=300', // Cache API for 1 minute, CDN for 5 minutes
					},
				],
			},
		];
	},
};

export default nextConfig;
