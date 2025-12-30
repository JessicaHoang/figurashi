// 
// Presentation only
// ProductCard, the image and information of each product

import React from 'react';
import Link from 'next/link';
import type { Product } from '@/components/types/product';
// import './ProductCard.css';

type ProductCardProps = {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, series, price, img, slug } = product;

  return (
    <div className="product-card-carousel group">
      <Link href={`/${series}/${slug}`}>
        <img
          src={img}
          alt={title}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <h2>{series}</h2>
        <h3>{title}</h3>
        <p>${price}</p>
      </Link>
    </div>
  );
};


  export default ProductCard;