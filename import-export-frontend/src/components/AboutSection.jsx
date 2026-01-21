import React from 'react';
import { Target, Eye, CheckCircle, Award, Shield, Package, Globe } from 'lucide-react';

const AboutSection = () => {
  const qualityPoints = [
    { icon: <Shield className="w-6 h-6" />, text: 'Controlled Sourcing', color: 'blue' },
    { icon: <Award className="w-6 h-6" />, text: 'Certified Facilities', color: 'green' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Batch-Level Checks', color: 'purple' },
    { icon: <Globe className="w-6 h-6" />, text: 'Farm to Port Traceability', color: 'orange' },
    { icon: <Package className="w-6 h-6" />, text: 'International Standards', color: 'red' }
  ];

  const products = [
    'Moringa Leaf Powder',
    'Onion Powder',
    'Tomato Powder',
    'Carrot Powder',
    'Beetroot Powder'
  ];

  const services = [
    { icon: <Package className="w-6 h-6" />, text: 'Bulk Orders', color: 'blue' },
    { icon: <Shield className="w-6 h-6" />, text: 'Custom Specifications', color: 'green' },
    { icon: <Award className="w-6 h-6" />, text: 'Private Labeling', color: 'purple' }
  ];

  // const stats = [
  //   { icon: <Globe className="w-8 h-8" />, number: '25+', label: 'Countries Served', color: 'blue' },
  //   { icon: <Users className="w-8 h-8" />, number: '200+', label: 'Global Clients', color: 'green' },
  //   { icon: <TrendingUp className="w-8 h-8" />, number: '15+', label: 'Years Experience', color: 'purple' },
  //   { icon: <Package className="w-8 h-8" />, number: '50+', label: 'Export Products', color: 'orange' }
  // ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Skylerc International Pvt Ltd</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for premium dried and dehydrated food ingredients
          </p>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center group hover:-translate-y-2"
            >
              <div className={`text-${stat.color}-600 flex justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Company Background - Modern Card */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-1">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Company Background</h3>
                    <p className="text-gray-600">India-based export excellence</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p className="text-xl">
                    <strong className="text-blue-600">Skylerc International Private Limited</strong> is an India-based export company 
                    focused on delivering high-quality dried and dehydrated food ingredients to global markets.
                  </p>
                  <p>
                    We specialize in <strong className="text-green-600">moringa powder and selected vegetable powders</strong> manufactured 
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
          </div>
        </div>

        {/* What We Export - Two Column */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Services */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What We Export</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We export premium <strong className="text-blue-600">moringa leaf powder</strong> and <strong className="text-green-600">dehydrated vegetable powders</strong>. 
                Our products are hygienically processed, quality tested, and supplied in bulk to meet international standards.
              </p>
              
              {/* Services Grid */}
              <div className="space-y-4 mb-6">
                {services.map((service, index) => (
                  <div key={index} className={`flex items-center gap-4 bg-gradient-to-r from-${service.color}-50 to-white p-4 rounded-xl border-2 border-${service.color}-100 hover:border-${service.color}-300 transition-all`}>
                    <div className={`bg-${service.color}-600 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <span className="font-bold text-gray-800 text-lg">{service.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 italic">
                Serving food manufacturers, distributors, and importers worldwide
              </p>
            </div>

            {/* Right - Product List */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl shadow-xl p-8 text-white">
              <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Package className="w-8 h-8" />
                Our Export Products
              </h4>
              <div className="space-y-3">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all group">
                    <div className="bg-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-lg">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance - Modern Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-gray-900 mb-3">How We Ensure Quality</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Systematic quality control through controlled sourcing, certified facilities, and batch-level checks
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center group hover:-translate-y-2 border-2 border-${point.color}-100`}
              >
                <div className={`text-${point.color}-600 flex justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {point.icon}
                </div>
                <p className="text-sm font-bold text-gray-800">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission - Side by Side Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a <strong className="text-blue-600">trusted global supplier</strong> of high-quality dried and dehydrated food ingredients, 
                recognized for consistency, compliance, and long-term partnerships.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-4 rounded-2xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To source and export food ingredients that meet <strong className="text-green-600">international quality and safety standards</strong> through 
                reliable supply chains, responsible sourcing, and disciplined quality control.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Premium Design */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative p-12 text-center text-white">
            <h3 className="text-4xl font-bold mb-4">Ready to Source With Confidence?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with us for consistent quality, reliable supply, and professional export service
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '#contact'}
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <Package className="w-5 h-5" />
                Request a Quote
              </button>
              <button 
                onClick={() => window.location.href = '#products'}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;