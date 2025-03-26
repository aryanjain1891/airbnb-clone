"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Globe, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll to add shadow to header
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 border-b-[1px] md:border-b-0">
          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center">
            <Image
              src="https://ext.same-assets.com/1951721302/3930986062.svg"
              alt="Airbnb Logo"
              width={102}
              height={32}
              style={{ color: "#FF385C" }}
              className="text-airbnb-red"
            />
          </Link>
          <Link href="/" className="md:hidden">
            <Image
              src="https://ext.same-assets.com/1951721302/3930986062.svg"
              alt="Airbnb Logo"
              width={30}
              height={32}
              style={{ color: "#FF385C" }}
              className="text-airbnb-red"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-auto">
            <div className="flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="text-sm font-semibold px-4 border-r">Experiences</div>
              <div className="text-sm font-light px-4 border-r text-gray-600">Time of day</div>
              <div className="text-sm font-light px-4 text-gray-600">Add guests</div>
              <div className="bg-airbnb-red p-2 rounded-full text-white">
                <Search size={16} />
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/host/experiences" className="hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                Airbnb your home
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
              <Globe size={18} />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full border border-gray-200 p-2 flex items-center gap-3">
                  <Menu size={16} />
                  <span className="sr-only md:not-sr-only bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
                    <User size={20} />
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="py-6 space-y-4">
                  <div className="border-b pb-4 space-y-4">
                    <Link href="/login" className="block py-2 font-medium hover:bg-gray-100 px-4 rounded-md">
                      Log in
                    </Link>
                    <Link href="/signup" className="block py-2 hover:bg-gray-100 px-4 rounded-md">
                      Sign up
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link href="/host/experiences" className="block py-2 hover:bg-gray-100 px-4 rounded-md">
                      Host an experience
                    </Link>
                    <Link href="/help" className="block py-2 hover:bg-gray-100 px-4 rounded-md">
                      Help
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile search */}
        <div className="flex md:hidden items-center justify-between py-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 border rounded-full shadow-sm w-full"
          >
            <Search size={16} />
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">Anywhere</span>
              <span className="text-xs text-gray-500">Any time · Add guests</span>
            </div>
          </Button>
        </div>

        {/* Filter navigation */}
        <div className="hidden md:flex items-center justify-start gap-8 pt-4 pb-2 text-airbnb-black overflow-x-auto no-scrollbar">
          <Link href="/s/experiences" className="flex items-center gap-2 pb-2 border-b-2 border-black font-medium text-sm whitespace-nowrap">
            <span>Experiences</span>
          </Link>
          <Link href="/s/experiences/online" className="flex items-center gap-2 pb-2 text-gray-500 hover:text-black text-sm whitespace-nowrap">
            <span>Online Experiences</span>
          </Link>
          <Link href="/s/experiences/indoor" className="flex items-center gap-2 pb-2 text-gray-500 hover:text-black text-sm whitespace-nowrap">
            <span>In-person Experiences</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
