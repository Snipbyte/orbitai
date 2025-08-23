import React from 'react';
import ProductCard from '../productCard/productCard';

const products = [
  {
    id: 1,
    name: 'AI Analytics Pro',
    description: 'Advanced AI-powered analytics platform for real-time insights and predictions.',
    price: 99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551288049-b1bd52206d29?auto=format&fit=crop&w=800&q=80', 
    features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards']
  },
  {
    id: 2,
    name: 'Neural Network Suite',
    description: 'Comprehensive toolkit for building and deploying neural networks at scale.',
    price: 149,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
    features: ['Deep learning frameworks', 'Cloud integration', 'Model optimization']
  },
  {
    id: 3,
    name: 'AI Chatbot Builder',
    description: 'Create intelligent chatbots with natural language processing capabilities.',
    price: 79,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80',
    features: ['NLP integration', 'Multi-platform support', 'Customizable UI']
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