import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'png.pngtree.com',
				pathname: '/png-vector/20240202/ourmid/**',
			},
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				pathname: '/fir-auth-1c3bc.appspot.com/**',
			},
		],
	},
}

export default nextConfig
