// 
// Presentation only
// ProductCard, the image and information of each product

import React from 'react';
import Link from 'next/link';
import type { Product } from '@/components/types/productType';
// import './ProductCard.css';

type ProductCardProps = {
  product: Product;
  variant?: "large" | "small";
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "small" }) => {
  const { id, title, series, price, img, slug } = product;

  return (
    <div
      className={`
        product-card-carousel group 
        overflow-hidden rounded 
        ${variant === "large" ? "aspect-[4/5]" : "aspect-[3/4]"}
      `}
    >
      <Link href={`/${series}/${slug}`}>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <h2>{series}</h2>
        <h3>{title}</h3>
        <p>${price}</p>
      </Link>
    </div>
  );
};


  export default ProductCard;