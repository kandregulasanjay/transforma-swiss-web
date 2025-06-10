import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Bot, BarChart3, Zap, Brain, MessageSquare, TrendingUp } from 'lucide-react';
import bg from '/webp/Hero_section-bg.webp';

const Home = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'Transforming Industries with AI Innovation',
        subtitle: 'We craft AI-powered software solutions that solve real business problems and accelerate digital transformation.',
        cta: 'Explore Our Platform'
      },
      whatWeDo: {
        title: 'Our Services',
        services: [
          {
            title: 'Agentic Chatbot',
            description: '24/7 intelligent support with human-like conversation flows that understand context and intent.',
            icon: Bot,
            link: 'Learn More'
          },
          {
            title: 'Predictive Analytics',
            description: 'Turn your data into actionable insights with advanced machine learning algorithms.',
            icon: BarChart3,
            link: 'Learn More'
          },
          {
            title: 'Process Automation',
            description: 'Reduce manual overhead through intelligent workflows and automated decision-making.',
            icon: Zap,
            link: 'Learn More'
          }
        ]
      },
      aiPowered: {
        title: 'AI-Powered Solutions for Modern Business',
        subtitle: 'Leverage cutting-edge artificial intelligence to streamline operations, enhance customer experiences, and drive growth.',
        features: [
          {
            title: 'Natural Language Processing',
            description: 'Advanced NLP capabilities for multilingual communication and understanding.',
            icon: MessageSquare
          },
          {
            title: 'Machine Learning Models',
            description: 'Custom ML models trained on your data for precise predictions and insights.',
            icon: Brain
          },
          {
            title: 'Real-time Analytics',
            description: 'Monitor performance and make data-driven decisions with real-time dashboards.',
            icon: TrendingUp
          }
        ]
      },
      whyUs: {
        title: 'Why Choose Transforma?',
        description: 'We combine customer-centric design and AI innovation to deliver measurable growth. Our solutions are built for the Middle East market, understanding local nuances and business requirements.',
        benefits: [
          'Proven ROI with 40% average efficiency improvement',
          'Seamless integration with existing systems',
          'Multilingual support including Arabic',
          '24/7 technical support and maintenance'
        ]
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
      },
      cta: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Join leading companies who trust Transforma Technologies for their AI transformation journey.',
        button: 'Get Started Today'
      }
    },
    ar: {
      hero: {
        title: 'تحويل الصناعات بالابتكار في الذكاء الاصطناعي',
        subtitle: 'نحن نصنع حلول برمجية مدعومة بالذكاء الاصطناعي لحل مشاكل الأعمال الحقيقية وتسريع التحول الرقمي.',
        cta: 'استكشف منصتنا'
      },
      whatWeDo: {
        title: 'خدماتنا',
        services: [
          {
            title: 'روبوت المحادثة الذكي',
            description: 'دعم ذكي على مدار الساعة مع تدفقات محادثة تشبه البشر تفهم السياق والنية.',
            icon: Bot,
            link: 'اعرف المزيد'
          },
          {
            title: 'التحليلات التنبؤية',
            description: 'حول بياناتك إلى رؤى قابلة للتنفيذ باستخدام خوارزميات التعلم الآلي المتقدمة.',
            icon: BarChart3,
            link: 'اعرف المزيد'
          },
          {
            title: 'أتمتة العمليات',
            description: 'قلل الأعباء اليدوية من خلال سير العمل الذكي واتخاذ القرارات الآلية.',
            icon: Zap,
            link: 'اعرف المزيد'
          }
        ]
      },
      aiPowered: {
        title: 'حلول مدعومة بالذكاء الاصطناعي للأعمال الحديثة',
        subtitle: 'استفد من الذكاء الاصطناعي المتطور لتبسيط العمليات وتعزيز تجارب العملاء ودفع النمو.',
        features: [
          {
            title: 'معالجة اللغة الطبيعية',
            description: 'قدرات متقدمة في معالجة اللغة الطبيعية للتواصل والفهم متعدد اللغات.',
            icon: MessageSquare
          },
          {
            title: 'نماذج التعلم الآلي',
            description: 'نماذج تعلم آلي مخصصة مدربة على بياناتك للحصول على تنبؤات ورؤى دقيقة.',
            icon: Brain
          },
          {
            title: 'التحليلات الفورية',
            description: 'راقب الأداء واتخذ قرارات مبنية على البيانات مع لوحات المعلومات الفورية.',
            icon: TrendingUp
          }
        ]
      },
      whyUs: {
        title: 'لماذا تختار ترانسفورما؟',
        description: 'نحن نجمع بين التصميم المتمحور حول العميل والابتكار في الذكاء الاصطناعي لتحقيق نمو قابل للقياس. حلولنا مصممة لسوق الشرق الأوسط، مع فهم الفروق الدقيقة المحلية ومتطلبات الأعمال.',
        benefits: [
          'عائد استثمار مثبت مع تحسن كفاءة بنسبة 40% في المتوسط',
          'تكامل سلس مع الأنظمة الحالية',
          'دعم متعدد اللغات بما في ذلك العربية',
          'دعم تقني ومتابعة على مدار الساعة'
        ]
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
      },
      cta: {
        title: 'هل أنت مستعد لتحويل عملك؟',
        subtitle: 'انضم إلى الشركات الرائدة التي تثق في تكنولوجيا ترانسفورما لرحلة التحول بالذكاء الاصطناعي.',
        button: 'ابدأ اليوم'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-white text-lg sm:text-2xl mb-8 max-w-4xl animate-stagger-1 text-center">
            {t.hero.subtitle}
          </p>
          <Link to="/product">
            <Button size="lg" className="rounded-full bg-[#3DC1B1] text-white px-8 py-3 text-lg font-semibold shadow hover:bg-[#34a99b] transition animate-stagger-2">
              {t.hero.cta}
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="robot-section bg-white">
        <div className="robot-container">
          <h2 className="robot-text-large text-center mb-16 animate-fade-in text-secondary">
            {t.whatWeDo.title}
          </h2>
          <div className="robot-grid">
            {t.whatWeDo.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className={`robot-card animate-stagger-${index + 1}`}>
                  <CardContent className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="robot-text-medium mb-4 text-secondary">{service.title}</h3>
                    <p className="robot-text-body mb-6">{service.description}</p>
                    <Link to="/services" className="text-primary hover:text-primary/80 font-medium">
                      {service.link} →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI-Powered Solutions */}
      <section className="robot-section bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="robot-container">
          <div className="text-center mb-16">
            <h2 className="robot-text-large mb-6 animate-fade-in text-secondary">
              {t.aiPowered.title}
            </h2>
            <p className="robot-text-body max-w-3xl mx-auto animate-stagger-1">
              {t.aiPowered.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
                alt="AI Robot Technology"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 animate-slide-in-right">
              {t.aiPowered.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
                      <p className="robot-text-body">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Transforma */}
      <section className="robot-section bg-white">
        <div className="robot-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="robot-text-large mb-6 text-secondary">
                {t.whyUs.title}
              </h2>
              <p className="robot-text-body mb-8">
                {t.whyUs.description}
              </p>
              <ul className="space-y-4">
                {t.whyUs.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="robot-text-body">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="AI Analytics Dashboard"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="robot-section bg-gradient-to-br from-primary/5 to-transparent">
        <div className="robot-container">
          <h2 className="robot-text-large text-center mb-16 animate-fade-in text-secondary">
            {t.testimonials.title}
          </h2>
          <div className="robot-grid">
            {t.testimonials.quotes.map((quote, index) => (
              <Card key={index} className={`robot-card animate-stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <p className="robot-text-body mb-6 italic">"{quote.text}"</p>
                  <p className="font-semibold text-primary">{quote.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="robot-section bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="robot-container text-center">
          <h2 className="robot-text-large mb-6 animate-fade-in">
            {t.cta.title}
          </h2>
          <p className="robot-text-body mb-8 animate-stagger-1 opacity-90">
            {t.cta.subtitle}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="animate-stagger-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
