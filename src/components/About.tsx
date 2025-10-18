import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Package, CheckCircle2, Clock, Globe, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Надёжность",
      description: "Мы выполняем свои обязательства в срок и в полном объеме"
    },
    {
      icon: Users,
      title: "Профессионализм",
      description: "Команда экспертов с многолетним опытом в международной логистике"
    },
    {
      icon: Package,
      title: "Комплексный подход",
      description: "Мы берем на себя все этапы перевозки, освобождая клиентов от лишних забот"
    },
    {
      icon: CheckCircle2,
      title: "Прозрачность",
      description: "Честные условия, понятные тарифы и открытое взаимодействие"
    }
  ];

  const stats = [
    { icon: Clock, number: "13+", label: "лет работы" },
    { icon: Globe, number: "4", label: "региона" },
    { icon: Phone, number: "24/7", label: "поддержка" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                alt="Склад в Китае"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Склад в Китае</p>
                <p className="text-xs opacity-80">Урумчи, Алашанькоу</p>
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
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Дизель Техник — ваш надёжный партнёр в международной логистике
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Международная Транспортная Компания «Дизель Техник» была основана 14 декабря 2011 года 
                  и за более чем десятилетие превратилась в одного из ведущих игроков на рынке международных 
                  автомобильных грузоперевозок.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Наша миссия — обеспечивать клиентам надежные и безопасные логистические решения, 
                которые помогают бизнесу развиваться и выходить на новые рынки.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Наши ценности
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Принципы, которые лежат в основе нашей работы и определяют качество обслуживания
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {value.description}
                    </p>
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

export default About;

