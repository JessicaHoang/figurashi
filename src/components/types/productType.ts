// Product Type is a shared schema
// how to import: import type { Product } from '@/types/product'
export type Product = {
    id: string
    title: string
    series?: string
    price: number
    img: string
    slug: string
    description?: string

    // Customer-facing tags for filtering/search
    tags?: string[] // e.g. ['Designer Figurines', 'NARI']

    // Internal display logic/ layout decisions
    displayFlags?: {
      featured?: boolean;
      showInLanding?: boolean;
      highlight?: boolean;
    }
    priority?: boolean
    inStock?: boolean
    createdAt?: string;
  }

  

