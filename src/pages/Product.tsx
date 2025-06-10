
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Product = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'AI-Powered Chatbot Platform',
        subtitle: 'Personalized, integrated, and intelligent chatbots for support, sales, and retention.',
        cta: 'Schedule a Demo'
      },
      features: {
        title: 'Platform Features',
        list: [
          {
            title: 'Multichannel Support',
            description: 'Deploy across web, mobile, social media, and messaging platforms seamlessly.'
          },
          {
            title: 'CRM/ERP Integration',
            description: 'Connect with your existing business systems for unified customer data.'
          },
          {
            title: 'Multilingual NLP',
            description: 'Support for Arabic, English, and 50+ languages with cultural context.'
          },
          {
            title: 'Analytics Dashboard',
            description: 'Real-time insights into customer interactions and performance metrics.'
          }
        ]
      },
      useCases: {
        title: 'Use Cases',
        tabs: [
          {
            id: 'support',
            label: 'Customer Support',
            title: '24/7 Intelligent Support',
            content: 'Automate routine inquiries, escalate complex issues to human agents, and maintain consistent service quality around the clock. Our AI understands context and sentiment to provide empathetic responses.',
            benefits: [
              'Reduce response time by 80%',
              'Handle 70% of inquiries automatically',
              'Improve customer satisfaction scores',
              'Lower operational costs'
            ]
          },
          {
            id: 'sales',
            label: 'Sales Assistant',
            title: 'AI Sales Acceleration',
            content: 'Guide prospects through the sales funnel with personalized recommendations, product information, and seamless handoffs to sales teams when qualified leads are identified.',
            benefits: [
              'Increase lead conversion by 40%',
              'Qualify prospects automatically',
              'Provide instant product information',
              'Schedule appointments seamlessly'
            ]
          },
          {
            id: 'retention',
            label: 'Customer Retention',
            title: 'Proactive Engagement',
            content: 'Identify at-risk customers, send personalized retention offers, and provide proactive support to enhance customer lifetime value and reduce churn.',
            benefits: [
              'Reduce churn rate by 25%',
              'Increase customer lifetime value',
              'Automate retention campaigns',
              'Predict customer behavior'
            ]
          }
        ]
      },
      cta: {
        title: 'Ready to transform customer engagement?',
        subtitle: 'Join leading companies in the Middle East who trust our AI platform.',
        button: 'Contact Our Team'
      }
    },
    ar: {
      hero: {
        title: 'منصة روبوت المحادثة المدعومة بالذكاء الاصطناعي',
        subtitle: 'روبوتات محادثة مخصصة ومتكاملة وذكية للدعم والمبيعات والاحتفاظ بالعملاء.',
        cta: 'جدولة عرض توضيحي'
      },
      features: {
        title: 'ميزات المنصة',
        list: [
          {
            title: 'الدعم متعدد القنوات',
            description: 'انشر عبر الويب والهاتف المحمول ووسائل التواصل الاجتماعي ومنصات المراسلة بسلاسة.'
          },
          {
            title: 'تكامل CRM/ERP',
            description: 'اتصل بأنظمة عملك الحالية للحصول على بيانات عملاء موحدة.'
          },
          {
            title: 'معالجة اللغة الطبيعية متعددة اللغات',
            description: 'دعم للعربية والإنجليزية و50+ لغة مع السياق الثقافي.'
          },
          {
            title: 'لوحة معلومات التحليلات',
            description: 'رؤى في الوقت الفعلي حول تفاعلات العملاء ومقاييس الأداء.'
          }
        ]
      },
      useCases: {
        title: 'حالات الاستخدام',
        tabs: [
          {
            id: 'support',
            label: 'دعم العملاء',
            title: 'دعم ذكي على مدار الساعة',
            content: 'أتمتة الاستفسارات الروتينية، وتصعيد القضايا المعقدة إلى الوكلاء البشريين، والحفاظ على جودة الخدمة المتسقة على مدار الساعة. يفهم الذكاء الاصطناعي لدينا السياق والمشاعر لتقديم استجابات متعاطفة.',
            benefits: [
              'تقليل وقت الاستجابة بنسبة 80%',
              'التعامل مع 70% من الاستفسارات تلقائياً',
              'تحسين درجات رضا العملاء',
              'خفض التكاليف التشغيلية'
            ]
          },
          {
            id: 'sales',
            label: 'مساعد المبيعات',
            title: 'تسريع المبيعات بالذكاء الاصطناعي',
            content: 'توجيه العملاء المحتملين خلال قمع المبيعات مع توصيات مخصصة ومعلومات المنتج والتسليم السلس لفرق المبيعات عند تحديد العملاء المؤهلين.',
            benefits: [
              'زيادة تحويل العملاء المحتملين بنسبة 40%',
              'تأهيل العملاء المحتملين تلقائياً',
              'توفير معلومات المنتج الفورية',
              'جدولة المواعيد بسلاسة'
            ]
          },
          {
            id: 'retention',
            label: 'الاحتفاظ بالعملاء',
            title: 'المشاركة الاستباقية',
            content: 'تحديد العملاء المعرضين للخطر، وإرسال عروض احتفاظ مخصصة، وتقديم دعم استباقي لتعزيز قيمة العميل مدى الحياة وتقليل معدل الاستنزاف.',
            benefits: [
              'تقليل معدل الاستنزاف بنسبة 25%',
              'زيادة قيمة العميل مدى الحياة',
              'أتمتة حملات الاحتفاظ',
              'التنبؤ بسلوك العملاء'
            ]
          }
        ]
      },
      cta: {
        title: 'هل أنت مستعد لتحويل مشاركة العملاء؟',
        subtitle: 'انضم إلى الشركات الرائدة في الشرق الأوسط التي تثق في منصة الذكاء الاصطناعي لدينا.',
        button: 'اتصل بفريقنا'
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
            <span className="text-gradient">{t.hero.title}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-stagger-1">
            {t.hero.subtitle}
          </p>
          <Link to="/contact">
            <Button size="lg" className="animate-stagger-2 bg-primary hover:bg-primary/90 text-white">
              {t.hero.cta}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.list.map((feature, index) => (
              <Card key={index} className={`p-6 text-center hover:shadow-xl transition-all duration-300 animate-stagger-${index + 1}`}>
                <CardContent>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-primary rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
            {t.useCases.title}
          </h2>
          
          <Tabs defaultValue="support" className="animate-stagger-1">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {t.useCases.tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="text-xs">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {t.useCases.tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <Card className="p-8">
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {tab.content}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Benefits:</h4>
                        <ul className="space-y-3">
                          {tab.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            {t.cta.title}
          </h2>
          <p className="text-xl mb-8 animate-stagger-1 opacity-90">
            {t.cta.subtitle}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="animate-stagger-2 bg-white text-primary hover:bg-gray-100"
            >
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Product;
