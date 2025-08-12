'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-beige-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo button.svg"
              alt="FIGURASHI Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/new" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/New & Featured button.svg"
                alt="New & Featured"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <Link href="/categories" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/Categories button.svg"
                alt="Categories"
                width={130}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <Link href="/characters" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/Characters button.svg"
                alt="Characters"
                width={130}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Search Bar */}
            <div className="relative mx-4">
              <Image
                src="/images/search button longer version.svg"
                alt="Search"
                width={250}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <Link href="/auth" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/Register button.svg"
                alt="Sign in/Register"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/shopping cart button.svg"
                alt="Shopping Cart"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Wishlist Icon */}
            <Link href="/wishlist" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/wishlist button.svg"
                alt="Wishlist"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <Link href="/support" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/Support button.svg"
                alt="Support"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-brown-50 hover:bg-brown-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-brown-200 bg-beige-100">
            <div className="flex flex-col space-y-4">
              <Link href="/new" className="flex justify-center">
                <Image
                  src="/images/New & Featured button.svg"
                  alt="New & Featured"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="/categories" className="flex justify-center">
                <Image
                  src="/images/Categories button.svg"
                  alt="Categories"
                  width={130}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="/characters" className="flex justify-center">
                <Image
                  src="/images/Characters button.svg"
                  alt="Characters"
                  width={130}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="/auth" className="flex justify-center">
                <Image
                  src="/images/Register button.svg"
                  alt="Sign in/Register"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="/support" className="flex justify-center">
                <Image
                  src="/images/Support button.svg"
                  alt="Support"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
