
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Services = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive AI solutions designed to transform your business operations',
      services: [
        {
          title: 'Agentic Chatbot Solutions',
          description: '24/7 intelligent customer support with human-like conversation flows that understand context, intent, and emotion.',
          features: [
            'Natural Language Processing',
            'Multi-channel Integration',
            'Real-time Learning',
            'Sentiment Analysis'
          ],
          cta: 'Learn More'
        },
        {
          title: 'Predictive Analytics',
          description: 'Turn your data into actionable insights with advanced machine learning algorithms and real-time analytics.',
          features: [
            'Data Mining & Processing',
            'Custom ML Models',
            'Real-time Dashboards',
            'Trend Forecasting'
          ],
          cta: 'Learn More'
        },
        {
          title: 'Business Process Automation',
          description: 'Reduce manual overhead through intelligent workflows and automated decision-making systems.',
          features: [
            'Workflow Optimization',
            'Document Processing',
            'Task Automation',
            'Integration Services'
          ],
          cta: 'Learn More'
        }
      ],
      contact: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Get in touch with our experts to discuss how AI can revolutionize your operations.',
        cta: 'Contact Our Team'
      }
    },
    ar: {
      title: 'خدماتنا',
      subtitle: 'حلول ذكاء اصطناعي شاملة مصممة لتحويل عمليات عملك',
      services: [
        {
          title: 'حلول روبوت المحادثة الذكي',
          description: 'دعم عملاء ذكي على مدار الساعة مع تدفقات محادثة تشبه البشر تفهم السياق والنية والعاطفة.',
          features: [
            'معالجة اللغة الطبيعية',
            'التكامل متعدد القنوات',
            'التعلم في الوقت الفعلي',
            'تحليل المشاعر'
          ],
          cta: 'اعرف المزيد'
        },
        {
          title: 'التحليلات التنبؤية',
          description: 'حول بياناتك إلى رؤى قابلة للتنفيذ باستخدام خوارزميات التعلم الآلي المتقدمة والتحليلات في الوقت الفعلي.',
          features: [
            'استخراج ومعالجة البيانات',
            'نماذج التعلم الآلي المخصصة',
            'لوحات المعلومات في الوقت الفعلي',
            'التنبؤ بالاتجاهات'
          ],
          cta: 'اعرف المزيد'
        },
        {
          title: 'أتمتة العمليات التجارية',
          description: 'قلل الأعباء اليدوية من خلال سير العمل الذكي وأنظمة اتخاذ القرارات الآلية.',
          features: [
            'تحسين سير العمل',
            'معالجة المستندات',
            'أتمتة المهام',
            'خدمات التكامل'
          ],
          cta: 'اعرف المزيد'
        }
      ],
      contact: {
        title: 'هل أنت مستعد لتحويل عملك؟',
        subtitle: 'تواصل مع خبرائنا لمناقشة كيف يمكن للذكاء الاصطناعي أن يحدث ثورة في عملياتك.',
        cta: 'اتصل بفريقنا'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">{t.title}</span>
          </h1>
          <p className="text-xl text-gray-600 animate-stagger-1">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-stagger-${index + 1}`}
              >
                <CardContent>
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all duration-300">
                      {service.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            {t.contact.title}
          </h2>
          <p className="text-xl mb-8 animate-stagger-1 opacity-90">
            {t.contact.subtitle}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="animate-stagger-2 bg-white text-primary hover:bg-gray-100"
            >
              {t.contact.cta}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
