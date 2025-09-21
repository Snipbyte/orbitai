import React from 'react';
import ProductCard from '../productCard/productCard';

const products = [
  {
    id: 1,
    name: 'CAIR Drive',
    description: 'Advanced AI-powered driver camera system for real-time behavior analysis and fleet safety.',
    rating: 4.8,
    image: '/images/cd.jpg',
    features: ['Real-time driver behavior monitoring', 'Drowsiness and distraction detection', 'Instant safety alerts'],
    link: 'https://drive.cair.center/'
  },
  {
    id: 2,
    name: 'CAIR Monitoring',
    description: 'Cutting-edge security and monitoring solution powered by edge computing for real-time insights.',
    rating: 4.9,
    image: '/images/cm.jpg',
    features: ['Real-time security monitoring', 'Instant alerts and insights', 'Customizable security solutions'],
    link: 'https://monitoring.cair.center/'
  },
  {
    id: 3,
    name: 'Journey Management System (JMS)',
    description: 'Intelligent journey management system to optimize travel safety and efficiency (Coming soon).',
    rating: 4.7,
    image: '/images/jms.jpg',
    features: ['Route safety scoring', 'Weather adaptation tips', 'Emergency preparedness']
  }
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-themeColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover cutting-edge AI tools designed to empower your business with intelligent solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;