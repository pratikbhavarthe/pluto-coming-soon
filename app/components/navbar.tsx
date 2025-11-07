"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 pointer-events-none">
      <nav className="flex h-full w-full items-center justify-start pl-3 sm:pl-4 pointer-events-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/pluto-logo.svg"           
            alt="Pluto Mobility Logo"
            height={28}                       
            width={100}
            priority
            className="select-none"
          />
        </Link>
      </nav>
    </header>
  );
}
