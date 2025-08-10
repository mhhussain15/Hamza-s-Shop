import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onViewCollections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onViewCollections }) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm opacity-90">Trusted by 10,000+ customers</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Premium Quality,
              <span className="text-yellow-400"> Unbeatable </span>
              Prices
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Discover our curated collection of premium products, 
              handpicked for quality and style.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onShopNow}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={onViewCollections}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Collections
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Premium Products"
              className="relative z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};