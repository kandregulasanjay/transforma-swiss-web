
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const StickyMobileCTA = () => {
  const { language } = useLanguage();

  const text = language === 'en' ? 'Contact Us' : 'اتصل بنا';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white border-t border-gray-200 p-4">
        <Link to="/contact" className="block w-full">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
            {text}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
