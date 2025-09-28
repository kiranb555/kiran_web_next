import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import dynamic from 'next/dynamic';



const Header = dynamic(() => import('@/components/header/Header'), {
  ssr: true,
  loading: () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="w-32 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
      </div>
    </header>
  ),
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiran B | Senior Software Engineer",
  description: "Portfolio of Kiran B, a Senior Frontend Engineer and Tech Lead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <Providers>
          <div className="min-h-screen dark:bg-gray-900">
            <Header />
            <main className="bg-inherit text-inherit">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
