import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '/webp/footer-logo.webp';

const Footer = () => {
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      email: 'info@transforma.ae',
      phone: '+971 4 123 4567',
      address: 'Dubai Internet City, Dubai, UAE',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: '© 2025 Transforma Technologies. All rights reserved.',
      toggleLang: 'العربية'
    },
    ar: {
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات الاتصال',
      email: 'info@transforma.ae',
      phone: '+971 4 123 4567',
      address: 'مدينة دبي للإنترنت، دبي، الإمارات العربية المتحدة',
      legal: 'قانوني',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      rights: '© 2024 تكنولوجيا ترانسفورما. جميع الحقوق محفوظة.',
      toggleLang: 'English'
    }
  };

  const t = translations[language];

  const quickLinks = [
    { href: '/', label: language === 'en' ? 'Home' : 'الرئيسية' },
    { href: '/about', label: language === 'en' ? 'About Us' : 'معلومات عنا' },
    { href: '/services', label: language === 'en' ? 'Services' : 'الخدمات' },
    { href: '/contact', label: language === 'en' ? 'Contact' : 'اتصل بنا' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Transforma Logo"
                className="w-60 h-32 object-contain rounded-lg"
              />
            </Link>            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contactInfo}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t.email}</p>
              <p>{t.phone}</p>
              <p>{t.address}</p>
            </div>
          </div>

          {/* Social & Language */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {t.toggleLang}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.privacy}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
