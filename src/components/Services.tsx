import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  FileCheck, 
  Shield, 
  Globe2, 
  Package, 
  Train, 
  Building, 
  Warehouse, 
  FileText,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "Международные перевозки грузов",
      description: "Перевозки с использованием книжки МДП (TIR), что ускоряет прохождение границ и снижает риски задержек.",
      features: ["Полное таможенное обеспечение грузов", "Организация мультимодальных перевозок"]
    },
    {
      icon: FileCheck,
      title: "Таможенное оформление и сопровождение",
      description: "Полное таможенное обеспечение грузов, включая оформление и сопровождение всех документов.",
      features: ["ВЭД-консалтинг", "Классификация товаров", "Сертификаты соответствия"]
    },
    {
      icon: Shield,
      title: "Страхование грузов",
      description: "Страхование грузов и CMR-страхование грузов для полной защиты ваших активов.",
      features: ["Полное покрытие рисков", "Быстрая обработка претензий"]
    },
    {
      icon: Globe2,
      title: "Трансграничная логистика",
      description: "Сотрудничество с проверенными международными партнерами и индивидуальные логистические решения.",
      features: ["Оптимизация маршрутов", "Контроль на всех этапах"]
    }
  ];

  const additionalServices = [
    {
      icon: Package,
      title: "Организация перевозок «под ключ»"
    },
    {
      icon: Truck,
      title: "Автомобильная доставка по территории Китая"
    },
    {
      icon: Train,
      title: "Железнодорожная доставка по территории Китая"
    },
    {
      icon: Building,
      title: "Брокерские услуги на территории Китая"
    },
    {
      icon: Warehouse,
      title: "Складские услуги и хранение грузов в Китае"
    },
    {
      icon: FileText,
      title: "Визовая поддержка для перевозчиков"
    }
  ];

  const trustStats = [
    { number: "100%", label: "легальность" },
    { number: "13+", label: "лет опыта" },
    { number: "24/7", label: "поддержка" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Комплексные логистические решения
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Полный спектр услуг международной логистики: от забора груза до доставки получателю
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Дополнительные услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <service.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                      <p className="text-sm font-medium">{service.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-lg p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              Доверие подтверждено результатами
            </h3>
            <p className="text-primary-foreground/80">
              Наша надежность подтверждена многолетним опытом и качеством услуг
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
