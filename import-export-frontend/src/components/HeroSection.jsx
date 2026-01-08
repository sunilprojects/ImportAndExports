import React, { useState, useEffect } from 'react';
import image1 from '../images/moringa.jpg';
import image2 from '../images/onion.jpg';
import image3 from '../images/tomato.jpg';
import image4 from '../images/beetroot.jpg';
import image5 from '../images/caroot.png';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the slider
  const images = [
    {
      url: image1,
      alt: "premium moringa powder"
    },
    {
      url: image2,
      alt: "premium onion powder"
    },
    {
      url: image3,
      alt: "preminum tomato powder"
    },
    {
      url: image4,
      alt: "premium  beetroot powder"
    },
    {
     url: image5,
      alt: "premium caroot powder"
    }
  ];

  // Auto-slide effect - changes image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white/55">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner in <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Global Exports
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Skylerc International Pvt Ltd, a professional exporter of moringa powder and dehydrated vegetable powders, delivering consistent quality through controlled sourcing, hygienic processing, and export-compliant packaging for international buyers.
            </p>

            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
              Explore Our Products
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl shadow-2xl overflow-hidden group">
              {/* Images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    className="w-full h-full object-cover"
                    alt={image.alt}
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentSlide + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;