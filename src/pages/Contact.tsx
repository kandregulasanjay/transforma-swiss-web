import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const translations = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team to discuss your AI transformation journey',
      form: {
        title: 'Send us a Message',
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone (Optional)',
        message: 'Message',
        submit: 'Send Message',
        nameRequired: 'Full name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        messageRequired: 'Message is required',
        success: 'Thank you! We\'ll get back to you within 24 hours.',
        error: 'There was an error sending your message. Please try again.'
      },
      office: {
        title: 'Office',
        address: 'Dubai Internet City9700 N 91st Street., suite A-115,Scottsdale AZ 85258',
        city: 'Dubai, United Arab Emirates',
        email: 'it@transformatechnologies.com',
        phone: 'T. 123-456-7890',
        hours: 'Sunday - Friday: 9:00 AM - 6:00 PM'
      }
    },
    ar: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع فريقنا لمناقشة رحلة التحول بالذكاء الاصطناعي',
      form: {
        title: 'أرسل لنا رسالة',
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف (اختياري)',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
        nameRequired: 'الاسم الكامل مطلوب',
        emailRequired: 'البريد الإلكتروني مطلوب',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
        messageRequired: 'الرسالة مطلوبة',
        success: 'شكراً لك! سنعود إليك خلال 24 ساعة.',
        error: 'حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.'
      },
      office: {
        title: 'مكتب دبي',
        address: 'مدينة دبي للإنترنت',
        city: 'دبي، الإمارات العربية المتحدة',
        email: 'info@transforma.ae',
        phone: '+971 4 123 4567',
        hours: 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً'
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const errors = [];
    if (!formData.fullName.trim()) errors.push(t.form.nameRequired);
    if (!formData.email.trim()) errors.push(t.form.emailRequired);
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push(t.form.emailInvalid);
    if (!formData.message.trim()) errors.push(t.form.messageRequired);

    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors[0],
        variant: "destructive",
      });
      return;
    }

    // EmailJS integration
    emailjs
      .send(
        "service_p9vmsev", 
        "template_4d9dmsa",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "KG7Kt8pWmq3rHmzUw"
      )
      .then(
        () => {
          toast({
            title: "Success",
            description: t.form.success,
          });
          setFormData({ fullName: '', email: '', phone: '', message: '' });
        },
        () => {
          toast({
            title: "Error",
            description: t.form.error,
            variant: "destructive",
          });
        }
      );
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

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-8">{t.form.title}</h2>
              
              <Card className="p-8">
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">{t.form.fullName} *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">{t.form.email} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">{t.form.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">{t.form.message} *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="mt-1"
                        placeholder={language === 'en' 
                          ? "Tell us about your project and how we can help..."
                          : "أخبرنا عن مشروعك وكيف يمكننا المساعدة..."
                        }
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                      {t.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info & Map */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-8">{t.office.title}</h2>
              
              <Card className="p-8 mb-8">
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-gray-600">
                        {t.office.address}<br />
                        {t.office.city}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Contact</h3>
                      <p className="text-gray-600">
                        Email: {t.office.email}<br />
                        Phone: {t.office.phone}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-gray-600">{t.office.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.073089!2d55.159515!3d25.094162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b3a8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sDubai%20Internet%20City!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubai Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
