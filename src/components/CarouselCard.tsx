import React from 'react';
import Link from 'next/link';

interface CarouselCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ name, description, imageSrc }) => {
  return (
    <Link href="/artist" passHref>
      <a className="block">
        <div className="flex items-center bg-orange-200 p-6 rounded-lg gap-6 hover:shadow-lg transition-shadow duration-300">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-lg text-black leading-relaxed">{description}</p>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 bg-cream rounded-lg p-4">
            <img
              src={imageSrc}
              alt={`${name} avatar`}
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CarouselCard;