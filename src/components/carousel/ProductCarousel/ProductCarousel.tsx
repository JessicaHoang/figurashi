// import { BaseCarousel } from './BaseCarousel';
// import { ProductCard } from './ProductCard';
// import { Product } from '@/components/types/product';
// import type { SwiperOptions } from 'swiper/types';


// interface ProductCarouselProps {
//   products: Product[];
// }

// export interface BaseCarouselProps<T> {
//   items: T[];
//   renderItem: (item: T, index: number) => React.ReactNode;
//   config?: {
//     slidesPerView?: number | 'auto';
//     slidesPerGroup?: number;
//     centeredSlides?: boolean;
//     spaceBetween?: number;
//     breakpoints?: SwiperOptions['breakpoints'];
//     navigation?: boolean; // ✅ Add this
//   };
// }


// export function ProductCarousel({ products }: ProductCarouselProps) {
//   return (
//     <BaseCarousel
//       items={products}
//       renderItem={(product) => <ProductCard product={product} />}
//       config={{
//         slidesPerView: 5.2,
//         slidesPerGroup: 5,
//         spaceBetween: 16,
//         navigation: true,
//         breakpoints: {
//           640: { slidesPerView: 2.5, slidesPerGroup: 2 },
//           1024: { slidesPerView: 5.2, slidesPerGroup: 5 },
//         },
//       }}
//     />
//   );
// }

//////////////////////////////////////////////////////////////////////////

// import React, {useRef, forwardRef, useImperativeHandle} from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import ProductCard from './ProductCard';
// import Link from 'next/link';
// import Image from 'next/image';


// export interface CarouselHandle {
//   slideNext: () => void;
//   slidePrev: () => void;
// }

// const ProductCarousel = forwardRef<CarouselHandle>((props, ref) => {
//   <ProductCarousel {...props} ref={ref} />
//   const carouselRef = useRef<AliceCarousel>(null);

//   useImperativeHandle(ref, () => ({
//     slideNext: () => {
//       console.log('slideNext triggered');
//       carouselRef.current?.slideNext();
//     },
//     slidePrev: () => {
//       console.log('slidePrev triggered');
//       carouselRef.current?.slidePrev();
//     }, 
//   }));

//   const responsive = {
//     0: { items: 1 },
//     568: { items: 4 },
//     1024: { items: 5 },
//   };


//   const products = [
//     { id: "1", title: 'Pageant Director', series: "NARI", price: '$15.99', img: '/images/products/Paegent_Director_Mercy_Beret.png', slug: "pageant-director" },
//     { id: "2",  title: 'Software Engineer', series: "NARI", price: '$15.99', img: '/images/products/Swe_Jessica_main.png', slug: 'software-developer' },
//     { id: "3",  title: 'Chef', price: '$15.99', series: "NARI", img: '/images/products/Chef_Anne.png', slug: "chef" },
//     { id: "4",  title: 'Hotel Hostess', series: "NARI", price: '$15.99', img: '/images/products/Hotel-Hostess-Eileen.png', slug: "hotel-hostess" },
//     { id: "5",  title: 'Photographer', series: "NARI", price: '$15.99', img: '/images/products/Photographer_May_see.png', slug: "photographer" },
//     { id: "6",  title: 'Lawyer', series: "NARI", price: '$15.99', img: '/images/products/Lawyer_Krista.png', slug: "lawyer" },
//     { id: "7",  title: 'Software Engineer 2', series: "NARI", price: '$15.99', img: "/images/products/Swe_Jessica_VN.png", slug: "software-developer-2" },
//     { id: "8",  title: 'Pageant Director 2', series: "NARI", price: '$15.99', img: '/images/products/Pagaent_Director_Mercy_traditional_garment.png', slug: "pageant-director-2" },
//     { id: "9",  title: 'Software Engineer 3', series: "NARI", price: '$15.99', img: "/images/products/Swe_Jessica_short.png", slug: "software-developer-3" },
//     { id: "10",  title: 'Software Engineer 4', series: "NARI", price: '$15.99', img: "/images/products/Swe_Jessica_dark.png", slug: "software-developer-4" },
//   ];

//   const items = products.map((product, index) => (
//     <div className="item" key={index} data-value={index + 1}>
//       <Link href={`/${product.series}/${product.slug}`}className="group block">
//           <ProductCard {...product} />
//       </Link>
//     </div>
//   ))


//   return (
//     <div>
//     {/* Navigation Buttons
//     <div className="absolute top-0 right-4 z-10 flex gap-2 mt-2">
//       <button onClick={() => carouselRef.current?.slidePrev()} className="carousel-nav prev">
//         <Image src="/images/buttons/left-arrow-button.svg" alt="Previous" width={24} height={24} />
//       </button>
//       <button onClick={() => carouselRef.current?.slideNext()} className="carousel-nav next">
//         <Image src="/images/buttons/right-arrow-button.svg" alt="Next" width={24} height={24} />
//       </button> */}


//       <div className="ProductCarousel">
//       <AliceCarousel
//         ref={carouselRef}
//         mouseTracking
//         items={items}
//         responsive={responsive}
//         disableButtonsControls
//       />
//     </div>
//   </div>
//   // </div>
    
//   );
// });

// ProductCarousel.displayName = "ProductCarousel";
// export default ProductCarousel;

//////////////////////////////////////////////////////////////////////////

// Component
import React from 'react';
import styles from './styles.module.css';
import { useProductCarousel } from './useEmblaCarousel';
import Image from 'next/image';

type ProductCarouselProps = {
  items: React.ReactNode[];
  showNav?: boolean;
};

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ items, showNav = false}) => {
  const { emblaRef, emblaApi, canScrollPrev, canScrollNext } = useProductCarousel();

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {items.map((item, index) => (
            <div className={styles.emblaSlide} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {showNav && emblaApi && (
        <div className={styles.navButtons}>
          <button onClick={() => emblaApi.scrollPrev()} disabled={!canScrollPrev}>
            <Image src="/images/buttons/left-arrow-button.svg" alt="Previous" width={48} height={48} />
          </button>
          <button onClick={() => emblaApi.scrollNext()} disabled={!canScrollNext}>
            <Image src="/images/buttons/right-arrow-button.svg" alt="Next" width={48} height={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;