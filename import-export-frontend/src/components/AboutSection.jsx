import React from 'react';
import { Target, Eye, Globe, Award, Users, TrendingUp, Shield, CheckCircle, Package, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const companyStats = [
    { icon: <Globe className="w-8 h-8" />, value: '25+', label: 'Countries Served', color: 'blue' },
    { icon: <Package className="w-8 h-8" />, value: '50+', label: 'Product Range', color: 'green' },
    { icon: <Users className="w-8 h-8" />, value: '200+', label: 'Global Clients', color: 'purple' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '15+', label: 'Years Experience', color: 'orange' }
  ];

  const coreValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'International standards compliance with rigorous testing at every stage'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Ethical Sourcing',
      description: 'Transparent supply chain with trusted producers and processing units'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Export Excellence',
      description: 'Complete documentation and reliable shipping for global markets'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Business Partnership',
      description: 'Long-term relationships built on trust and consistent quality'
    }
  ];

  const certifications = [
    'FSSAI Certified',
    'ISO 22000:2018',
    'HACCP Compliant',
    'Organic Certified',
    'Export License',
    'GMP Certified'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            About <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your Trusted Partner for Premium Food Ingredients from India
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12 mb-12 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Skylerc International Private Limited is an <strong>India-based export company</strong> engaged in sourcing, 
                processing, and exporting dried and dehydrated food ingredients to international markets.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our core focus is on <strong>moringa powder and vegetable powders</strong> that meet 
                international quality, safety, and compliance requirements. We serve B2B clients including 
                food manufacturers, distributors, and importers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We work closely with trusted producers and processing units to ensure 
                <strong> product purity, consistency, and traceability</strong> from farm to port.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {companyStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md border border-gray-100">
                  <div className={`text-${stat.color}-600 flex justify-center mb-3`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-white border-2 border-blue-600 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become a <strong>trusted global exporter</strong> of high-quality food ingredients from India, 
              recognized for excellence in quality, reliability, and customer service.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border-2 border-green-600 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Deliver export-quality products that meet international standards</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Build long-term relationships with global buyers</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Ensure ethical sourcing and transparent trade practices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Certifications & Compliance</h3>
            <p className="text-gray-600">Our commitment to quality is backed by international certifications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-blue-600 transition-colors">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Sky High Pvt Ltd?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Quality Products</h4>
              <p className="text-sm text-white/90">
                Consistently high-quality products meeting international food safety standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Global Reach</h4>
              <p className="text-sm text-white/90">
                Experienced in exporting to 25+ countries with reliable shipping and documentation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Business Partnership</h4>
              <p className="text-sm text-white/90">
                Long-term relationships built on trust, transparency, and consistent delivery
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our export team today for product samples, pricing, and detailed specifications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.location.href = '#contact'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Quote
            </button>
            <button 
              onClick={() => window.location.href = '#products'}
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;