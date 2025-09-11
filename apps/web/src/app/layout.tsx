import type { Metadata } from "next";
import { Geist, Geist_Mono, Bellefair } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import AudioPlayer from "@/components/audio-player";
import "@/lib/performance";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
	preload: false,
});

const bellefair = Bellefair({
	variable: "--font-bellefair",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "Arga & Agni Wedding Invitation",
	description: "Join us in celebrating the wedding of Arga & Agni. Save the date: October 17, 2025 at Gereja Hati Kudus Yesus Katedral Surabaya",
	keywords: "wedding, invitation, Arga, Agni, marriage, celebration, Surabaya",
	authors: [{ name: "Arga & Agni" }],
	openGraph: {
		title: "Arga & Agni Wedding Invitation",
		description: "Join us in celebrating our special day",
		type: "website",
		images: [
			{
				url: "https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwS35RaQ9KszXGCKoardWxuyJFchTp9RtekPAB",
				width: 1200,
				height: 630,
				alt: "Arga & Agni Wedding"
			}
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Preload critical assets */}
				<link
					rel="preload"
					href="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwjrOczM5uO6qjlMnepHs2rXoJPgubf9tCyZSh"
					as="video"
					type="video/mp4"
				/>
				<link
					rel="preload"
					href="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwS35RaQ9KszXGCKoardWxuyJFchTp9RtekPAB"
					as="image"
				/>
				<link
					rel="preload"
					href="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxw2VAaIdFydUxw8Gfas7jErZH9ePpQJkC30LvB"
					as="image"
				/>
				<link
					rel="preload"
					href="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwQ5VFIHN1hPlkexZ9IT2J3Bnbmd0DRazWMsAK"
					as="image"
				/>
				
				{/* Preconnect to external domains */}
				<link rel="preconnect" href="https://rvmyspork8.ufs.sh" />
				<link rel="preconnect" href="https://images.pexels.com" />
				
				{/* DNS prefetch for performance */}
				<link rel="dns-prefetch" href="//fonts.googleapis.com" />
				<link rel="dns-prefetch" href="//www.google.com" />
				
				{/* Preload critical CSS */}
				<link
					rel="preload"
					href="/_next/static/css/app/layout.css"
					as="style"
				/>
				
				{/* Add performance hints */}
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta httpEquiv="x-ua-compatible" content="IE=edge" />
				
				{/* Resource hints for external domains */}
				<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link rel="dns-prefetch" href="//unpkg.com" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${bellefair.variable} antialiased font-bellefair`}
			>
				<Providers>
					{children}
					<AudioPlayer />
				</Providers>
			</body>
		</html>
	);
}
