import React, { useState } from 'react';
import logo1 from '../images/ss7.png';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (onNavigate) {
      // From product detail / quote page
      onNavigate(href);
    } else {
      // Normal home page scroll
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <img src={logo1} alt="Logo" className="h-12 w-20 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900">
                Skylerc International
              </span>
              <span className="text-sm text-red-600 font-semibold">
                Pvt Limited
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ✅ CONTACT ICONS (UNCHANGED) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <a
              href="tel:+919845620961"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors border border-gray-300 rounded-md hover:border-red-600"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 9845620961</span>
            </a> */}

{/* <a
  href="tel:+919856433961"
  className="group flex items-center gap-3 px-5 py-2.5
             rounded-md
             bg-red-700 text-white
             shadow-md hover:shadow-lg
             hover:bg-red-800
             transition-all duration-300"
>
  <span className="flex h-9 w-9 items-center justify-center 
                   rounded-md bg-white/15">
    <Phone className="w-4 h-4 text-white" />
  </span>

  <span className="text-sm font-semibold tracking-wide">
    +91 9043470461
  </span>
</a> */}

<a
  href="tel:+919845620961"
  className="group flex items-center gap-2.5 px-4 py-2
             rounded
             bg-[#2563EB]
             hover:bg-[#1D4ED8]
             text-white
             shadow-md hover:shadow-lg
             transition-all duration-200"
>
  <span className="flex h-8 w-8 items-center justify-center rounded bg-white/20">
    <Phone className="w-4 h-4 text-white" />
  </span>

  <span className="text-xs font-semibold tracking-wide">
    +91 9845620961
  </span>
</a>

<a
  href="mailto:info@skylercinternational.com"
  className="group flex items-center gap-2.5 px-4 py-2
             rounded
             bg-red-600 text-white
             hover:bg-red-700
             shadow-sm hover:shadow-md
             transition-all duration-200"
>
  <span className="flex h-8 w-8 items-center justify-center rounded bg-white/20">
    <Mail className="w-4 h-4 text-white" />
  </span>

  <span className="text-xs font-semibold tracking-wide">
    info@skylercinternational.com
  </span>
</a>






            {/* <a
              href="mailto:info@skylercinternational.com"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors rounded-md"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">
                info@skylercinternational.com
              </span>
            </a> */}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-red-600"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 px-3 text-gray-700 hover:bg-red-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
