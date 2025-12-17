// 
// Presentation only
// ProductCard, the image and information of each product

import React from 'react';
import Link from 'next/link';
// import './ProductCard.css';

type ProductCardProps = {
  id: string;
  title: string;
  series: string;
  price: string;
  img: string;
  slug: string; // for links
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, title, series, price, img, slug
}) =>
  <div className="product-card-carousel group">
    <Link href={`/${series}/${slug}`}>
      <img 
      src={img} 
      alt={title}
      className="transition-transform duration-300 group-hover:scale-105"
       />
      <h2>{series}</h2>
      <h3>{title}</h3>
      <p>{price}</p>
    </Link>
  </div>

  export default ProductCard;