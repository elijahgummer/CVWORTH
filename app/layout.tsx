import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, RedirectToSignIn } from '@clerk/nextjs';
import { NavbarDemo } from "./components/Navbar"; // adjust the path as needed


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
          <NavbarDemo />
          <main>
            {children}
          </main>
          <Analytics />
        </body>
      </ClerkProvider>
    </html>
  )
}
