"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t hero-gradient text-white">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative h-10 w-10">
                <Image
                  src={require("../assets/icon_Logo.png")}
                  alt="Interface Insight Icon Logo"
                  width={100}
                  height={100}
                // className="object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold text-gold">{"INTERFACE INSIGHT"}</h3>
                <h3 className="text-md font-semibold text-gold">{"SOLUTIONS"}</h3>
              </div>
            </div>
            <p className="text-sm text-silver">
              Transforming ideas into exceptional digital experiences with cutting-edge technology and pixel-perfect
              design.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gold">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services#mobile" className="text-sm text-silver hover:text-primary">
                Mobile App Development
              </Link>
              <Link href="/services#web" className="text-sm text-silver hover:text-primary">
                Web Development
              </Link>
              <Link href="/services#design" className="text-sm text-silver hover:text-primary">
                UI/UX Design
              </Link>
              <Link href="/services#frontend" className="text-sm text-silver hover:text-primary">
                Pixel-Perfect Frontend
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gold">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-silver hover:text-primary">
                About Us
              </Link>
              <Link href="/portfolio" className="text-sm text-silver hover:text-primary">
                Portfolio
              </Link>
              <Link href="/blog" className="text-sm text-silver hover:text-primary">
                Blog
              </Link>
              <Link href="/careers" className="text-sm text-silver hover:text-primary">
                Careers
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gold">Connect</h3>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-silver hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-silver hover:text-primary" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-silver hover:text-primary" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-silver hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="https://freelance-platform.example.com/interface-insight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gold hover:underline"
              >
                Hire Us on Freelance Platform
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-gray-700 pt-4">
          <p className="text-xs text-silver">
            © {new Date().getFullYear()} Interface Insight Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-silver hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-silver hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

