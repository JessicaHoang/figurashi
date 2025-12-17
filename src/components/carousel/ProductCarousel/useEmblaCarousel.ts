// Hook setup for Embla Carousel
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const useProductCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false});
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollState = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', updateScrollState);
        updateScrollState();
    }, [emblaApi, updateScrollState]);

    return { emblaRef, emblaApi, canScrollPrev, canScrollNext };
};