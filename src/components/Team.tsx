import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Globe, 
  Package, 
  FileCheck, 
  Settings,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Team: React.FC = () => {
  const teamStats = [
    {
      icon: Users,
      number: "25+",
      label: "специалистов",
      description: "Логисты, таможенные брокеры, водители"
    },
    {
      icon: Award,
      number: "100%",
      label: "сертификация",
      description: "Подтверждённая квалификация персонала"
    },
    {
      icon: Clock,
      number: "13+",
      label: "лет опыта",
      description: "Средний опыт ключевых специалистов"
    },
    {
      icon: Globe,
      number: "5+",
      label: "языков",
      description: "Русский, английский, китайский, казахский, киргизский"
    }
  ];

  const expertise = [
    {
      icon: Package,
      title: "Логистика и ВЭД",
      description: "Оптимизация маршрутов и транспортных цепочек",
      skills: [
        "Международное право и таможенное регулирование",
        "Управление складскими операциями",
        "Мультимодальные перевозки"
      ]
    },
    {
      icon: FileCheck,
      title: "Таможенное оформление",
      description: "Декларирование и классификация товаров",
      skills: [
        "Получение сертификатов и разрешений",
        "Валютный контроль и налогообложение",
        "Взаимодействие с таможенными органами"
      ]
    },
    {
      icon: Settings,
      title: "Операционное управление",
      description: "Координация между странами в режиме 24/7",
      skills: [
        "GPS-мониторинг и контроль грузов",
        "Документооборот и отчётность",
        "Управление рисками и страхование"
      ]
    }
  ];

  const values = [
    "Профессионализм",
    "Ответственность", 
    "Открытость",
    "Клиентоориентированность"
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
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
            Профессионалы международной логистики
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Наша команда — это опытные специалисты с глубоким пониманием специфики перевозок 
            между Китаем, Россией, Европой и Центральной Азией
          </p>
        </motion.div>

        {/* Team Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <CardTitle className="text-lg">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Области экспертизы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
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
                        <area.icon className="w-8 h-8 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{area.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  Ценности нашей команды
                </h3>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                  Принципы, которые объединяют всех сотрудников «Дизель Техник» 
                  и определяют наш подход к работе
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold text-lg">{value}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

