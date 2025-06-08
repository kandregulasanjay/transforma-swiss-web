
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'Transforming Industries with AI Innovation',
        subtitle: 'We craft AI-powered software solutions that solve real business problems.',
        cta: 'Explore Our Platform'
      },
      whatWeDo: {
        title: 'What We Do',
        services: [
          {
            title: 'Agentic Chatbot',
            description: '24/7 intelligent support with human-like conversation flows that understand context and intent.',
            link: 'Learn More'
          },
          {
            title: 'Predictive Analytics',
            description: 'Turn your data into actionable insights with advanced machine learning algorithms.',
            link: 'Learn More'
          },
          {
            title: 'Process Automation',
            description: 'Reduce manual overhead through intelligent workflows and automated decision-making.',
            link: 'Learn More'
          }
        ]
      },
      whyUs: {
        title: 'Why Transforma?',
        description: 'We combine customer-centric design and AI innovation to deliver measurable growth. Our solutions are built for the Middle East market, understanding local nuances and business requirements.'
      },
      testimonials: {
        title: 'What Our Clients Say',
        quotes: [
          {
            text: 'Transforma Technologies transformed our customer service. Response times improved by 70% and customer satisfaction reached an all-time high.',
            author: 'Ahmed Al-Mansouri, CEO, Dubai Retail Group'
          },
          {
            text: 'Their predictive analytics solution helped us optimize inventory and reduce costs by 30%. Outstanding technical expertise.',
            author: 'Sarah Johnson, Operations Director, Emirates Logistics'
          }
        ]
      }
    },
    ar: {
      hero: {
        title: 'تحويل الصناعات بالابتكار في الذكاء الاصطناعي',
        subtitle: 'نحن نصنع حلول برمجية مدعومة بالذكاء الاصطناعي لحل مشاكل الأعمال الحقيقية.',
        cta: 'استكشف منصتنا'
      },
      whatWeDo: {
        title: 'ما نقوم به',
        services: [
          {
            title: 'روبوت المحادثة الذكي',
            description: 'دعم ذكي على مدار الساعة مع تدفقات محادثة تشبه البشر تفهم السياق والنية.',
            link: 'اعرف المزيد'
          },
          {
            title: 'التحليلات التنبؤية',
            description: 'حول بياناتك إلى رؤى قابلة للتنفيذ باستخدام خوارزميات التعلم الآلي المتقدمة.',
            link: 'اعرف المزيد'
          },
          {
            title: 'أتمتة العمليات',
            description: 'قلل الأعباء اليدوية من خلال سير العمل الذكي واتخاذ القرارات الآلية.',
            link: 'اعرف المزيد'
          }
        ]
      },
      whyUs: {
        title: 'لماذا ترانسفورما؟',
        description: 'نحن نجمع بين التصميم المتمحور حول العميل والابتكار في الذكاء الاصطناعي لتحقيق نمو قابل للقياس. حلولنا مصممة لسوق الشرق الأوسط، مع فهم الفروق الدقيقة المحلية ومتطلبات الأعمال.'
      },
      testimonials: {
        title: 'ما يقوله عملاؤنا',
        quotes: [
          {
            text: 'غيرت تكنولوجيا ترانسفورما خدمة العملاء لدينا. تحسنت أوقات الاستجابة بنسبة 70% ووصلت رضا العملاء إلى أعلى مستوياتها.',
            author: 'أحمد المنصوري، الرئيس التنفيذي، مجموعة دبي للتجزئة'
          },
          {
            text: 'ساعدنا حل التحليلات التنبؤية الخاص بهم على تحسين المخزون وتقليل التكاليف بنسبة 30%. خبرة تقنية متميزة.',
            author: 'سارة جونسون، مديرة العمليات، إيميريتس لوجيستيكس'
          }
        ]
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">{t.hero.title}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-stagger-1 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <Link to="/product">
            <Button size="lg" className="animate-stagger-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              {t.hero.cta}
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
            {t.whatWeDo.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whatWeDo.services.map((service, index) => (
              <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 animate-stagger-${index + 1}`}>
                <CardContent className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/services" className="text-primary hover:text-primary/80 font-medium">
                    {service.link} →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Transforma */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t.whyUs.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.whyUs.description}
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Dubai Innovation"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
            {t.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.testimonials.quotes.map((quote, index) => (
              <Card key={index} className={`p-8 animate-stagger-${index + 1}`}>
                <CardContent>
                  <p className="text-lg text-gray-600 mb-6 italic">"{quote.text}"</p>
                  <p className="font-semibold text-primary">{quote.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
