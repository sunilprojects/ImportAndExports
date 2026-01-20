import React, { useState } from 'react';
import { ArrowLeft, Package, CheckCircle, Award, ShoppingCart, Phone, Mail, Download } from 'lucide-react';

const ProductDetailPage = ({ product, onBack, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState('description');

  if (!product) return null;

  // Enhanced product data structure
  const productData = {
    fullTitle: product.fullTitle || product.title,
    badges: product.badges || ['Export Quality', '100% Natural', 'Hygienically Processed'],
    fullDescription: product.fullDescription || 'Premium quality product suitable for international markets.',
    applications: product.applications 
    || [
      'Health & wellness products',
      'Nutraceuticals and supplements',
      'Functional foods and beverages',
      'Food processing'
    ],
    packagingOptions: product.packagingOptions || [
      'Bulk export packaging (as per buyer requirement)',
      'Customized packaging available on request',
      // 'Food-grade multi-layer bags',
      'Private labeling available'
    ],
    moq: product.specifications?.moq || 'As per requirement'
  };

  const tabs = [
    { id: 'description', label: 'Product Description' },
    { id: 'applications', label: 'Applications' },
    
    { id: 'packaging', label: 'Packaging & MOQ' }
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
          <span className="text-sm font-medium">Back to Products</span>
        </button>
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"></div>

        {/* Main Product Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Product Image */}
            <div className="relative h-96 lg:h-auto bg-gradient-to-br from-green-100 to-blue-100 p-8">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right - Product Info */}
            <div className="p-8 lg:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {productData.fullTitle}
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {productData.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full text-sm font-semibold text-green-800"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Product Code */}
              <div className="mb-6">
                <span className="text-sm text-gray-600">Product Code: </span>
                <span className="text-sm font-bold text-gray-900">
                  SKD-{product.id.toString().padStart(3, '0')}
                </span>
              </div>

              {/* Certifications */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Certifications:</p>
                <div className="flex flex-wrap gap-2">
                  {product.certifications?.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      <Award className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <div id="insights" className="mt-16">
  {/* Your Insights / News section */}
</div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={onRequestQuote}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Request Quote
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+919983487'}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-2">Need assistance?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
  href="mailto:sunil9ks@group.com"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
             bg-blue-50 text-blue-700 font-semibold text-sm
             hover:bg-blue-100 hover:text-blue-800 transition"
>
  <Mail className="w-4 h-4" />
  <span>Email Us</span>
  <span className="text-xs text-blue-600 font-normal">
    info@skylercinternationals.com
  </span>
</a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Headers */}
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-semibold text-sm whitespace-nowrap transition-all ${
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
            {/* Product Description Tab */}
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Package className="w-6 h-6 text-blue-600" />
                  Product Description
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {productData.fullDescription}
                </p>

                {/* Key Benefits */}
                {product.benefits && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 bg-green-50 p-4 rounded-xl border border-green-100"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications</h2>
                <p className="text-gray-600 mb-6">
                  Our products are suitable for various industrial and commercial applications:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {productData.applications.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-blue-50 p-5 rounded-xl border border-blue-100"
                    >
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Tab
            {activeTab === 'specifications' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-semibold text-gray-900 w-1/3 bg-gray-50 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </td>
                          <td className="py-4 px-6 text-gray-700">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )} */}

            {/* Packaging & MOQ Tab */}
            {activeTab === 'packaging' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Packaging & MOQ</h2>

                {/* Packaging Options */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Packaging Options</h3>
                  <div className="space-y-3">
                    {productData.packagingOptions.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-100"
                      >
                        <Package className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MOQ */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Minimum Order Quantity (MOQ)</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>{productData.moq}</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    We understand that different buyers have different requirements. Contact us to discuss your specific quantity needs and we'll work with you to find the best solution.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-2xl p-10 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Interested in {product.title}?</h3>
          <p className="text-xl mb-6 opacity-90">
            Get in touch with our export team for pricing, samples, and detailed information
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Request Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
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