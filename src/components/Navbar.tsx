"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Pipes Logo"
              width={120}
              height={46}
              className="dark:invert"
              priority
            />
          </Link>

          {/* Right side - Home link and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
