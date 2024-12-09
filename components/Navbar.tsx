"use client"
// components/Navbar.tsx

import * as React from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Dancing_Script } from 'next/font/google'

// Initialize the font
const dancingScript = Dancing_Script({ subsets: ['latin'] })

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return ( 
    
    <nav className="border-b text-xl  border-black  bg-[#d8e7ec] backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto ">
      <div className="px-4 lg:px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "text-2xl font-bold text-primary text-red-700",
            dancingScript.className
          )}
        >
          CodeWithFairy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors text-center hover:text-sky-500  hover:text-xl "
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-sm font-medium transition-colors  hover:text-sky-500 hover:text-xl text-center p-2"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
