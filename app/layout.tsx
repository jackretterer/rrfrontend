import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar";
import { PropsWithChildren, Suspense } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retail Ready Admin Page",
  description: "Created by Jack Retterer",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <Navbar/>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="loading bg-gradient-to-br h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1 overflow-auto">{children}</main>
      </body>
    </html>
  );
}