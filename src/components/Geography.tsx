import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Geography: React.FC = () => {
  const routes = [
    {
      title: "Китай → Россия",
      description: "Основной маршрут через Казахстан. Склады в Урумчи, Алашанькоу",
      icon: Truck
    },
    {
      title: "Китай → Кыргызстан",
      description: "Регулярный маршрут Бишкек – Урумчи с 2017 года. Терминалы в Бишкеке",
      icon: Clock
    },
    {
      title: "Китай → Казахстан",
      description: "Прямое сообщение с Казахстаном. Терминалы в Алматы",
      icon: Truck
    },
    {
      title: "Кыргызстан → Россия",
      description: "Прямое сообщение с Кыргызской Республикой. Терминалы в Бишкеке",
      icon: Truck
    },
    {
      title: "Казахстан → Россия",
      description: "Прямое сообщение с Казахстаном. Терминалы в Алматы",
      icon: Truck
    },
    {
      title: "Россия → Кыргызстан",
      description: "Прямое сообщение с Кыргызской Республикой. Терминалы в Бишкеке",
      icon: Truck
    },
    {
      title: "Россия → Европа",
      description: "TIR-маршруты через Беларусь, Польшу. Мультимодальные решения",
      icon: Truck
    },
    {
      title: "Россия",
      description: "Внутренние перевозки по территории России. Партнёрские склады в Новосибирске",
      icon: Truck
    }
  ];

  const terminals = [
    {
      city: "Урумчи, Китай",
      services: "Склад, консолидация, таможня",
      icon: MapPin
    },
    {
      city: "Алашанькоу, Китай",
      services: "Перевалка, хранение",
      icon: MapPin
    },
    {
      city: "Бишкек, Кыргызстан",
      services: "Логистический центр, склад",
      icon: MapPin
    },
    {
      city: "Алматы, Казахстан",
      services: "Партнёрский терминал",
      icon: MapPin
    },
    {
      city: "Новосибирск, Россия",
      services: "Партнёрский склад",
      icon: MapPin
    }
  ];


  return (
    <section id="geography" className="py-20 bg-background">
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
            Международная сеть маршрутов
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Прямые транспортные коридоры между четырьмя ключевыми экономическими регионами
          </p>
        </motion.div>


        {/* Routes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Наши маршруты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <route.icon className="w-5 h-5 text-secondary" />
                      <CardTitle className="text-sm font-semibold">
                        {route.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {route.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special China Route */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Особое внимание сотрудничеству с Китаем
                </h3>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  В 2017 году мы открыли регулярный маршрут Бишкек – Урумчи, который стал важным этапом 
                  в развитии компании. Этот маршрут позволил значительно ускорить доставку товаров, 
                  оптимизировать транспортные расходы и укрепить торгово-экономические связи между странами.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Terminals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Складские терминалы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {terminals.map((terminal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <terminal.icon className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{terminal.city}</h4>
                        <p className="text-xs text-muted-foreground">{terminal.services}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Geography;
