"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Tough Tongue AI
            </Link>
          </div>
          <nav className="flex items-center justify-center space-x-6">
            <Link 
              href="/" 
              className={`hover:text-gray-600 ${pathname === "/" ? "font-semibold" : ""}`}
            >
              Home
            </Link>
            <Link 
              href="/course" 
              className={`hover:text-gray-600 ${pathname === "/course" ? "font-semibold" : ""}`}
            >
              Course
            </Link>
          </nav>
          <div className="flex justify-end">
          </div>
        </div>
      </div>
    </header>
  );
} 