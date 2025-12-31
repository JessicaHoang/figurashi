// pages/categories.tsx

// import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/carousel/ProductCarousel/ProductCard';
import { featuredProducts } from '@/components/data/inventory';
import Footer from '@/components/Footer';
//import { featuredProducts } from '@/data/products';

// products mapping
// const featuredItems = featuredProducts.map((product) => (
//   <ProductCard key={product.id} product={product} />
// ));
console.log("featuredProducts import:", featuredProducts);

function chunkProducts(products: any[], size = 5) {
  const chunks = [];
  for (let i = 0; i < products.length; i += size) {
    chunks.push(products.slice(i, i + size));
  }
  return chunks;
}


export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FCF7D9' }}>
      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 p-4 border-r hidden lg:block">
          {/* <FilterSidebar /> */}
        </aside>

        {/* Product grid */}
        <main className="flex-1 p-4" style={{ backgroundColor: '#FCF7D9' }}>
          <h1 className="text-2xl font-bold mb-4">Designer Figurines</h1>
          <div className="max-w-7xl mx-auto px-4">
            {chunkProducts(featuredProducts).map((group, index) => {
              const [featured, ...rest] = group;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-4 mb-10 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Large card */}
                  <div className="w-full md:w-[40%]">
                    <ProductCard product={featured} variant="large" />
                  </div>

                  {/* Small cards */}
                  <div className="flex flex-wrap gap-4 w-full md:w-[60%]">
                    {rest.map((p) => (
                      <div key={p.id} className="w-[48%] md:w-[45%] lg:w-[30%]">
                        <ProductCard product={p} variant="small" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>


          {/* Pagination */}
          <div className="flex justify-center mt-8">
            {/* Replace with your Pagination component */}
            {/* <Pagination totalPages={9} currentPage={1} /> */}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}