import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Wrench, 
  Users, 
  Settings,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ShanghaiTrailer: React.FC = () => {
  const advantages = [
    {
      icon: Truck,
      title: "Прямые поставки от производителя",
      description: "Гарантия оригинального качества и выгодных условий без посредников"
    },
    {
      icon: Package,
      title: "Широкий ассортимент техники",
      description: "От стандартных моделей до специализированных автоприцепов для различных отраслей"
    },
    {
      icon: Users,
      title: "Комплексное сопровождение",
      description: "Консультации, подбор оборудования под задачи, помощь в оформлении документов"
    },
    {
      icon: Wrench,
      title: "Сервисное обслуживание",
      description: "Гарантийный и постгарантийный ремонт, снабжение оригинальными запчастями"
    },
    {
      icon: Settings,
      title: "Индивидуальные решения",
      description: "Возможность адаптации моделей под конкретные требования заказчика"
    }
  ];

  return (
    <section id="shanghai" className="py-20 bg-muted/30">
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
            Официальный представитель Shanghai Trailer в Кыргызской Республике
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Международная транспортная компания «Дизель Техник» имеет честь сообщить, 
            что является эксклюзивным официальным представителем завода «Shanghai Trailer» 
            на территории Кыргызской Республики.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/shang.jpg"
                alt="Shanghai Trailer полуприцеп"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Shanghai Trailer</p>
                <p className="text-xs opacity-80">Официальный представитель</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">
                  О заводе Shanghai Trailer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Завод «Shanghai Trailer» — это современное высокотехнологичное предприятие, 
                  специализирующееся на производстве автоприцепов и полуприцепов различного назначения.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Продукция завода отличается надежностью, долговечностью и высоким уровнем безопасности, 
                  что подтверждается международными сертификатами качества и успешной эксплуатацией 
                  во многих странах мира.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground italic">
                    Мы уверены, что сотрудничество с нашей компанией позволит вам получить надежного 
                    партнера и эффективные решения для транспортных задач. «Дизель Техник» строит 
                    отношения на принципах открытости, ответственности и долгосрочного партнерства.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Наша компания обеспечивает
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <advantage.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Заинтересованы в сотрудничестве?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Получите консультацию по продукции Shanghai Trailer и узнайте о специальных 
                условиях для партнеров «Дизель Техник»
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Получить консультацию
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Каталог продукции
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ShanghaiTrailer;
