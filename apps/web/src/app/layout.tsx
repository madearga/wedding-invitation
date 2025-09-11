import type { Metadata } from "next";
import { Geist, Geist_Mono, Bellefair } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const bellefair = Bellefair({
	variable: "--font-bellefair",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "myweddinginvitation",
	description: "myweddinginvitation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${bellefair.variable} antialiased font-bellefair`}
			>
				<Providers>
					<div className="grid grid-rows-[auto_1fr] h-svh">
						<Header />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
