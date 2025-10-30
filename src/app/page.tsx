"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from "react";
import Footer from '@/components/Footer'
// import CarouselCard from '@/components/carousel/CreatorCard';
import ProductCarousel, {CarouselHandle} from '@/components/carousel/ProductCarousel';
// import ProductCard from '@/components/carousel/ProductCard';
import Carousel from '@/components/carousel/CreatorCarousel';
import dynamic from 'next/dynamic'; // to fix the Hydration errors (https://nextjs.org/docs/messages/react-hydration-error)
import 'react-alice-carousel/lib/alice-carousel.css';


// This page uses Hybrid ISR - it will be statically generated but can be revalidated
export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  // CarouselRef to use buttons to scroll through ProductCarousel
  const carouselRef = useRef<CarouselHandle>(null);
  // fixes hydration error
  const ProductCarouselNoSSR = dynamic(
    () => import('@/components/carousel/ProductCarousel'),
    { ssr: false, loading: () => <p>Loading...</p> }
  );
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

  // to make the website responsive
  const responsive = {
    0: { products: 1 },
    568: { products: 4 },
    1024: { products: 5 },
  };

  // product list
  const products = [
    { id: "1", }
  ]
  // To make the carousel scrollable
  // const carouselRef = useRef<HTMLDivElement>(null);

  // todo: needs to be refactored to use ProductCard
  // const featuredProducts: Product[] = [
  //   { name: 'Pageant Director', price: '$15.99', img: '/images/products/Paegent_Director_Mercy_Beret.png', slug: "pageant-director" },
  //   { name: 'Software Engineer', price: '$15.99', img: '/images/products/Swe_Jessica_main.png', slug: 'software-developer' },
  //   { name: 'Chef', price: '$15.99', img: '/images/products/Chef_Anne.png', slug: "chef" },
  //   { name: 'Hotel Hostess', price: '$15.99', img: '/images/products/Hotel-Hostess-Eileen.png', slug: "hotel-hostess" },
  //   { name: 'Photographer', price: '$15.99', img: '/images/products/Photographer_May_see.png', slug: "photographer" },
  //   { name: 'Lawyer', price: '$15.99', img: '/images/products/Lawyer_Krista.png', slug: "lawyer" },
  //   { name: 'Software Engineer 2', price: '$15.99', img: "/images/products/Swe_Jessica_VN.png", slug: "software-developer-2" },
  //   { name: 'Pageant Director 2', price: '$15.99', img: '/images/products/Pagaent_Director_Mercy_traditional_garment.png', slug: "pageant-director-2" },
  //   { name: 'Software Engineer 3', price: '$15.99', img: "/images/products/Swe_Jessica_short.png", slug: "software-developer-3" },
  //   { name: 'Software Engineer 4', price: '$15.99', img: "/images/products/Swe_Jessica_dark.png", slug: "software-developer-4" },
  // ]

  // todo: needs to be refactored to sue ProductCard
  const getToKnowTheProducts = [
    { name: "Photographer", price: "$15.99", img: "/images/products/Photographer_May_see.png", slug: "photographer" },
    { name: "Chef", price: "$15.99", img: "/images/products/Chef_Anne.png", slug: "chef" },
    { name: "Pageant Director", price: "$15.99", img: "/images/products/Paegent_Director_Mercy_Beret.png", slug: "pageant-director" },
    { name: "Software Engineer", price: "$15.99", img: "/images/products/Swe_Jessica_main.png", slug: "software-developer" },
    { name: "Hotel Hostess", price: "$15.99", img: "/images/products/Hotel-Hostess-Eileen.png", slug: "hotel-hostess" },
  ]

  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: '#FCF7D9' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/images/background/Swe-Jess-Hero-Section_BG.png"
            alt="Hero Section Background"
            fill
            className="object-cover"
          priority
        />
        </div>
        
        {/* Chef Character Vector */}
        <div className="featured mb-12 flex justify-end">
          <Image
            src="/images/background/Chef-Anne-Vector.png"
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
            {/* <Link href="/catalog" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/buttons/Check it out button.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link> */}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="pt-16 pb-16" style={{ backgroundColor: '#FCF7D9' }}>
        <div className="container mx-auto px-4">
          {/* Chef Character Vector */}
        <div className="featured mb-12 flex justify-end">
          <Image
            src="/images/background/Chef-Anne-Vector.png"
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

      {/* Header Row with Dates + Navigation */}
      <div className="flex justify-between items-center px-4 mb-2">
        <div className="text-sm text-brown-600 font-semibold">{todayLabel}</div>
        <div className="flex-grow mx-4 border-t border-brown-300" />
        <div className="text-sm text-brown-600 font-semibold">{yesterdayLabel}</div>
        <button onClick={() => {
          console.log('Parent button clicked', carouselRef.current);
          carouselRef.current?.slidePrev()}
        }
           className="carousel-nav prev">
            <img src="/images/buttons/left-arrow-button.svg" alt="Prev" width={24} height={24}/>
          </button>
          <button onClick={() => {
            console.log('Parent button clicked', carouselRef.current);
            carouselRef.current?.slideNext()}
          }
             className="carousel-nav next">
            <img src="/images/buttons/right-arrow-button.svg" alt="Next" width={24} height={24}/>
          </button>
      </div>

      {/*  <ProductCarousel products={featuredProducts} /> */}
        <ProductCarouselNoSSR ref={carouselRef}/>
        </div>
      </section>

      {/* Get to know them Section */}
      <section className="py-16" style={{ backgroundColor: '#8A834B' }}>
        <div className="container mx-auto px-4">
          <div className="relative z-1">
            <h2 className="text-4xl font-bold text-brown-800 mb-8">
              Get to know them
            </h2>
          </div>
          
          
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
          <div className=" product-card">
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
              <img src="/images/products/Lawyer_Krista.png" alt="Lawyer pack" className="product-image"/>
          </div>
          
          {/* Get to know them - Static Product Carousel */}
          <div>
            <ProductCarousel />
          </div>
          
          <div className="text-center">
          <Link href="/catalog" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/buttons/View More button.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
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
      <Footer/>
    </main>
  )
}
