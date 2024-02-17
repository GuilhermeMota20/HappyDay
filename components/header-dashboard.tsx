"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HeaderDashboard() {
  return (
    <>
      <header className={cn(
        "flex items-center gap-2 justify-center py-4 px-2 md:px-8 sm:px-16 fixed w-full top-0 left-0 z-50 shadow-md bg-background"
      )}>
        <div className="w-full max-w-[1200px] flex items-center gap-2 justify-between">
          <Link href="/">
            <span className="text-slate-900 font-extrabold cursor-pointer">
              HappyDay
            </span>
          </Link>
        </div>
      </header>
    </>
  )
}