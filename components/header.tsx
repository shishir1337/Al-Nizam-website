"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <a href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="AL NIZAM Logo"
            width={400} // 
            height={120} // 
            className="h-12 w-auto object-contain" // 
          />
        </a>

        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <a
            href="#about"
            className="text-base font-medium text-gray-800 transition-colors hover:text-primary dark:text-gray-200"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-base font-medium text-gray-800 transition-colors hover:text-primary dark:text-gray-200"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-base font-medium text-gray-800 transition-colors hover:text-primary dark:text-gray-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-base font-medium text-gray-800 transition-colors hover:text-primary dark:text-gray-200"
          >
            Contact
          </a>
        </nav>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white pt-20 dark:bg-gray-900 lg:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="#about"
              className="rounded-md px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#services"
              className="rounded-md px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#projects"
              className="rounded-md px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-md px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

