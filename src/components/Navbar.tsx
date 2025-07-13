"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";

const navItems = [
  { name: "Auto-Delete", href: "/" },
  { name: "Users", href: "/users" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <h1 className="text-lg font-bold break-words max-w-[200px] sm:max-w-none">Mya Min Aye</h1>

          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className={clsx("cursor-pointer hover:underline", pathname === item.href && "text-purple-400")}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="self-start sm:self-auto">
          <Link href="https://myaminaye.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">My portfolio</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
