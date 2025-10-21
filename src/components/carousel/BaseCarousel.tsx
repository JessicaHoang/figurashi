// Generic Swiper wrapper for ProductCarousel and CreatorCarousel

// BaseCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css';

export interface BaseCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  config?: {
    slidesPerView?: number | 'auto';
    slidesPerGroup?: number;
    centeredSlides?: boolean;
    spaceBetween?: number;
    breakpoints?: SwiperOptions['breakpoints'];
  };
}
export function BaseCarousel<T>({
  items,
  renderItem,
  config = {},
}: BaseCarouselProps<T>) {
  const {
    slidesPerView = 1,
    slidesPerGroup = 1,
    centeredSlides = false,
    spaceBetween = 16,
    breakpoints,
  } = config;

  return (
    <Swiper
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      centeredSlides={centeredSlides}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      navigation
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
