//displays individual product details in a card format
// renders clickable product image, name, and price and includes some styling

import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/components/types/product'

type ProductCardProps = {
  product: Product
  nameClassName?: string // is optionally included when necessary
  priceClassName?: string
}

  
  export default function ProductCard({ product, nameClassName, priceClassName }: ProductCardProps) {
    if (!product) return null
    const { name, price, img, slug, tags, priority } = product
    return (
        <Link href={`/product/${slug}`} className="block">
        <div className="flex-shrink-0 w-64 hover:scale-[1.02] transition-transform">
          <div className="rounded-lg p-4 h-80 flex items-center justify-center mb-3">
            <Image
              src={img}
              alt={name}
              width={300}
              height={420}
              className="h-72 w-auto object-contain"
              priority={priority}
            />
          </div>
  
        <div className="text-center">
          <h3 className="font-bold text-brown-800 mb-1">NARI</h3>
          <p className={`mb-2 ${nameClassName ?? 'text-brown-700'}`}>{name}</p>
          <div className="flex items-center justify-center space-x-2">
          <span className={`font-bold ${priceClassName ?? 'text-brown-800'}`}>{price}</span>
          </div>
        </div>
      </div>
      </Link>
    )
  }