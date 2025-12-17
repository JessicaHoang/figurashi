"use client";
import Link from 'next/link'
import ProductCard from '@/components/carousel/ProductCarousel/ProductCard' // adjust path as needed
import type { Product } from '@/components/types/product'
import { useState } from 'react'


// This page uses Hybrid rendering - it will be statically generated but can be revalidated
export const revalidate = 1800 // Revalidate every 30 minutes

// Mock product data - in a real app, this would come from a database

// type ProductCardProps = {
//   product: Product
//   nameClassName?: string
//   priceClassName?: string
// }

// type Props = {
//   products: Product[]
//   nameClassName?: string
//   priceClassName?: string
// }

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'tech', name: 'Technology' },
  { id: 'creative', name: 'Creative' },
  { id: 'business', name: 'Business' }
]

export default function CatalogPage() {
  // state to track selected filters
const [selectedTags, setSelectedTags] = useState<string[]>([])

// handler for the filters
const toggleTag = (tag: string) => {
  setSelectedTags((prev: string[]) =>
    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  )
}

// render tag filters
// const allTags = Array.from(
//   new Set(products.flatMap((product) => product.tags ?? []))
// )

// filter Products based on tags. Before rendering your grid
// const filteredProducts = selectedTags.length === 0
//   ? products
//   : products.filter((product) =>
//       product.tags?.some((tag) => selectedTags.includes(tag))
//     )

  return (
    <main className="min-h-screen bg-secondary-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-secondary-800 mb-4">
            NARI Series Catalog
          </h1>
          <p className="text-secondary-600">
            Explore our collection of figure starter packs representing different career paths and dreams.
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            {/* <div className="flex flex-wrap gap-2 mb-6">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedTags.includes(tag)
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div> */}
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  nameClassName="text-secondary-800"
                  priceClassName="text-primary-600"
                />
              ))}
            </div> */}


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Product Image
                    </div>
                    {!product.inStock && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                        Out of Stock
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary-600">
                        ${product.price}
                      </span>
                      <Link 
                        href={`/product/${product.id}`}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}
