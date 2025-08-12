'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Mock cart data - in a real app, this would come from a cart context or state management
const mockCartItems = [
  {
    id: 1,
    productId: 1,
    name: "NARI - Developer",
    price: 49.99,
    quantity: 2,
    image: "/api/placeholder/100/100"
  },
  {
    id: 2,
    productId: 2,
    name: "NARI - Designer",
    price: 49.99,
    quantity: 1,
    image: "/api/placeholder/100/100"
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems)
  const [isLoading, setIsLoading] = useState(false)

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== itemId))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 0 ? 5.99 : 0
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  const handleCheckout = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Redirect to payment page
    window.location.href = '/payment'
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-secondary-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-secondary-800 mb-4">
              Your cart is empty
            </h1>
            <p className="text-secondary-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link 
              href="/catalog"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-secondary-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-secondary-800 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-secondary-200 last:border-b-0">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg mr-4 flex items-center justify-center text-gray-500 text-xs">
                    Image
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-secondary-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-secondary-600">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-secondary-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-secondary-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-secondary-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="text-right min-w-[80px]">
                      <p className="font-semibold text-secondary-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-secondary-800 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Subtotal</span>
                  <span className="text-secondary-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Shipping</span>
                  <span className="text-secondary-800">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Tax</span>
                  <span className="text-secondary-800">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-secondary-200 pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-secondary-800">Total</span>
                    <span className="font-bold text-xl text-primary-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-secondary-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {isLoading ? 'Processing...' : 'Proceed to Checkout'}
              </button>

              <div className="mt-4 text-center">
                <Link 
                  href="/catalog"
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
