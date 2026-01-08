import React, { useState } from 'react';
import { ArrowLeft, Package, FileText, Award, Truck, Shield, Globe, Phone, Mail, Download } from 'lucide-react';

const ProductDetailPage = ({ product, onBack, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!product) return null;

  const tabs = [
    { id: 'overview', label: 'Product Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'certifications', label: 'Certifications & Quality' },
    { id: 'packaging', label: 'Packaging & Delivery' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to All Products</span>
        </button>

        {/* Main Product Section */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="grid lg:grid-cols-5 gap-8 p-8">
            {/* Left - Product Image */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-lg p-6 border">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-contain"
                  />
                </div>
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                    <Shield className="w-5 h-5" />
                    <span>Export Quality Certified</span>
                  </div>
                  <p className="text-sm text-green-600">
                    Meets international food safety and quality standards
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{product.shortDesc}</p>
                
                {/* Product Code & Origin */}
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span className="text-gray-600">
                    <strong>Product Code:</strong> SKD-{product.id.toString().padStart(3, '0')}
                  </span>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-600">
                    <strong>Origin:</strong> {product.specifications.origin}
                  </span>
                </div>

                {/* Certifications Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                      <Award className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Mesh Size</p>
                    <p className="font-semibold text-gray-900">{product.specifications.meshSize}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Moisture</p>
                    <p className="font-semibold text-gray-900">{product.specifications.moisture}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Shelf Life</p>
                    <p className="font-semibold text-gray-900">{product.specifications.shelfLife}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Packaging</p>
                    <p className="font-semibold text-gray-900">{product.specifications.packaging}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button 
                  onClick={onRequestQuote}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Request Quote
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+919983487'}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Supplier
                </button>
              </div>

              {/* Trade Assurance Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Globe className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Worldwide Shipping</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Truck className="w-8 h-8 text-green-600 mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Timely Delivery</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Shield className="w-8 h-8 text-purple-600 mb-2" />
                    <p className="text-xs text-gray-600 font-medium">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border overflow-hidden">
          {/* Tab Headers */}
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-600" />
                    Product Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{product.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-100">
                        <div className="bg-green-600 rounded-full p-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Applications</h3>
                  <div className="grid md:grid-cols-4 gap-3">
                    {product.applications.map((app, index) => (
                      <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                        <p className="text-sm font-medium text-blue-900">{app}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Technical Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900 w-1/3 bg-gray-50">Mesh Size</td>
                        <td className="py-4 px-4 text-gray-700">{product.specifications.meshSize}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900 bg-gray-50">Moisture Content</td>
                        <td className="py-4 px-4 text-gray-700">{product.specifications.moisture}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900 bg-gray-50">Shelf Life</td>
                        <td className="py-4 px-4 text-gray-700">{product.specifications.shelfLife}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900 bg-gray-50">Packaging Type</td>
                        <td className="py-4 px-4 text-gray-700">{product.specifications.packaging}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900 bg-gray-50">Country of Origin</td>
                        <td className="py-4 px-4 text-gray-700">{product.specifications.origin}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900 bg-gray-50">Minimum Order Quantity</td>
                        <td className="py-4 px-4 text-gray-700">100 kg (Negotiable)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Certifications & Quality Assurance
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{cert}</h3>
                      <p className="text-sm text-gray-600">Certified & Compliant</p>
                    </div>
                  ))}
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-3">Quality Commitment</h3>
                  <p className="text-sm text-green-700 leading-relaxed">
                    All our products undergo rigorous quality testing at every stage - from sourcing to final packaging. 
                    We maintain international standards for food safety, hygiene, and quality to ensure you receive 
                    only the best export-grade products.
                  </p>
                </div>
              </div>
            )}

            {/* Packaging Tab */}
            {activeTab === 'packaging' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  Packaging & Delivery Information
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Packaging Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded">
                          <Package className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Primary Packaging</p>
                          <p className="text-sm text-gray-600">{product.specifications.packaging}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded">
                          <Package className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Secondary Packaging</p>
                          <p className="text-sm text-gray-600">Corrugated carton boxes with proper labeling</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded">
                          <Shield className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Export Packaging</p>
                          <p className="text-sm text-gray-600">Palletized for safe international shipping</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Delivery Information</h3>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700 mb-2"><strong>Lead Time:</strong> 15-20 business days</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Shipping Terms:</strong> FOB, CIF, CFR</p>
                      <p className="text-sm text-gray-700"><strong>Port of Loading:</strong> Mumbai/Chennai, India</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      We provide complete export documentation including Certificate of Origin, 
                      Phytosanitary Certificate, and other required documents for smooth customs clearance.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Interested in {product.title}?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get in touch with our export team for pricing, samples, and detailed information
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onRequestQuote}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Request Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;