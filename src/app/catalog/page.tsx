import Link from 'next/link'

// This page uses Hybrid rendering - it will be statically generated but can be revalidated
export const revalidate = 1800 // Revalidate every 30 minutes

// Mock product data - in a real app, this would come from a database
const products = [
  {
    id: 1,
    name: "NARI - Developer",
    description: "Code your dreams into reality",
    price: 49.99,
    category: "tech",
    image: "/api/placeholder/300/400",
    inStock: true
  },
  {
    id: 2,
    name: "NARI - Designer", 
    description: "Create beautiful experiences",
    price: 49.99,
    category: "creative",
    image: "/api/placeholder/300/400",
    inStock: true
  },
  {
    id: 3,
    name: "NARI - Entrepreneur",
    description: "Build your own empire",
    price: 49.99,
    category: "business",
    image: "/api/placeholder/300/400",
    inStock: true
  },
  {
    id: 4,
    name: "NARI - Artist",
    description: "Express your creativity",
    price: 49.99,
    category: "creative",
    image: "/api/placeholder/300/400",
    inStock: false
  },
  {
    id: 5,
    name: "NARI - Scientist",
    description: "Discover the unknown",
    price: 49.99,
    category: "tech",
    image: "/api/placeholder/300/400",
    inStock: true
  },
  {
    id: 6,
    name: "NARI - Chef",
    description: "Craft culinary masterpieces",
    price: 49.99,
    category: "creative",
    image: "/api/placeholder/300/400",
    inStock: true
  }
]

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'tech', name: 'Technology' },
  { id: 'creative', name: 'Creative' },
  { id: 'business', name: 'Business' }
]

export default function CatalogPage() {
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-secondary-800 mb-4">
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-secondary-100 transition-colors"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Under $25
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    $25 - $50
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Over $50
                  </label>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                  Availability
                </h3>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  In Stock Only
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-secondary-600">
                Showing {products.length} products
              </p>
              <select className="border border-secondary-300 rounded-lg px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
