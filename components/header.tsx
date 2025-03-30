"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ]

  const variants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-19 w-22">
              <Image
                src={require("../assets/headerLogo.png")}
                alt="Interface Insight Logo"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
            {/* <motion.span
              className="hidden md:inline-block text-xl font-bold text-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              INTERFACE INSIGHT
            </motion.span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <AnimatePresence mode="wait">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.path ? "text-primary" : "text-dark",
                  )}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      className="h-0.5 bg-primary"
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
          <Link
            href="https://freelance-platform.example.com/interface-insight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-secondary text-dark hover:bg-secondary/90">
              Hire Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-dark hover:text-primary hover:bg-muted/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b"
          >
            <div className="container py-4 grid gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.path ? "text-primary" : "text-dark",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://www.fiverr.com/s/YRjLrAR"
                target="_blank"
                rel="noopener noreferrer">
                <Button size="sm" className="w-full bg-secondary text-dark hover:bg-secondary/90">
                  {`Hire Us`}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

