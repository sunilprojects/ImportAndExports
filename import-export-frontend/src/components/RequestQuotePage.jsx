import React, { useState, useEffect } from 'react';
import { ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';




const RequestQuotePage = ({ product, onBack }) => {
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_RQ;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    productName: '',
    productCode: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    businessType: '',
    country: '',
    quantity: '',
    unit: 'kg',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        productName: product.title,
        productCode: `SKD-${product.id.toString().padStart(3, '0')}`
      }));
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/quote-request', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData)
  //     });
  //     if (response.ok) {
  //       setSubmitted(true);
  //       window.scrollTo(0, 0);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Quote request saved! Our team will contact you soon.');
  //     setSubmitted(true);
  //     window.scrollTo(0, 0);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const templateParams = {
    product_name: formData.productName,
    product_code: formData.productCode,
    quantity: formData.quantity,
    unit: formData.unit,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    business_type: formData.businessType,
    country: formData.country,
    website: formData.website || 'Not provided',
    additional_info: formData.additionalInfo || 'None',
    reference_id: `QR${Date.now().toString().slice(-8)}`,
    submitted_date: new Date().toLocaleString()
  };

  try {
 
      await emailjs.send(
      SERVICE_ID,        // Replace with your service ID
     TEMPLATE_ID,       // Replace with your template ID
      templateParams,
        PUBLIC_KEY         // Replace with your public key
    );
    
    alert('Quote request submitted successfully!');
    setSubmitted(true);
    window.scrollTo(0, 0);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send. Please try again or contact us directly.');
  }
};

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-20 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your quote request has been submitted successfully. We'll get back to you within 24-48 hours.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-900 font-medium">
              Reference: QR{Date.now().toString().slice(-8)}
            </p>
            {formData.productName && (
              <p className="text-sm text-blue-700 mt-1">
                {formData.productName} ({formData.productCode})
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setSubmitted(false)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              New Request
            </button>
            <button 
              onClick={() => window.location.href = '#products'}
              className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-20 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Request a Quote</h1>
          <p className="text-gray-600">Fill in your details and we'll send you a customized quotation</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Product Badge */}
          {product && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 mb-8 text-center">
              <p className="text-sm text-gray-600 mb-1">Selected Product</p>
              <p className="text-lg font-bold text-gray-900">
                {product.title} <span className="text-blue-600">({formData.productCode})</span>
              </p>
            </div>
          )}

          {/* Form */}
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                readOnly={!!product}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                  product 
                    ? 'border-green-300 bg-green-50 text-green-900 font-medium' 
                    : 'border-gray-200 focus:border-blue-500 focus:outline-none'
                }`}
                placeholder="e.g., Moringa Powder"
              />
            </div>

            {/* Product Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleChange}
                required
                readOnly={!!product}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                  product 
                    ? 'border-green-300 bg-green-50 text-green-900 font-medium' 
                    : 'border-gray-200 focus:border-blue-500 focus:outline-none'
                }`}
                placeholder="e.g., SKD-001"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Required Quantity <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="1000"
                />
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all bg-white"
                >
                  <option value="kg">KG</option>
                  <option value="ton">Ton</option>
                  <option value="mt">MT</option>
                  <option value="lbs">Lbs</option>
                </select>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="Your Company Ltd"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all bg-white"
                >
                  <option value="">Select Type</option>
                  <option value="importer">Importer</option>
                  <option value="distributor">Distributor</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="retailer">Retailer</option>
                  <option value="trader">Trader</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="United States"
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Website <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                placeholder="https://www.yourcompany.com"
              />
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all resize-none"
                placeholder="Any other details that will help us provide you with an accurate quote (packaging, certifications, delivery timeline, etc.)"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Submit Quote Request
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting, you agree to our terms. We'll only use your information to provide the quotation.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-3">Need help? Contact us directly</p>
          <div className="flex justify-center gap-4">
            <a 
              href="tel:+919983487" 
              className="px-6 py-2 bg-white rounded-full text-blue-600 font-semibold shadow-md hover:shadow-lg transition-all"
            >
              📞 Call Us
            </a>
            <a 
              href="mailto:suniff237yr981@group.com" 
              className="px-6 py-2 bg-white rounded-full text-blue-600 font-semibold shadow-md hover:shadow-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;