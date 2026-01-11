import React, { useState } from 'react';
import logo1 from '../images/ss7.png';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { 
      name: 'Home', 
      href: '#home' 
    },
    // { 
    //   name: 'Services', 
    //   href: '#services',
    //   dropdown: [
    //     { name: 'Import Services', href: '#import' },
    //     { name: 'Export Services', href: '#export' },
    //     { name: 'Customs Clearance', href: '#customs' },
    //     { name: 'Warehousing', href: '#warehouse' }
    //   ]
    // },
    { 
      name: 'About Us', 
      href: '#about',
      // dropdown: [
      //   { name: 'Company Profile', href: '#profile' },
      //   { name: 'Our Team', href: '#team' },
      //   { name: 'Why Choose Us', href: '#why-us' }
      // ]
    },
    { 
      name: 'Products', 
      href: '#products' 
    },
    { 
      name: 'Insights', 
      href: '#insights' 
    },
    { 
      name: 'Contact', 
      href: '#contact' 
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              <img
                src={logo1}
                alt="SKD International Logo"
                className="h-12 w-20 object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-gray-900">
                  Skylerc International
                </span>
                <span className="text-sm bg-gradient-to-r from-red-700 via-purple-600 to-red-600 bg-clip-text text-transparent font-semibold">
                  Pvt Limited
                </span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 ">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium text-sm uppercase tracking-wide group"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 "  />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg border-t-2 border-red-600 rounded-b-lg overflow-hidden">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="tel:+919845620961" 
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors border border-gray-300 rounded-md hover:border-red-600"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 9845620961</span>
            </a>
            <a 
              href="mailto:skylercinternals@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors rounded-md"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">info@skylercinternational.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-red-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-1 max-h-96 overflow-y-auto">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center justify-between text-gray-700 hover:text-red-600 hover:bg-red-50 py-3 px-3 rounded-md transition-colors font-medium"
                  onClick={() => {
                    if (!link.dropdown) {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === index ? null : index);
                      }}
                    />
                  )}
                </a>
                
                {/* Mobile Dropdown */}
                {link.dropdown && activeDropdown === index && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 py-2 px-3 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Contact Buttons */}
            <div className="pt-4 border-t space-y-2">
              <a 
                href="tel:+919983487" 
                className="flex items-center justify-center gap-2 w-full py-3 text-gray-700 border border-gray-300 rounded-md hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Us</span>
              </a>
              <a 
                href="mailto:suniff237yr981@group.com" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Email Us</span> 
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;