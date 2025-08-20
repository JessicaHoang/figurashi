import Link from 'next/link'
import Image from 'next/image'

export type Product = {
    name: string
    price: string
    img: string
    slug?: string
    tags?: string[]
    priority?: boolean
  }
  
  export default function ProductCard({ name, price, img, slug, priority }: Product) {
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
          <p className="text-brown-700 mb-2">{name}</p>
          <div className="flex items-center justify-center space-x-2">
            <span className="font-bold text-brown-800">{price}</span>
          </div>
        </div>
      </div>
      </Link>
    )
  }