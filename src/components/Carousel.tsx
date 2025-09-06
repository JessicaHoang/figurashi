import { useState } from "react"

type CarouselProps<T> = {
    items: T[]
    renderItem: (item: T) => React.ReactNode
    itemsPerSlide?: number
    revealOneByOne?: boolean
  }
  
  export default function Carousel<T>({
    items,
    renderItem,
    itemsPerSlide = 3,
    revealOneByOne = false
  }: CarouselProps<T>) {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const handleNext = () => {
      setCurrentIndex((prev) =>
        revealOneByOne ? Math.min(prev + 1, items.length - 1) : prev + itemsPerSlide
      )
    }
  
    const handlePrev = () => {
      setCurrentIndex((prev) =>
        revealOneByOne ? Math.max(prev - 1, 0) : Math.max(prev - itemsPerSlide, 0)
      )
    }
  
    const visibleItems = revealOneByOne
      ? items.slice(0, currentIndex + 1)
      : items.slice(currentIndex, currentIndex + itemsPerSlide)
  
    return (
      <div className="relative">
        <div className="flex gap-4 overflow-hidden">
          {visibleItems.map((item, index) => (
            <div key={index}>{renderItem(item)}</div>
          ))}
        </div>
  
        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} disabled={currentIndex === 0}>←</button>
          <button
            onClick={handleNext}
            disabled={
              revealOneByOne
                ? currentIndex >= items.length - 1
                : currentIndex + itemsPerSlide >= items.length
            }
          >
            →
          </button>
        </div>
      </div>
    )
  }