// components/ProductCarousel.tsx
import ProductCard from '@/components/ProductCard'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import { Product } from '@/components/ProductCard' // or wherever your type lives
import 'swiper/css'


type Props = {
  products: Product[]
}

export default function ProductCarousel({ products }: Props) {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="relative pt-14">
      {/* Navigation Arrows */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-brown-100 hover:bg-brown-200 p-2 rounded-lg"
        >
          <svg className="w-4 h-4 text-brown-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-brown-100 hover:bg-brown-200 p-2 rounded-lg"
        >
          <svg className="w-4 h-4 text-brown-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Product Carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={24}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="pt-14"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} priority={index < 2} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}