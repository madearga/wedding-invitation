"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { LimelightNav } from "./ui/limelight-nav";
import { Home, Heart, Calendar, Image, MessageSquare } from "lucide-react";

export default function Header() {
	const navItems = [
		{
			id: 'home',
			icon: <Home />,
			label: 'Home',
			onClick: () => {
				document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
			}
		},
		{
			id: 'couple',
			icon: <Heart />,
			label: 'Couple',
			onClick: () => {
				document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
			}
		},
		{
			id: 'details',
			icon: <Calendar />,
			label: 'Details',
			onClick: () => {
				document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
			}
		},
		{
			id: 'gallery',
			icon: <Image />,
			label: 'Gallery',
			onClick: () => {
				document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
			}
		},
		{
			id: 'rsvp',
			icon: <MessageSquare />,
			label: 'RSVP',
			onClick: () => {
				document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
			}
		},
	];

	return (
		<div>
			<div className="flex flex-row items-center justify-between px-4 py-3">
				<div className="flex items-center gap-6">
					<h1 className="text-xl font-bold text-primary">Andrea & Arga</h1>
					<LimelightNav
						items={navItems}
						className="bg-background/80 backdrop-blur-sm border-primary/20"
						defaultActiveIndex={0}
					/>
				</div>
				<div className="flex items-center gap-2">
					<ModeToggle />
				</div>
			</div>
			<hr />
		</div>
	);
}
