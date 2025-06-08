
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'Empowering Businesses Through Innovation',
        mission: 'Our Mission',
        missionText: 'Delivering cutting-edge software solutions that streamline operations and enhance customer experiences across the Middle East and beyond.',
        vision: 'Our Vision',
        visionText: 'A future where AI-driven innovation empowers organizations globally to achieve unprecedented growth and efficiency.'
      },
      timeline: {
        title: 'Our Journey',
        milestones: [
          {
            year: '2020',
            title: 'Company Founded',
            description: 'Established in Dubai with a vision to transform businesses through AI'
          },
          {
            year: '2021',
            title: 'First AI Platform',
            description: 'Launched our first intelligent chatbot platform for MENA market'
          },
          {
            year: '2022',
            title: 'Regional Expansion',
            description: 'Expanded services across UAE, Saudi Arabia, and Qatar'
          },
          {
            year: '2023',
            title: 'Advanced Analytics',
            description: 'Introduced predictive analytics and automation solutions'
          },
          {
            year: '2024',
            title: 'Market Leadership',
            description: 'Recognized as a leading AI solutions provider in the region'
          }
        ]
      },
      innovation: {
        title: 'Dubai Innovation Hub',
        description: 'Based in the heart of Dubai Internet City, we leverage the emirate\'s strategic position as a global technology hub. Our location provides us unique access to international markets while staying connected to local business needs and cultural nuances.'
      }
    },
    ar: {
      hero: {
        title: 'تمكين الشركات من خلال الابتكار',
        mission: 'مهمتنا',
        missionText: 'تقديم حلول برمجية متطورة تبسط العمليات وتعزز تجارب العملاء في جميع أنحاء الشرق الأوسط وخارجه.',
        vision: 'رؤيتنا',
        visionText: 'مستقبل حيث يمكن للابتكار المدعوم بالذكاء الاصطناعي أن يمكن المنظمات عالمياً من تحقيق نمو وكفاءة غير مسبوقين.'
      },
      timeline: {
        title: 'رحلتنا',
        milestones: [
          {
            year: '2020',
            title: 'تأسيس الشركة',
            description: 'تأسست في دبي برؤية لتحويل الشركات من خلال الذكاء الاصطناعي'
          },
          {
            year: '2021',
            title: 'أول منصة ذكاء اصطناعي',
            description: 'أطلقنا أول منصة روبوت محادثة ذكية لسوق الشرق الأوسط وشمال أفريقيا'
          },
          {
            year: '2022',
            title: 'التوسع الإقليمي',
            description: 'وسعنا خدماتنا عبر الإمارات والسعودية وقطر'
          },
          {
            year: '2023',
            title: 'التحليلات المتقدمة',
            description: 'قدمنا حلول التحليلات التنبؤية والأتمتة'
          },
          {
            year: '2024',
            title: 'الريادة في السوق',
            description: 'تم الاعتراف بنا كمقدم رائد لحلول الذكاء الاصطناعي في المنطقة'
          }
        ]
      },
      innovation: {
        title: 'مركز دبي للابتكار',
        description: 'مقرنا في قلب مدينة دبي للإنترنت، نستفيد من الموقع الاستراتيجي للإمارة كمركز تكنولوجي عالمي. يوفر لنا موقعنا وصولاً فريداً إلى الأسواق الدولية مع البقاء على اتصال باحتياجات الأعمال المحلية والفروق الثقافية.'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Pulse Robot Style */}
      <section className="robot-section bg-gradient-to-br from-robot-light to-white">
        <div className="robot-container text-center">
          <h1 className="robot-text-large mb-8 animate-fade-in">
            <span className="text-gradient">{t.hero.title}</span>
          </h1>
          
          <div className="robot-grid mt-16">
            <div className="md:col-span-1">
              <div className="robot-card p-8 animate-stagger-1 animate-pulse-glow">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="robot-text-medium mb-4 text-primary">{t.hero.mission}</h3>
                <p className="robot-text-body">{t.hero.missionText}</p>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="robot-card p-8 animate-stagger-2 animate-pulse-glow">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h3 className="robot-text-medium mb-4 text-secondary">{t.hero.vision}</h3>
                <p className="robot-text-body">{t.hero.visionText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Enhanced Pulse Robot Style */}
      <section className="robot-section bg-white">
        <div className="robot-container">
          <h2 className="robot-text-large text-center mb-16 animate-fade-in text-secondary">
            {t.timeline.title}
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            
            {t.timeline.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-stagger-${index + 1}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="robot-card p-6 border-l-4 border-primary">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary">{milestone.title}</h3>
                    <p className="robot-text-body">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-xl animate-pulse-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Innovation - Pulse Robot Style */}
      <section className="robot-section bg-gradient-to-br from-secondary/10 to-white">
        <div className="robot-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="robot-text-large mb-6 text-secondary">
                {t.innovation.title}
              </h2>
              <p className="robot-text-body mb-8">
                {t.innovation.description}
              </p>
              <button className="robot-button">
                {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
              </button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop"
                  alt="Dubai Innovation"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
