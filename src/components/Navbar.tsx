"use client";

import Image from "next/image";
import Link from "next/link";
import { NAVBAR_DATA } from "@/constant/components";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={NAVBAR_DATA.logo.src}
              alt={NAVBAR_DATA.logo.alt}
              width={NAVBAR_DATA.logo.width}
              height={NAVBAR_DATA.logo.height}
              className="dark:invert w-32"
              priority
            />
          </Link>

          {/* Right side - Navigation links and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {NAVBAR_DATA.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
