import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const companyLinks = [
    { name: 'О компании', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'География', href: '#geography' },
    { name: 'Команда', href: '#team' }
  ];

  const serviceLinks = [
    { name: 'Автоперевозки TIR/CMR', href: '#services' },
    { name: 'Таможенное оформление', href: '#services' },
    { name: 'Складские решения', href: '#services' },
    { name: 'Shanghai Trailer', href: '#shanghai' }
  ];

  const legalLinks = [
    { name: 'Политика конфиденциальности', href: '#' },
    { name: 'Пользовательское соглашение', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Лицензии и сертификаты', href: '#awards' }
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/996772513017',
      icon: MessageCircle
    },
    {
      name: 'Telegram',
      href: 'https://t.me/+996772513017',
      icon: MessageCircle
    },
    {
      name: 'Email',
      href: 'mailto:mtk.dieseltechnic@mail.ru',
      icon: Mail
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Дизель Техник"
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Дизель Техник</h3>
                <p className="text-sm text-primary-foreground/80">Международная логистика</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Международная логистическая компания. Автоперевозки TIR/CMR, таможня, склады. 
              Китай ⇄ Россия ⇄ Европа ⇄ ЦА.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+996 772 513 017</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>mtk.dieseltechnic@mail.ru</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>г. Бишкек, Киевская 107</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Связь с нами</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start border-primary-foreground/20 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="w-4 h-4 mr-2" />
                  {social.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Дизель Техник. Все права защищены.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-primary-foreground/60">
              Лицензия на транспортную деятельность № XXXX-XXXX-XXXX | Сертификат TIR/CMR | Член АМАП
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

