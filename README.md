# Hamza's Shop - Full Stack E-commerce Website

A modern, responsive e-commerce platform built with React and TypeScript, featuring a complete shopping experience with product browsing, cart management, user authentication, and secure payment processing.

## Live Demo

Visit the live application: [Hamza's Shop] (https://dazzling-horse-8b621b.netlify.app)
## Project Description

Hamza's Shop is a comprehensive full-stack e-commerce website that provides users with a seamless online shopping experience. The platform features a modern, responsive design with intuitive navigation, advanced product filtering, secure user authentication, and integrated payment processing through Stripe. Built with performance and user experience in mind, the application offers smooth animations, mobile-first design, and production-ready functionality.

## Features

### Shopping Experience
- **Product Catalog**: Browse through a curated collection of premium products
- **Advanced Search & Filtering**: Filter by category, price range, and sort by various criteria
- **Product Details**: Detailed product pages with image galleries and specifications
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **Wishlist**: Save favorite products for later (UI ready)

### User Management
- **Authentication System**: Secure login and registration
- **User Profiles**: Personalized user experience with avatars
- **Session Management**: Persistent login state

### Design & UX
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized loading and smooth interactions

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Context API**: Efficient state management for cart and authentication
- **Component Architecture**: Modular, reusable components
- **Error Handling**: Comprehensive error handling and validation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hamzas-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Key Components

### Product Management
- **ProductCard**: Displays product information with add-to-cart functionality
- **ProductDetail**: Modal with detailed product view and image gallery
- **Filters**: Advanced filtering and sorting options

### Shopping Cart
- **Cart**: Full-featured shopping cart with quantity management
- **CartContext**: Global cart state management with persistence

### User Authentication
- **AuthModal**: Login and registration forms
- **AuthContext**: User session management

### Navigation & Layout
- **Header**: Responsive navigation with search functionality
- **Hero**: Engaging landing section with call-to-action buttons
- **Footer**: Comprehensive site footer with contact information

## Configuration

### Customization
- **Products**: Update `src/data/products.ts` to modify the product catalog
- **Styling**: Customize colors and themes in `tailwind.config.js`
- **Branding**: Update logos and brand information in components

## Deployment

The application is configured for easy deployment to various platforms:

### Other Platforms
The application can be deployed to any static hosting service that supports single-page applications.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Developed by Mohd. Hamza Hussain**

