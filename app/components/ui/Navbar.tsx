"use client";

import Image from "next/image";
import { cn } from "@/util/cn";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
  } from "./navbar-menu";
import React, { useState, useRef, useEffect } from "react";
import StarButton from "../StarButton";
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
            <Image
              className="image"
              height="40"
              width="40"
              src="/logo.png"
              alt="Logo"
            />
            <h1 className="font-bold -m-3 text-white text-1xl">CVWORTH</h1>
            <div className="ml-20 flex justify-start items-center flex-row">
              <div className="mr-5">
                <MenuItem setActive={setActive} active={active} item="Home">
                  <Link href="/">Home</Link>
                </MenuItem>
              </div>
              <div className="mr-5">
                <MenuItem setActive={setActive} active={active} item="Process">
                  <Link href="/process">Process</Link>
                </MenuItem>
              </div>
              <div className="mr-5">
                <MenuItem setActive={setActive} active={active} item="Upload">
                  <Link href="/upload">Upload</Link>
                </MenuItem>
              </div>
              <MenuItem setActive={setActive} active={active} item="Policy">
                <Link href="/policy">Policy</Link>
              </MenuItem>
            </div>
          </div>
          <div className="flex items-center">
            <StarButton />
            {!userId && (
              <>
                  <Link
                    href="../sign-in/page"
                    className="text-lg text-gray-300 hover:text-white mr-4"
                  >
                    Sign In
                  </Link>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                
  
                <MenuItem setActive={setActive} active={active} item="Sign Up">
                  <Link
                    href="sign-up"
                    className="text-gray-300 hover:text-white mr-4"
                  >
                    Sign Up
                  </Link>
                </MenuItem>
              </>
            )}
            {userId && (
              <MenuItem setActive={setActive} active={active} item="Profile">
                <Link
                  href="profile"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Profile
                </Link>
              </MenuItem>
            )}
            <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </Menu>
      </div>
    );
  };
