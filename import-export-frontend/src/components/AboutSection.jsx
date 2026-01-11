import React from 'react';
import { Target, Eye, CheckCircle, Award, Shield, Package } from 'lucide-react';

const AboutSection = () => {
  const qualityPoints = [
    'Controlled sourcing from trusted growers',
    'Processing in certified facilities',
    'Systematic batch-level quality checks',
    'Complete traceability from farm to port',
    'Compliance with international food safety standards'
  ];

  const products = [
    'Moringa Leaf Powder',
    'Onion Powder',
    'Tomato Powder',
    'Spinach Powder',
    'Carrot Powder',
    'Beetroot Powder'
  ];

  const services = [
    { icon: <Package className="w-6 h-6" />, text: 'Bulk Orders' },
    { icon: <Shield className="w-6 h-6" />, text: 'Custom Specifications' },
    { icon: <Award className="w-6 h-6" />, text: 'Private Labeling' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Skylerc International Pvt Ltd</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for premium dried and dehydrated food ingredients
          </p>
        </div>

        {/* Company Background */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              Company Background
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                <strong>Skylerc International Private Limited</strong> is an India-based export company 
                focused on delivering high-quality dried and dehydrated food ingredients to global markets.
              </p>
              <p>
                We specialize in <strong>moringa powder and selected vegetable powders</strong> manufactured 
                to meet international food safety, quality, and compliance standards. Our products are supplied 
                to food manufacturers, distributors, private-label brands, and importers across multiple countries.
              </p>
              <p>
                By working directly with trusted growers and professionally managed processing units, we ensure 
                <strong> strict quality control, consistent specifications, and complete traceability from farm to port</strong>—enabling 
                our buyers to source with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* What We Export */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Text Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What We Export</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We export premium <strong>moringa leaf powder</strong> and <strong>dehydrated vegetable powders</strong> including 
                onion, tomato, spinach, carrot, and beetroot. Our products are hygienically processed, quality tested, 
                and supplied in bulk to meet international food safety and export standards.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We support <strong>bulk orders, custom specifications, and private labeling</strong>, serving food manufacturers, 
                distributors, and importers worldwide.
              </p>

              {/* Services */}
              <div className="flex flex-wrap gap-4 mb-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white border-2 border-blue-200 rounded-xl px-4 py-3">
                    <div className="text-blue-600">{service.icon}</div>
                    <span className="font-semibold text-gray-800">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Product List */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Our Export Products</h4>
              <div className="space-y-3">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How We Ensure Quality */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">How We Ensure Quality</h3>
            <p className="text-lg text-center mb-8 opacity-90 max-w-4xl mx-auto">
              We ensure quality through controlled sourcing, processing in certified facilities, and systematic 
              batch-level checks, ensuring all products comply with applicable food safety, quality, and export standards.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {qualityPoints.map((point, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="bg-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a <strong>trusted global supplier</strong> of high-quality dried and dehydrated food ingredients, 
              recognized for consistency, compliance, and long-term partnerships.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-4 rounded-xl">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To source and export food ingredients that meet <strong>international quality and safety standards</strong> through 
              reliable supply chains, responsible sourcing, and disciplined quality control, delivering dependable value 
              to our global B2B customers.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10 border-2 border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Source With Confidence?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us for consistent quality, reliable supply, and professional export service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.location.href = '#contact'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl"
            >
              Request a Quote
            </button>
            <button 
              onClick={() => window.location.href = '#products'}
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              View Our Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;