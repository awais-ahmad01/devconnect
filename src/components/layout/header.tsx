"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
        <Link href="/">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              DevConnect
            </span>
          </div>
      </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/developers"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          <Button
            variant="primary"
            size="md"
            className="hidden md:block bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Link href="/role-selection">Get Started</Link>
          </Button>

      
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

       
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/developers"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              About
            </Link>
            <Button
              variant="primary"
              size="md"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
