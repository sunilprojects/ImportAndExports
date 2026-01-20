import React from 'react';
import { ChevronRight } from 'lucide-react';

// Import product images
import moringaImg from '../images/moringa.jpg';
import tomatoImg from '../images/tomato.jpg';
import onionImg from '../images/onion.jpg';
import beetrootImg from '../images/beetroot.jpg';
import carootIng from '../images/caroot.png';
// import garlicImg from '../images/moringa.jpg';

const ProductsSection = ({ onProductClick }) => {
  const products = [
    {
      id: 1,
      title: 'Moringa Powder',
      image: moringaImg,
      shortDesc: 'Premium quality moringa powder rich in nutrients',
      fullDescription: 'Our Moringa Leaf Powder is produced from carefully selected fresh moringa leaves sourced from trusted farms. The leaves are gently dried under controlled conditions and finely milled to retain natural color, purity, and nutritional value. The product is free from additives and suitable for international food and nutraceutical applications.',
      benefits: ['Rich in Vitamin A, C, and E', 'High protein content', 'Powerful antioxidants', 'Export quality certified'],
      specifications: {
        meshSize: '80-100',
        moisture: '<5%',
        shelfLife: '24 months',
        packaging: 'Multi-layer food-grade bags',
        origin: 'India'
      },
      applications: ['Health & wellness products', 'Nutraceuticals and supplements', 'Functional foods and beverages', 'Herbal formulations'],
      certifications: ['FSSAI', 'ISO 22000', 'Organic Certified']
    },
    {
      id: 2,
      title: 'Tomato Powder',
      image: tomatoImg,
      shortDesc: 'Dehydrated tomato powder for culinary excellence',
      fullDescription: 'Tomato Powder is produced from ripe tomatoes that are dehydrated and milled to preserve natural color, taste, and quality. It provides excellent solubility and consistency, suitable for food manufacturing and commercial applications.',
      benefits: ['Natural red color', 'Rich tomato flavor', 'Long shelf life', 'No additives or preservatives'],
      specifications: {
        meshSize: '60-80',
        moisture: '<6%',
        shelfLife: '18 months',
        packaging: 'Vacuum sealed bags',
        origin: 'India'
      },
      applications: ['Soups & Sauces', 'Seasonings and snack foods', 'Instant food mixes', 'Food ingredient formulations'],
      certifications: ['FSSAI', 'ISO 22000', 'HACCP']
    },
    {
      id: 3,
      title: 'Onion Powder',
      image: onionImg,
      shortDesc: 'Natural beetroot powder with vibrant color',
      fullDescription: 'Onion Powder is manufactured from premium-quality onions that are cleaned, dehydrated, and finely ground under hygienic conditions. It offers consistent flavor, aroma, and shelf stability, making it ideal for large-scale food processing and seasoning applications.',
      benefits: ['Natural red-purple color', 'High in antioxidants', 'Rich in iron and folate', 'Organic certified available'],
      specifications: {
        meshSize: '80-100',
        moisture: '<5%',
        shelfLife: '24 months',
        packaging: 'Multi-layer food-grade bags',
        origin: 'India'
      },
      applications: ['Food processing & manufacturing', 'Sauces, soups, and gravies', 'Ready-to-eat and instant foods', 'Spice blends and seasonings'],
      certifications: ['FSSAI', 'Organic Certified', 'ISO 22000']
    },
    {
      id: 4,
      title: 'Beetroot Powder',
      image: beetrootImg,
      shortDesc: 'Nutrient-dense dehydrated spinach powder',
      fullDescription: 'Beetroot Powder is produced from fresh beetroot that is gently dehydrated to preserve natural color and quality. It is widely used for its natural pigmentation and nutritional properties.',
      benefits: ['High in iron and calcium', 'Rich in vitamins K and A', 'Natural green color', 'Gluten-free'],
      specifications: {
        meshSize: '80-100',
        moisture: '<6%',
        shelfLife: '18 months',
        packaging: 'Food-grade HDPE bags',
        origin: 'India'
      },
      applications: ['Health drinks and nutraceuticals', 'Natural food coloring', 'Bakery and beverage products', 'Functional food formulations'],
      certifications: ['FSSAI', 'ISO 22000', 'Kosher']
    },
    {
      id: 5,
      title: 'Caroot Powder',
      image: carootIng,
      shortDesc: 'Pure dehydrated ginger powder with intense flavor',
      fullDescription: 'Carrot Powder is manufactured from carefully selected carrots, dehydrated and ground into a fine powder. It provides natural color, mild sweetness, and consistent quality for food and beverage applications.',
      benefits: ['Strong natural aroma', 'Anti-inflammatory properties', 'Long-lasting flavor', 'Export grade quality'],
      specifications: {
        meshSize: '40-80',
        moisture: '<8%',
        shelfLife: '24 months',
        packaging: 'Aluminum laminated bags',
        origin: 'India'
      },
      applications: ['Baby food products', 'Bakery items', 'Soups and sauces', 'Health and nutrition products'],
      certifications: ['FSSAI', 'ISO 22000', 'USDA Organic']
    }
    // {
    //   id: 6,
    //   title: 'Garlic Powder',
    //   image: garlicImg,
    //   shortDesc: 'Aromatic dehydrated garlic powder',
    //   fullDescription: 'Premium Garlic Powder processed from fresh garlic cloves using advanced dehydration technology. Maintains strong flavor and aroma while offering convenience. Essential ingredient for food processing, seasonings, and ready-to-eat products.',
    //   benefits: ['Intense garlic flavor', 'Easy to use and store', 'No artificial additives', 'Food safety certified'],
    //   specifications: {
    //     meshSize: '40-80',
    //     moisture: '<6%',
    //     shelfLife: '24 months',
    //     packaging: 'Multi-layer food-grade bags',
    //     origin: 'India'
    //   },
    //   applications: ['Seasonings', 'Ready-to-Eat Meals', 'Sauces & Dips', 'Food Processing'],
    //   certifications: ['FSSAI', 'ISO 22000', 'HACCP']
    // }
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Export Products</span>
          </h2>
          <p className="text-xl text-gray-600">
            Expertly sourced, carefully processed dried and dehydrated food ingredients meeting international quality and safety standards
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    {/* <p className="text-sm font-medium flex items-center gap-2">
                      Click for details <ChevronRight className="w-4 h-4" />
                    </p> */}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.shortDesc}</p>
                
                {/* View Details Button */}
                <button
                  onClick={() => onProductClick(product)}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  View Details
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;