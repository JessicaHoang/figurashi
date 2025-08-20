import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Product } from '@/components/ProductCard'

// This page uses Hybrid rendering - it will be statically generated but can be revalidated
export const revalidate = 1800 // Revalidate every 30 minutes

// Mock product data - in a real app, this would come from a database
const products = [
  {
    id: "software-developer",
    name: "NARI - Software Developer",
    description: "Code your dreams into reality",
    slug: "softwaredeveloper",
    longDescription: "This figure represents the journey of becoming a developer. With detailed craftsmanship, it captures the essence of coding, problem-solving, and building digital solutions. Perfect for developers and aspiring programmers.",
    price: 15.99,
    category: "tech",
    image: "/images/products/Swe_Jessica_main.png",
    inStock: true,
    features: [
      "High-quality PVC material",
      "Detailed paint job",
      "Includes base stand",
      "Limited edition packaging"
    ],
    specifications: {
      height: "15cm",
      material: "PVC",
      weight: "200g",
      packaging: "Window box"
    }
  },
  {
    id: 2,
    name: "NARI - Designer", 
    description: "Create beautiful experiences",
    longDescription: "Embrace your creative side with this designer figure. It embodies the artistic spirit and design thinking process. A must-have for designers and creative professionals.",
    price: 49.99,
    category: "creative",
    image: "/api/placeholder/400/500",
    inStock: true,
    features: [
      "High-quality PVC material",
      "Detailed paint job",
      "Includes base stand",
      "Limited edition packaging"
    ],
    specifications: {
      height: "15cm",
      material: "PVC",
      weight: "200g",
      packaging: "Window box"
    }
  },
  {
    id: 3,
    name: "NARI - Entrepreneur",
    description: "Build your own empire",
    longDescription: "This entrepreneur figure represents the spirit of innovation and business leadership. Perfect for business owners and aspiring entrepreneurs.",
    price: 49.99,
    category: "business",
    image: "/api/placeholder/400/500",
    inStock: true,
    features: [
      "High-quality PVC material",
      "Detailed paint job",
      "Includes base stand",
      "Limited edition packaging"
    ],
    specifications: {
      height: "15cm",
      material: "PVC",
      weight: "200g",
      packaging: "Window box"
    }
  }
]

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id.toString() === params.id)
  
  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-secondary-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-secondary-600">
            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/catalog" className="hover:text-primary-600">Catalog</Link></li>
            <li>/</li>
            <li className="text-secondary-800">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="h-96 bg-gray-200 rounded-lg relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Product Image
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-secondary-800 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-secondary-600 mb-4">
                {product.description}
              </p>
              <div className="text-3xl font-bold text-primary-600">
                ${product.price}
              </div>
            </div>

            <div>
              <p className="text-secondary-700 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-secondary-700">Quantity:</label>
                <select className="border border-secondary-300 rounded-lg px-3 py-2">
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  disabled={!product.inStock}
                >
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-secondary-600 capitalize">{key}:</span>
                    <span className="ml-2 text-secondary-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
