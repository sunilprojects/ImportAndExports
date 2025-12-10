import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Send } from 'lucide-react';

const ImpexpWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Dealership', href: '#dealership' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    {
      title: 'Processed Fruits & Vegetables',
      description: 'Premium quality processed fruits and vegetables for healthy living.',
      icon: '🥗'
    },
    {
      title: 'Millets',
      description: 'Nutritious and sustainable millets for a healthy and eco-friendly diet.',
      icon: '🌾'
    },
    {
      title: 'Animal Feeds',
      description: 'Nutrient-rich animal feed for healthier livestock and sustainable farming.',
      icon: '🐄'
    },
    {
      title: 'Processed Dairy Products',
      description: 'High-quality dairy products designed for taste and nutrition.',
      icon: '🥛'
    },
    {
      title: 'Essential Oils',
      description: 'Pure and natural essential oils for wellness and aromatherapy.',
      icon: '🌿'
    },
    {
      title: 'Spices',
      description: 'Fresh and aromatic spices to enhance your culinary creations.',
      icon: '🌶️'
    }
  ];

  const benefits = [
    {
      icon: '🥦',
      title: 'Plant Based',
      description: 'Plant-based protein-rich products are highly valued for their nutritional content and their ability to support a balanced diet.'
    },
    {
      icon: '🫘',
      title: 'Rich in Protein',
      description: 'Protein-rich products supporting a balanced diet, especially for those avoiding animal products.'
    },
    {
      icon: '⚡',
      title: 'Energy Booster',
      description: 'Natural energy-boosting ingredients to keep you active and healthy throughout the day.'
    },
    {
      icon: '🐾',
      title: 'Cruelty Free',
      description: 'Ethically sourced and cruelty-free products that align with sustainable and compassionate values.'
    }
  ];

  const testimonials = [
    {
      name: 'Subramanya S',
      text: 'Received a consignment of tomato powder and is very pleased with it. The powder arrived in good condition, has a fresh flavor and perfect color, and performs well in recipes, tasting just like fresh tomatoes.',
      rating: 5
    },
    {
      name: 'Sunil Sky',
      text: 'The packing was good and all bags were in good condition. The dried vegetable flakes and fruit powders are all good in terms of flavor and quality. Recipes using these products are colorful and well-received by clients.',
      rating: 5
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
             Impexp Groups
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+919972125245" className="text-green-600 hover:text-green-700">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:sunilofficial781@group.com" className="text-green-600 hover:text-green-700">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-green-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Partner in<br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Premium Food Ingredients
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in manufacturing premium-quality products crafted to the highest standards. 
                Our diverse range includes processed vegetables and fruits in flakes and powder form, millets, 
                essential oils, and animal feed. With over 20+ years of experience, we manufacture and export organic products.
              </p>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                Explore Our Products
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
             <div className="relative w-full h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl shadow-2xl overflow-hidden">
            <img
              src="https://zamaorganics.com/cdn/shop/articles/Website_Product_Photo-Set_Margins_-_2024-02-09T142726.544.png?v=1707471973&width=1100"
               className="w-full h-full object-cover"
                              alt="Product"
                  />
                  </div>

            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Group of Companies</h2>
            <p className="text-xl text-gray-600">
              Discover premium-quality products crafted to meet your needs with freshness and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-green-100 group hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unlock the Natural Benefits of Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Switch to a healthier lifestyle with nature's best offerings
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied clients worldwide</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Fill out the form and we'll get back to you promptly
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone/WhatsApp*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-6"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Submit Now
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ImpExp Groups</h3>
            <div className="space-y-3">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                3HXW+4PH, B B Road, Near More Super Market, Nehru Nagar, Old town, Yelahanka, Bengaluru, Karnataka 560064
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91 9972125245
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                sunilofficial781@impexpgroup.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition-colors">Processed Fruits & Vegetables</li>
              <li className="hover:text-green-400 transition-colors">Millets</li>
              <li className="hover:text-green-400 transition-colors">Animal Feeds</li>
              <li className="hover:text-green-400 transition-colors">Essential Oils</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© {new Date().getFullYear()} ImpExp Groups. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919972125245"
        // href="https://wa.me/919876543210?text=Hello!%20I%20need%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default ImpexpWebsite;