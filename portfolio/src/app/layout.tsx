import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
		<html lang="en" suppressHydrationWarning>
			<body className="bg-gradient-to-tl dark:from-black from-white dark:via-zinc-600/20 via-sky-700 dark:to-black to-white min-h-screen">
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
