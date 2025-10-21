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

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductCard from './ProductCard';

const ProductCarousel: React.FC = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 5},
  };

  const products = [
    { id: "1", title: 'Pageant Director', series: 'NARI', price: '$15.99', img: '/images/products/Paegent_Director_Mercy_Beret.png'},
    { id: "2", title: 'Software Engineer', series: 'NARI', price: '$15.99', img: '/images/products/Swe_Jessica_main.png'},
    { id: "3", title: 'Chef', series: 'NARI', price: '$15.99', img: '/images/products/Chef_Anne.png'},
    { id: "4", title: 'Hotel Hostess', series: 'NARI', price: '$15.99', img: '/images/products/Hotel-Hostess-Eileen.png'},
    { id: "5", title: 'Photographer', series: 'NARI', price: '$15.99', img: '/images/products/Photographer_May_see.png'},
    { id: "6", title: 'Lawyer', series: 'NARI', price: '$15.99', img: '/images/products/Lawyer_Krista.png'},
    { id: "7", title: 'Software Engineer 2', series: 'NARI', price: '$15.99', img: "/images/products/Swe_Jessica_VN.png"},
    { id: "8", title: 'Pageant Director 2', series: 'NARI', price: '$15.99', img: '/images/products/Pagaent_Director_Mercy_traditional_garment.png'},
    { id: "9", title: 'Software Engineer 3', series: 'NARI', price: '$15.99', img: "/images/products/Swe_Jessica_short.png"},
    { id: "10", title: 'Software Engineer 4', series: 'NARI', price: '$15.99', img: "/images/products/Swe_Jessica_dark.png"},
  ];

  const items = products.map((product, index) => (
    <div className="item" key={index} data-value={index + 1}>
      <ProductCard {...product} />
    </div>
  ))

  const Carousel = () => (
    <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy='alternative'
    />
  );

  return (
    <div className="ProductCarousel">
      <Carousel />
    </div>
  )
}

export default ProductCarousel;