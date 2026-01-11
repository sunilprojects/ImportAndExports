import React from 'react';
import { ChevronRight } from 'lucide-react';

import moringaImg from '../images/moringa.jpg';
import tomatoImg from '../images/tomato.jpg';
import onionImg from '../images/onion.jpg';
import beetrootImg from '../images/beetroot.jpg';
import carrotImg from '../images/caroot.png';

const ProductsPreviewSection = ({ onProductClick }) => {
  const featuredProducts = [
    {
      id: 1,
      title: 'Moringa Leaf Powder',
      image: moringaImg,
      description: 'Premium quality moringa powder rich in nutrients',
    },
    {
      id: 2,
      title: 'Onion Powder',
      image: onionImg,
      description: 'Dehydrated onion powder with strong natural flavor',
    },
    {
      id: 3,
      title: 'Tomato Powder',
      image: tomatoImg,
      description: 'Pure tomato powder with natural color and taste',
    },
    {
      id: 4,
      title: 'Carrot Powder',
      image: carrotImg,
      description: 'Nutrient-rich carrot powder for food applications',
    },
    {
      id: 5,
      title: 'Beetroot Powder',
      image: beetrootImg,
      description: 'Natural beetroot powder with vibrant color',
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600">
            Premium dehydrated food ingredients for global markets
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8 " >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all group cursor-pointer overflow-hidden "
              onClick={() => onProductClick && onProductClick(product)}
            >
              Product Image
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 ">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                    <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                    </button>
              </div>
            </div>
          ))}
        </div>

        View All Button
        <div className="text-center">
          <button
            onClick={() => window.location.href = '#products'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreviewSection;