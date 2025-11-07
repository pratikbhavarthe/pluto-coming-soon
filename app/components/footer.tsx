"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 pointer-events-none">
      <div className="mx-auto max-w-7xl px-6 pb-6 flex items-center justify-between text-[13px] text-white/60 font-normal pointer-events-auto">

        {/* Left Text */}
        <span>© 2024 Pluto Mobility. All rights reserved.</span>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <Link
            href="https://www.linkedin.com/company/plutomobility/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pluto Mobility LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={16}
              height={16}
              className="opacity-80 hover:opacity-100 transition"
            />
          </Link>

          <Link
            href="mailto:hello@plutomobility.in"
            aria-label="Email Pluto Mobility"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
          >
            <Image
              src="/mail.svg"
              alt="Email"
              width={16}
              height={16}
              className="opacity-80 hover:opacity-100 transition"
            />
          </Link>
        </div>
      </div>

      {/* Soft Glow Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </footer>
  );
}
