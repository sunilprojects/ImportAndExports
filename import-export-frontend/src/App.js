import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ProductDetailPage from './components/ProductDetailPage';
import RequestQuotePage from './components/RequestQuotePage';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showQuotePage, setShowQuotePage] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
    setShowQuotePage(false);
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
    setShowQuotePage(false);
    // Scroll to products section
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRequestQuote = (product = null) => {
    setSelectedProduct(product);
    setShowQuotePage(true);
    setShowProductDetail(false);
    window.scrollTo(0, 0);
  };

  const handleBackFromQuote = () => {
    setShowQuotePage(false);
    if (selectedProduct) {
      setShowProductDetail(true);
    } else {
      setSelectedProduct(null);
    }
    window.scrollTo(0, 0);
  };

  // Show Request Quote page
  if (showQuotePage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Navbar />
        <RequestQuotePage 
          product={selectedProduct}
          onBack={handleBackFromQuote}
        />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  // Show product detail page
  if (showProductDetail && selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Navbar />
        <ProductDetailPage 
          product={selectedProduct} 
          onBack={handleBackToProducts}
          onRequestQuote={() => handleRequestQuote(selectedProduct)}
        />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  // Show main page
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <HeroSection />
      <ProductsSection onProductClick={handleProductClick} />
       <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;