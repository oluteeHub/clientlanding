import type { Metadata } from "next";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

import "./globals.css";

export const metadata: Metadata = {
	title: "Olutee Hub | Africa's Leading HR Management System",
	// description: "",
	icons: {
		icon: "/logo_nobg.png",
	},
	openGraph: {
		title: "Olutee Hub | Africa's Leading HR Management System",
		images: [
			// {
			// 	url: "",
			// 	width: 600,
			// 	height: 250,
			// 	alt: "Olutee Hub Logo - Africa's Leading HR Management System",
			// },
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Olutee Hub | Africa's Leading HR Management System",
		description: "Olutee Hub | Africa's Leading HR Management System",
		images: ["/olutee_logo.jpg"],
		site: "@olutee_hub",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": "-1",
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
