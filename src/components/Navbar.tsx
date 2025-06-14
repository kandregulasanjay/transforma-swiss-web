import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import navbarLogo from '/webp/navbar_logo.webp'; 
import footerLogo from '/webp/footer-logo.webp'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const [navKey, setNavKey] = useState(0);

  useEffect(() => {
    setNavKey(prev => prev + 1); 
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      product: 'Product',
      blogs: 'Blogs/News',
      support: 'Support/FAQ',
      contact: 'Contact',
      toggleLang: 'العربية'
    },
    ar: {
      home: 'الرئيسية',
      about: 'معلومات عنا',
      services: 'الخدمات',
      product: 'المنتج',
      blogs: 'المدونات/الأخبار',
      support: 'الدعم/الأسئلة الشائعة',
      contact: 'اتصل بنا',
      toggleLang: 'English'
    }
  };

  const t = translations[language];

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/about', label: t.about },
    { href: '/services', label: t.services },
    { href: '/product', label: t.product },
    { href: '/blogs', label: t.blogs },
    { href: '/support', label: t.support },
    { href: '/contact', label: t.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const showTransparent = isHome && !scrolled;
  const logoSrc = showTransparent ? footerLogo : navbarLogo;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{ fontFamily: "'Cera Pro', 'CeraPro-Regular', sans-serif" }} // Add this line
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoSrc}
              alt="Transforma Logo"
              className="w-18 h-8 object-contain rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href + navKey} // Key changes on route change
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  showTransparent
                    ? 'text-white'
                    : location.pathname === link.href
                      ? 'text-primary'
                      : 'text-gray-700'
                } nav-animate`}
                style={{ animationDelay: `${0.1 + idx * 0.07}s` }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Custom Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex border border-primary rounded overflow-hidden h-8 w-20"
              aria-label="Toggle language"
            >
              <span
                className={`flex-1 flex items-center justify-center text-xs font-semibold transition-colors ${
                  language === 'en' ? 'bg-primary text-white' : 'bg-white text-primary'
                }`}
              >
                EN
              </span>
              <span
                className={`flex-1 flex items-center justify-center text-xs font-semibold transition-colors ${
                  language === 'ar' ? 'bg-primary text-white' : 'bg-white text-primary'
                }`}
              >
                عربي
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Custom Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex border border-primary rounded overflow-hidden h-8 w-20"
              aria-label="Toggle language"
            >
              <span
                className={`flex-1 flex items-center justify-center text-xs font-semibold transition-colors ${
                  language === 'en' ? 'bg-primary text-white' : 'bg-white text-primary'
                }`}
              >
                EN
              </span>
              <span
                className={`flex-1 flex items-center justify-center text-xs font-semibold transition-colors ${
                  language === 'ar' ? 'bg-primary text-white' : 'bg-white text-primary'
                }`}
              >
                عربي
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start block px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-primary hover:text-white"
                  key={link.href}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
