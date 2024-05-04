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
			<body className="bg-gradient-to-r from-sky-700 dark:bg-black dark:bg-gradient-to-r dark:from-sky-950 min-h-screen">
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
