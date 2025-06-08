
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../hooks/use-toast';

const Support = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const translations = {
    en: {
      title: 'Support & FAQ',
      subtitle: 'Get help and find answers to commonly asked questions',
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            question: 'How quickly can we implement your chatbot solution?',
            answer: 'Implementation typically takes 2-4 weeks depending on complexity. We provide a detailed timeline during our initial consultation and work closely with your team to ensure smooth deployment.'
          },
          {
            question: 'Do your chatbots support Arabic language?',
            answer: 'Yes, our chatbots have native Arabic language support with cultural context understanding. We support both Modern Standard Arabic and regional dialects commonly used in the GCC.'
          },
          {
            question: 'Can the chatbot integrate with our existing CRM system?',
            answer: 'Absolutely. We provide seamless integration with popular CRM systems including Salesforce, HubSpot, Microsoft Dynamics, and custom solutions. Our team handles the technical integration process.'
          },
          {
            question: 'What kind of analytics and reporting do you provide?',
            answer: 'Our platform includes comprehensive analytics covering conversation volumes, user satisfaction scores, response times, conversion rates, and detailed conversation transcripts with sentiment analysis.'
          },
          {
            question: 'Is there ongoing support after implementation?',
            answer: 'Yes, we provide 24/7 technical support, regular performance reviews, and continuous optimization. Our support includes monitoring, updates, and training for your team.'
          },
          {
            question: 'How do you ensure data privacy and security?',
            answer: 'We follow international security standards including GDPR compliance, end-to-end encryption, secure data storage in UAE-based servers, and regular security audits.'
          }
        ]
      },
      contact: {
        title: 'Need More Help?',
        subtitle: 'Contact our support team directly',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send Message',
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email',
          messageRequired: 'Message is required',
          success: 'Thank you! Your message has been sent successfully.',
          error: 'There was an error sending your message. Please try again.'
        }
      }
    },
    ar: {
      title: 'الدعم والأسئلة الشائعة',
      subtitle: 'احصل على المساعدة وابحث عن إجابات للأسئلة الشائعة',
      faq: {
        title: 'الأسئلة الشائعة',
        questions: [
          {
            question: 'كم من الوقت يستغرق تنفيذ حل روبوت المحادثة الخاص بكم؟',
            answer: 'يستغرق التنفيذ عادة 2-4 أسابيع حسب التعقيد. نقدم جدولاً زمنياً مفصلاً أثناء استشارتنا الأولى ونعمل بشكل وثيق مع فريقك لضمان النشر السلس.'
          },
          {
            question: 'هل تدعم روبوتات المحادثة الخاصة بكم اللغة العربية؟',
            answer: 'نعم، روبوتات المحادثة لدينا تدعم اللغة العربية بشكل أصلي مع فهم السياق الثقافي. ندعم كلاً من العربية الفصحى الحديثة واللهجات الإقليمية المستخدمة بشكل شائع في دول مجلس التعاون الخليجي.'
          },
          {
            question: 'هل يمكن لروبوت المحادثة التكامل مع نظام CRM الحالي لدينا؟',
            answer: 'بالطبع. نقدم تكاملاً سلساً مع أنظمة CRM الشائعة بما في ذلك Salesforce و HubSpot و Microsoft Dynamics والحلول المخصصة. يتولى فريقنا عملية التكامل التقني.'
          },
          {
            question: 'ما نوع التحليلات والتقارير التي تقدمونها؟',
            answer: 'تتضمن منصتنا تحليلات شاملة تغطي أحجام المحادثات ودرجات رضا المستخدمين وأوقات الاستجابة ومعدلات التحويل ونصوص المحادثات المفصلة مع تحليل المشاعر.'
          },
          {
            question: 'هل هناك دعم مستمر بعد التنفيذ؟',
            answer: 'نعم، نقدم دعماً تقنياً على مدار الساعة طوال أيام الأسبوع، ومراجعات أداء منتظمة، وتحسين مستمر. يشمل دعمنا المراقبة والتحديثات والتدريب لفريقك.'
          },
          {
            question: 'كيف تضمنون خصوصية البيانات والأمان؟',
            answer: 'نتبع المعايير الأمنية الدولية بما في ذلك امتثال GDPR والتشفير من طرف إلى طرف وتخزين البيانات الآمن في الخوادم الموجودة في الإمارات وعمليات التدقيق الأمني المنتظمة.'
          }
        ]
      },
      contact: {
        title: 'تحتاج مساعدة أكثر؟',
        subtitle: 'تواصل مع فريق الدعم مباشرة',
        form: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          submit: 'إرسال الرسالة',
          nameRequired: 'الاسم مطلوب',
          emailRequired: 'البريد الإلكتروني مطلوب',
          emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
          messageRequired: 'الرسالة مطلوبة',
          success: 'شكراً لك! تم إرسال رسالتك بنجاح.',
          error: 'حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.'
        }
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const errors = [];
    if (!formData.name.trim()) errors.push(t.contact.form.nameRequired);
    if (!formData.email.trim()) errors.push(t.contact.form.emailRequired);
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push(t.contact.form.emailInvalid);
    if (!formData.message.trim()) errors.push(t.contact.form.messageRequired);

    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors[0],
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Success",
      description: t.contact.form.success,
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
            {t.faq.title}
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4 animate-stagger-1">
            {t.faq.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 animate-stagger-1">
              {t.contact.subtitle}
            </p>
          </div>

          <Card className="p-8 animate-stagger-2">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t.contact.form.name} *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t.contact.form.email} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t.contact.form.message} *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  {t.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Support;
