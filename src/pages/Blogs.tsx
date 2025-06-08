
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Blogs = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Blogs & News',
      subtitle: 'Stay updated with the latest insights in AI and technology',
      readMore: 'Read More',
      sidebar: {
        recent: 'Recent Posts',
        tags: 'Tags',
        archive: 'Archive'
      },
      posts: [
        {
          title: 'The Future of AI in Middle East Business',
          excerpt: 'Exploring how artificial intelligence is transforming industries across the MENA region and what businesses need to know.',
          date: 'December 1, 2024',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
          tags: ['AI', 'Business', 'MENA']
        },
        {
          title: 'Building Multilingual Chatbots for Global Markets',
          excerpt: 'Best practices for developing chatbots that can communicate effectively across different languages and cultures.',
          date: 'November 28, 2024',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
          tags: ['Chatbots', 'Multilingual', 'Development']
        },
        {
          title: 'Predictive Analytics in Retail: A Dubai Case Study',
          excerpt: 'How a major Dubai retailer increased sales by 30% using our predictive analytics platform.',
          date: 'November 25, 2024',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
          tags: ['Analytics', 'Retail', 'Case Study']
        },
        {
          title: 'Ethics in AI: Building Responsible Solutions',
          excerpt: 'Our approach to developing AI systems that are fair, transparent, and beneficial for all stakeholders.',
          date: 'November 20, 2024',
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
          tags: ['Ethics', 'AI', 'Responsibility']
        },
        {
          title: 'Customer Experience Transformation with AI',
          excerpt: 'Real-world examples of how AI is revolutionizing customer service across various industries.',
          date: 'November 15, 2024',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
          tags: ['Customer Experience', 'AI', 'Innovation']
        },
        {
          title: 'The Rise of Conversational Commerce',
          excerpt: 'How chatbots are changing the way customers shop and interact with brands online.',
          date: 'November 10, 2024',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
          tags: ['Commerce', 'Chatbots', 'Trends']
        }
      ],
      tags: ['AI', 'Business', 'Chatbots', 'Analytics', 'Innovation', 'MENA', 'Technology'],
      recentPosts: [
        'AI Trends for 2025',
        'Implementing Chatbots Successfully',
        'Data Privacy in AI Systems'
      ]
    },
    ar: {
      title: 'المدونات والأخبار',
      subtitle: 'ابق على اطلاع بأحدث الرؤى في الذكاء الاصطناعي والتكنولوجيا',
      readMore: 'اقرأ المزيد',
      sidebar: {
        recent: 'المشاركات الحديثة',
        tags: 'العلامات',
        archive: 'الأرشيف'
      },
      posts: [
        {
          title: 'مستقبل الذكاء الاصطناعي في الأعمال في الشرق الأوسط',
          excerpt: 'استكشاف كيفية تحويل الذكاء الاصطناعي للصناعات عبر منطقة الشرق الأوسط وشمال أفريقيا وما تحتاج الشركات إلى معرفته.',
          date: '1 ديسمبر 2024',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
          tags: ['الذكاء الاصطناعي', 'الأعمال', 'الشرق الأوسط']
        },
        {
          title: 'بناء روبوتات محادثة متعددة اللغات للأسواق العالمية',
          excerpt: 'أفضل الممارسات لتطوير روبوتات المحادثة التي يمكنها التواصل بفعالية عبر اللغات والثقافات المختلفة.',
          date: '28 نوفمبر 2024',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
          tags: ['روبوتات المحادثة', 'متعدد اللغات', 'التطوير']
        },
        {
          title: 'التحليلات التنبؤية في التجارة: دراسة حالة دبي',
          excerpt: 'كيف زاد تاجر تجزئة رئيسي في دبي من المبيعات بنسبة 30% باستخدام منصة التحليلات التنبؤية لدينا.',
          date: '25 نوفمبر 2024',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
          tags: ['التحليلات', 'التجزئة', 'دراسة حالة']
        },
        {
          title: 'الأخلاقيات في الذكاء الاصطناعي: بناء حلول مسؤولة',
          excerpt: 'نهجنا في تطوير أنظمة الذكاء الاصطناعي العادلة والشفافة والمفيدة لجميع أصحاب المصلحة.',
          date: '20 نوفمبر 2024',
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
          tags: ['الأخلاقيات', 'الذكاء الاصطناعي', 'المسؤولية']
        },
        {
          title: 'تحويل تجربة العملاء بالذكاء الاصطناعي',
          excerpt: 'أمثلة من العالم الحقيقي لكيفية ثورة الذكاء الاصطناعي في خدمة العملاء عبر الصناعات المختلفة.',
          date: '15 نوفمبر 2024',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
          tags: ['تجربة العملاء', 'الذكاء الاصطناعي', 'الابتكار']
        },
        {
          title: 'صعود التجارة المحادثة',
          excerpt: 'كيف تغير روبوتات المحادثة طريقة تسوق العملاء وتفاعلهم مع العلامات التجارية عبر الإنترنت.',
          date: '10 نوفمبر 2024',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
          tags: ['التجارة', 'روبوتات المحادثة', 'الاتجاهات']
        }
      ],
      tags: ['الذكاء الاصطناعي', 'الأعمال', 'روبوتات المحادثة', 'التحليلات', 'الابتكار', 'الشرق الأوسط', 'التكنولوجيا'],
      recentPosts: [
        'اتجاهات الذكاء الاصطناعي لعام 2025',
        'تنفيذ روبوتات المحادثة بنجاح',
        'خصوصية البيانات في أنظمة الذكاء الاصطناعي'
      ]
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

      {/* Blog Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.posts.map((post, index) => (
                  <Card key={index} className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-stagger-${(index % 3) + 1}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          {t.readMore} →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">→</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <Card className="p-6 animate-slide-in-right">
                <CardContent>
                  <h3 className="text-lg font-bold mb-4">{t.sidebar.recent}</h3>
                  <ul className="space-y-3">
                    {t.recentPosts.map((post, index) => (
                      <li key={index}>
                        <Button variant="link" className="p-0 h-auto text-left text-gray-600 hover:text-primary">
                          {post}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="p-6 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <CardContent>
                  <h3 className="text-lg font-bold mb-4">{t.sidebar.tags}</h3>
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-primary hover:text-white"
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Archive */}
              <Card className="p-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <CardContent>
                  <h3 className="text-lg font-bold mb-4">{t.sidebar.archive}</h3>
                  <ul className="space-y-2">
                    <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary">December 2024</Button></li>
                    <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary">November 2024</Button></li>
                    <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary">October 2024</Button></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
