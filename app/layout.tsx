import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'CVWORTH | Resume Analyser',
  description: 'Measure how much your resume is worth!',
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">CVWORTH</div>
            <nav>
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
          </header>
          <main>
            {children}
          </main>
          <Analytics />
        </body>
      </ClerkProvider>
    </html>
  )
}
