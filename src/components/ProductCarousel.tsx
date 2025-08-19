// components/ProductCarousel.tsx
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

type Product = {
  name: string
  price: string
  img: string
}

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
            <div className="flex-shrink-0 w-64">
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
                  <span className="text-brown-600">🔔</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}