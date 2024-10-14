"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => pathname === href;
  const list_styles = `rounded-md px-3 py-2 font-medium `;

  return (
    <nav className="bg-gray-800 md:hidden lg:hidden block ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="logo.png" className="h-9 " alt="" />
          </div>

          <div className="flex-1 flex justify-center sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"


                  className={`${list_styles} text-sm ${isActive("/") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                >
                  Home
                </Link>
                <Link
                  href="/skills"
                  className={`${list_styles} text-sm ${isActive("/skills") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                >
                  My Skills
                </Link>
                <Link
                  href="/projects"
                  className={`${list_styles} text-sm ${isActive("/projects") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                >
                  Project
                </Link>
                <Link
                  href="/contact"
                  className={`${list_styles} text-sm ${isActive("/contact") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <Link href="">
              <Button variant="outline" >
                Download CV
              </Button>
            </Link>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className={`block text-base ${list_styles} ${isActive("/") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/skills"
            className={`block text-base ${list_styles} ${isActive("/skills") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
          >
            My Skills
          </Link>
          <Link
            href="/projects"
            className={`block text-base ${list_styles} ${isActive("/projects") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`block text-base ${list_styles} ${isActive("/contact") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
          >
            Contact
          </Link>
          <Link href="">
            <Button variant="outline" >
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
