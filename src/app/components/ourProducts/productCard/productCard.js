import React from 'react';
import { AiOutlineStar, AiFillThunderbolt, AiOutlineArrowRight } from 'react-icons/ai';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl 
                    transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(155,80,255,0.5)]
                    border border-gray-700/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-700 
                      group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold 
                         px-3 py-1 rounded-full flex items-center gap-1">
            <AiFillThunderbolt className="w-4 h-4" />
            AI-Powered
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-semibold text-blue-400">${product.price}</span>
          <div className="flex items-center gap-1 text-yellow-400">
            <AiOutlineStar className="w-5 h-5" />
            <span className="text-sm font-medium">{product.rating}/5</span>
          </div>
        </div>

        <ul className="text-gray-400 text-sm mb-6 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                          hover:bg-blue-700 transition-colors duration-300
                          flex items-center justify-center gap-2 group-hover:shadow-lg">
          Explore Now
          <AiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute inset-0 border-2 border-transparent rounded-2xl 
                     group-hover:border-blue-500/50 transition-all duration-500" />
    </div>
  );
};

export default ProductCard;