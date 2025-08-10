import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    brand: 'AudioPro',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone connectivity.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    description: 'Stylish UV protection sunglasses with premium frames and crystal-clear lenses.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    brand: 'StyleVision',
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Leather Business Bag',
    description: 'Premium leather briefcase perfect for professionals. Spacious compartments and elegant design.',
    price: 189.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    brand: 'LeatherCraft',
    rating: 4.7,
    reviewCount: 93,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging for all Qi-enabled devices. Sleek design with LED indicators.',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/163117/phone-mobile-smartphone-tablet-163117.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/163117/phone-mobile-smartphone-tablet-163117.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    brand: 'ChargeTech',
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Premium Coffee Maker',
    description: 'Professional-grade coffee maker with multiple brewing options and temperature control.',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home & Kitchen',
    brand: 'BrewMaster',
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    featured: true
  }
];