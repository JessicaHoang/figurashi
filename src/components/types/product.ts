// Product Type is a shared schema
// how to import: import type { Product } from '@/types/product'
export type Product = {
    id: string
    name: string
    price: number
    img: string
    slug: string
    description?: string
    tags?: string[] // e.g. ['Designer Figurines', 'NARI']
    priority?: boolean
    inStock?: boolean
  }

  

