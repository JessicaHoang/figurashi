"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from "react";
import ProductCarousel from '@/components/ProductCarousel'

// This page uses Hybrid ISR - it will be statically generated but can be revalidated
export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  // Format dates as MM.DD.YY and compute today/yesterday
  const formatDateAsMmDdYy = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)
    return `${month}.${day}.${year}`
  }
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)
  const todayLabel = formatDateAsMmDdYy(today)
  const yesterdayLabel = formatDateAsMmDdYy(yesterday)
  
  // To make the carousel scrollable
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const featuredProducts = [
    { name: 'Pageant Director', price: '$15.99', img: '/images/Paegent_Director_Mercy_Beret.png' },
    { name: 'Chef', price: '$15.99', img: '/images/Chef_Anne.png' },
    { name: 'Hotel Hostess', price: '$15.99', img: '/images/Hotel-Hostess-Eileen.png' },
    { name: 'Photographer', price: '$15.99', img: '/images/Photographer_May_see.png' },
    { name: 'Lawyer', price: '$15.99', img: '/images/Lawyer_Krista.png' },
  ]

  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: '#FCF7D9' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/images/Swe-Jess-Hero-Section_BG.png"
            alt="Hero Section Background"
            fill
            className="object-cover"
          priority
        />
        </div>
        
        {/* Chef Character Vector */}
        <div className="featured mb-12 flex justify-end">
          <Image
            src="/images/Chef-Anne-Vector.png"
            alt="Chef Anne Character"
            width={600}
            height={600}
            className="absolute object-contain"
            style={{
              right: '-36px',
              top: '520px'
            }}
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-20 h-screen flex items-center justify-center">
          <div className="text-center">
            {/* FIGURASHI Title */}
            <h1 className="text-8xl md:text-9xl font-bold text-brown-800 text-center leading-none mb-8">
              FIGURASHI
            </h1>
            
            {/* CTA Button */}
            <Link href="/catalog" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/Check it out button.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="pt-16 pb-16" style={{ backgroundColor: '#FCF7D9' }}>
        <div className="container mx-auto px-4">
          {/* Chef Character Vector */}
        <div className="featured mb-12 flex justify-end">
          <Image
            src="/images/Chef-Anne-Vector.png"
            alt="Chef Anne Character"
            width={600}
            height={600}
            className="absolute object-contain"
            style={{
              right: '0px',
              top: '520px'
            }}
            priority
          />
        </div>
          <div className="flex justify-between items-center mb-8 px-4 pt-20">
            <h2 className="text-4xl font-bold text-brown-800">
              Featured items
            </h2>
            <Link href="/calendar" className="text-brown-800 underline hover:text-brown-600">
              Release Calendar &gt;
            </Link>
          </div>

             {/* Date Indicators */}
            <div className="flex justify-between px-4 mb-4 text-sm text-brown-600 font-semibold">
              <div>{todayLabel}</div>
              <div>{yesterdayLabel}</div>
            </div>

            <ProductCarousel products={featuredProducts} />
        </div>
      </section>

      {/* Get to know them Section */}
      <section className="py-16" style={{ backgroundColor: '#FCF7D9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-800 mb-8">
            Get to know them
          </h2>
          
          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            <button className="bg-brown-800 text-beige-50 px-6 py-2 rounded-lg font-semibold">
              NARI
            </button>
            <button className="bg-brown-100 text-brown-800 px-6 py-2 rounded-lg font-semibold hover:bg-brown-200">
              YUME
            </button>
            <button className="bg-brown-100 text-brown-800 px-6 py-2 rounded-lg font-semibold hover:bg-brown-200">
              SHIAWASE
            </button>
          </div>
          
          {/* NARI Description */}
          <div className=" product-card mb-8">
            {/* <div className="background-accent"></div> */}
              <div className="product-description">
                <h3 className="text-8xl font-bold text-brown-900 mb-4">NARI</h3>
                <p className="text-FCF7D9 text-lg leading-relaxed max-w-4xl">
                  Nari comes from Japanese Hiragana, なり, and it means "to be" or "become". 
                  The characters represent my friends and their current or dream career starter pack. 
                  It's inspired by the ChatGPT starter pack image generation of figurines resembling 
                  the user and their career of choice featuring 3-4 items.
                </p>
              </div>
              <img src="/images/Lawyer_Krista.png" alt="Lawyer pack" className="product-image"/>
          </div>
          
          {/* Get to know them - Static Product Carousel */}
          <div className="relative mb-8">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {[
                { name: "Photographer", price: "$15.99", img: "/images/Photographer_May_see.png" },
                { name: "Chef", price: "$15.99", img: "/images/Chef_Anne.png" },
                { name: "Pageant Director", price: "$15.99", img: "/images/Paegent_Director_Mercy_Beret.png" }, 
                {name: "Software Engineer", price: "$15.99", img: "/images/Swe_Jessica_main.png"},
                { name: "Hotel Hostess", price: "$15.99", img: "/images/Hotel-Hostess-Eileen.png" },
              ].map((product, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className="rounded-lg p-4 h-80 flex items-center justify-center mb-3">
          <Image
                      src={product.img}
                      alt={product.name}
                      width={300}
                      height={420}
                      className="h-72 w-auto object-contain"
                      priority={index < 2}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-brown-800 mb-1">NARI</h3>
                    <p className="text-brown-700 mb-2">{product.name}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="font-bold text-brown-800">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))})
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-pink-200 hover:bg-pink-300 border border-brown-800 text-brown-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Our Artists Section */}
      <section className="py-16" style={{ backgroundColor: '#FCF7D9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-800 mb-8">
            Our Artists
          </h2>
          
          <div className="relative">
            <div className="flex space-x-8">
              {[1, 2].map((artist) => (
                <div key={artist} className="flex-shrink-0 w-96">
                  <div className="flex space-x-4">
                    <div className="w-24 h-24 bg-brown-200 rounded-lg flex items-center justify-center">
                      <div className="text-3xl text-brown-600">👤</div>
                    </div>
                    <div className="flex-1 bg-orange-100 rounded-lg p-4">
                      <h3 className="font-bold text-brown-800 mb-2">Person {artist}</h3>
                      <p className="text-brown-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <button className="bg-brown-100 hover:bg-brown-200 p-2 rounded-lg">
                <svg className="w-4 h-4 text-brown-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="bg-brown-100 hover:bg-brown-200 p-2 rounded-lg">
                <svg className="w-4 h-4 text-brown-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-800 text-beige-50">
        <div className="container mx-auto px-4 py-12">
          {/* Mission Statement */}
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-brown-600">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-4">CREATE. SHARE. UNITE.</h3>
              <p className="text-beige-200">
                Our mission is to bring people together through the art of collectible figures, 
                celebrating dreams and aspirations.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-brown-700 hover:bg-brown-600 px-4 py-2 rounded-lg">Google Play</button>
              <button className="bg-brown-700 hover:bg-brown-600 px-4 py-2 rounded-lg">App Store</button>
            </div>
          </div>
          
          {/* Social Media & Newsletter */}
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-brown-600">
            <div>
              <h4 className="font-bold mb-4">FOLLOW US ON</h4>
              <div className="flex space-x-4">
                <span className="text-2xl">📷</span>
                <span className="text-2xl">📘</span>
                <span className="text-2xl">🐦</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Join the community</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg text-brown-800 focus:outline-none"
                />
                <button className="bg-pink-200 hover:bg-pink-300 text-brown-800 px-4 py-2 rounded-lg font-semibold">
                  Sign Me Up
                </button>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-beige-200">
                <li>Chat with us</li>
                <li>Mon-Fri 9AM-6PM EST</li>
                <li>Email us</li>
                <li>Visit Help Center (FAQs)</li>
                <li>Change Country/Region | US</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-beige-200">
                <li>FAQ</li>
                <li>SHIPPING INFO</li>
                <li>PRIVACY POLICY</li>
                <li>TRACK YOUR ORDER</li>
                <li>RETURNS</li>
                <li>ORDER FAILURE GUIDE</li>
                <li>EXCHANGE</li>
                <li>TERMS & CONDITIONS</li>
                <li>AUTHENTICITY CHECK</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">ABOUT US</h4>
              <ul className="space-y-2 text-sm text-beige-200">
                <li>NEWS</li>
                <li>ARTISTS</li>
                <li>ABOUT FIGURASHI</li>
                <li>INVESTOR RELATIONS</li>
                <li>CONTACT US</li>
                <li>CAREERS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SHOP</h4>
              <ul className="space-y-2 text-sm text-beige-200">
                <li>LAUNCH CALENDAR</li>
                <li>TRENDING</li>
                <li>BLIND BOXES</li>
                <li>FIGURES</li>
                <li>ACCESSORIES</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
