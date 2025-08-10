import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { AuthModal } from './components/AuthModal';
import { Filters } from './components/Filters';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { products } from './data/products';
import { Product } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState('featured');

  // Scroll to sections
  const scrollToFeatured = () => {
    const element = document.getElementById('featured-products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAllProducts = () => {
    const element = document.getElementById('all-products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get unique categories from products
  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default: // featured
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const featuredProducts = products.filter(product => product.featured);

  const handleCheckout = () => {
    setIsCartOpen(false);
    alert('Checkout functionality would be implemented here. This is a demo version.');
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            onCartOpen={() => setIsCartOpen(true)}
            onAuthOpen={() => setIsAuthOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <main>
            {/* Hero Section */}
            <Hero onShopNow={scrollToAllProducts} onViewCollections={scrollToFeatured} />

            {/* Featured Products */}
            <section id="featured-products" className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Featured Products
                  </h2>
                  <p className="text-xl text-gray-600">
                    Discover our handpicked selection of premium products
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={setSelectedProduct}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* All Products */}
            <section id="all-products" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    All Products
                  </h2>
                  <p className="text-xl text-gray-600">
                    Browse our complete collection of quality products
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Filters Sidebar */}
                  <div className="lg:col-span-1">
                    <Filters
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onCategoryChange={setSelectedCategory}
                      priceRange={priceRange}
                      onPriceRangeChange={setPriceRange}
                      sortBy={sortBy}
                      onSortChange={setSortBy}
                    />
                  </div>

                  {/* Products Grid */}
                  <div className="lg:col-span-3">
                    {filteredProducts.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-xl text-gray-500 mb-4">No products found</p>
                        <p className="text-gray-400">Try adjusting your filters or search terms</p>
                      </div>
                    ) : (
                      <>
                        <div className="mb-6 flex items-center justify-between">
                          <p className="text-gray-600">
                            Showing {filteredProducts.length} of {products.length} products
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {filteredProducts.map(product => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              onClick={setSelectedProduct}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />

          {/* Modals */}
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}

          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />

          <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;