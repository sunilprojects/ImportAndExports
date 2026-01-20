import React from 'react';
import { Globe, Shield, Award, Package, Clock, CheckCircle } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Export-Focused Company',
      description: 'Specialized in international trade with complete export documentation and compliance',
      color: 'blue'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Hygienic Processing',
      description: 'State-of-the-art processing facilities maintaining strict hygiene standards',
      color: 'green'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Consistent Quality',
      description: 'Rigorous quality control ensuring every batch meets international standards',
      color: 'purple'
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: 'Customized Packaging',
      description: 'Flexible packaging solutions including private labeling and brand customization',
      color: 'orange'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Timely Delivery',
      description: 'Reliable logistics and on-time shipping to global destinations',
      color: 'red'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Skylerc International</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted export partner delivering quality, reliability, and excellence in every shipment
          </p>
        </div>

        {/* Reasons Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-300 group text-center"
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-${reason.color}-100 to-${reason.color}-50 flex items-center justify-center mx-auto mb-6 text-${reason.color}-600 group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Checkmark */}
              <div className="mt-4 flex justify-center">
                <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Trusted by Global Buyers</h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            We combine years of export experience with modern facilities and strict quality standards 
            to deliver products that meet your exact requirements every time
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.location.href = '#contact'}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Request a Quote
            </button>
            <button
              onClick={() => window.location.href = '#products'}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              View Products
            </button>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-700 font-medium">Years of Export Experience</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-700 font-medium">Satisfied Global Clients</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-700 font-medium">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;