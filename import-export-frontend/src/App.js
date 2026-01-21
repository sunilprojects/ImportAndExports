import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import ProductsPreviewSection from './components/ProductsPreviewSection';
import WhyChooseSection from './components/WhyChooseSection';
// import QualityComplianceSection from './components/QualityComplianceSection';
import MarketsServeSection from './components/MarketsServeSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ProductDetailPage from './components/ProductDetailPage';
import RequestQuotePage from './components/RequestQuotePage';
// import BenefitsSection from './components/BenefitsSection';
// import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import NewsSection from './components/NewsSection';

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

  const handleNavigation = (href) => {
    // Reset all states to go back to main page
    setShowProductDetail(false);
    setShowQuotePage(false);
    setSelectedProduct(null);
    
    // Scroll to the section after a brief delay
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Show Request Quote page
  if (showQuotePage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Navbar onNavigate={handleNavigation} />
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
        <Navbar onNavigate={handleNavigation} />
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
      {/* <ProductsPreviewSection onProductClick={handleProductClick} /> */}
      <ProductsSection onProductClick={handleProductClick} />
      <WhyChooseSection />
      {/* <QualityComplianceSection /> */}
      <MarketsServeSection />
      <AboutSection />
      
      {/* <BenefitsSection /> */}
      {/* <TestimonialsSection /> */}
       <NewsSection/>
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;