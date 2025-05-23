"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import GlowLink from "@/components/ui/GlowLink";
import { cn, commonClasses } from "@/lib/styles/utils";

export default function Navbar() {
  // Properly type the ref as HTMLButtonElement
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Add a loaded class after component mounts
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("loaded");
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ease-in-out bg-black/60 backdrop-blur-sm">
        <div>
          <Link href="/" className={cn("logo", commonClasses.h2)}>
            <img
              src="logo.png"
              alt="Logo"
              className="h-14 w-auto filter brightness-100"
            />
          </Link>
        </div>
        <div>
          <div className="relative">
            {/* Desktop Navigation */}
            <ul className={cn(
              "desktop-nav hidden md:flex space-x-8 items-center text-white",
              commonClasses.h3
            )}>
              <li>
                <GlowLink to="/about-us" text="About Us" />
              </li>
              <li>
                <GlowLink to="/how-it-works" text="How It Works" />
              </li>
              <li>
                <GlowLink to="/why-it-matters" text="Why It Matters" />
              </li>
              <li>
                <Link href="/contact-us">
                  <button
                    ref={buttonRef}
                    className={cn(
                      "glow-button",
                      commonClasses.h3,
                      "hidden md:flex"
                    )}
                  >
                    Get in Touch
                  </button>
                </Link>
              </li>
              <li className="hidden md:block">
                <BurgerMenu className="text-white" />
              </li>
            </ul>

            {/* Mobile BurgerMenu */}
            <div className="md:hidden">
              <BurgerMenu className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
