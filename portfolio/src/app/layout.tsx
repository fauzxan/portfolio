import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fauzaan's portfolio",
	description: "A brief introduction to Fauzaan, and his interests",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-sky-950 min-h-screen">{children}</body>
		</html>
	);
}
