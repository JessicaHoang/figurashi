// 

// ProductCard, the image and information of each product

import React from 'react';
// import './ProductCard.css';

type ProductCardProps = {
  id: string;
  title: string;
  series: string;
  price: string;
  img: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, title, series, price, img 
}) =>
  <div className="product-card-carousel">
      <img src={img} alt={title} />
      <h2>{series}</h2>
      <h3>{title}</h3>
      <p>{price}</p>
  </div>

  export default ProductCard;