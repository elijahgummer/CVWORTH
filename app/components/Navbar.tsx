"use client";

import Image from "next/image";
import { cn } from "@/util/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import React, { useState, useRef, useEffect } from "react";
import StarButton from "./StarButton";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center text-center">
      <Navbar className="top-0" />
    </div>
  );
}

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const { userId } = useAuth();

  return (
    <div className={cn("fixed top-5 inset-x-0 w-70% mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-start">
          <Link className="flex items-center justify-center flex-row" href="/" passHref>
              <Image
                className="image"
                height={40}
                width={40}
                src="/logo.png"
                alt="Logo"
              />
          <h1 className="font-bold -m-3 text-white text-1xl">CVWORTH</h1>
          </Link>
          <div className="ml-20 flex justify-start items-center flex-row">
            <div className="mr-5">
              <Link
                className="cursor-pointer text-14px text-navbarTabs hover:text-white dark:text-white text-center justify-start items-center"
                href="#uniqueHome"
              >
                Home
              </Link>
            </div>
            <div className="mr-5">
              <Link
                className="cursor-pointer text-14px text-navbarTabs hover:text-white dark:text-white text-center justify-start items-center"
                href="#uniqueFeatures"
              >
                Features
              </Link>
            </div>
            <div className="mr-5">
              <Link
                className="cursor-pointer text-14px text-navbarTabs hover:text-white dark:text-white text-center justify-start items-center"
                href="#uniqueProcess"
              >
                Process
              </Link>
            </div>
            <div className="mr-5">
              <Link
                className="cursor-pointer text-14px text-navbarTabs hover:text-white dark:text-white text-center justify-start items-center"
                href="#uniqueUpload"
              >
                Upload
              </Link>
            </div>
            <Link
              className="cursor-pointer text-14px text-navbarTabs hover:text-white dark:text-white text-center justify-start items-center"
              href="#uniquePolicy"
            >
              Policy
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          {!userId && (
            <>
              <Link
                href="sign-in"
                className="ml-10 text-sm rounded-xl text-gray-300 hover:text-white hover:bg-[#1D3E7A24] hover:border border-gray-900 mr-4 relative rounded-6 px-4 py-2 text-body-small-medium transition-colors before:inside-border hover:before:border-transparent active:translate-y-[0.5px] active:before:border-transparent before:border-neutral-opaque-10 hover:bg-neutral-opaque-10 active:bg-[#1D3E7A24]"
              >
                Sign In or Create Account
              </Link>

              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </>
          )}
          <StarButton />
          <div className="ml-5">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </Menu>
    </div>
  );
};
