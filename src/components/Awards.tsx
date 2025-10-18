import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Awards: React.FC = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Лучший перевозчик 2024 года",
      organization: "по версии ATI.SU",
      description: "Признание лидерства в сфере международных грузоперевозок",
      year: "2024",
      emoji: "🥇"
    },
    {
      icon: Trophy,
      title: "Лучший перевозчик 2023 года",
      organization: "по версии биржи грузоперевозчиков ATI.SU",
      description: "Высокая оценка качества услуг и надежности",
      year: "2023",
      emoji: "🥇"
    },
    {
      icon: Medal,
      title: "Второе место среди перевозчиков Кыргызстана",
      organization: "в рейтинге ATI.SU",
      description: "Стабильные позиции в национальном рейтинге",
      year: "2023",
      emoji: "🥈"
    },
    {
      icon: Award,
      title: "Образцовый держатель книжки МДП (TIR)",
      organization: "Диплом АМАП",
      description: "Признание Ассоциации Международных Автомобильных Перевозчиков",
      year: "2023",
      emoji: "🏆"
    }
  ];

  const certificates = [
    {
      title: "Сертификат TIR (МДП)",
      description: "Международная система таможенного транзита"
    },
    {
      title: "Сертификат CMR",
      description: "Международная конвенция о договоре международной автомобильной перевозки грузов"
    },
    {
      title: "Международная лицензия FIATA",
      description: "Всемирная федерация ассоциаций экспедиторов"
    },
    {
      title: "ISO 9001:2015",
      description: "Система менеджмента качества"
    },
    {
      title: "Членство в АМАП",
      description: "Ассоциация Международных Автомобильных Перевозчиков"
    },
    {
      title: "Лицензия таможенного брокера",
      description: "Право на осуществление таможенных операций"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
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
            Доверие подтверждено наградами
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Наш профессионализм и качество услуг признаны ведущими отраслевыми организациями 
            и государственными структурами
          </p>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-secondary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-secondary/10 rounded-lg">
                          <award.icon className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-1">{award.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{award.organization}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1">{award.emoji}</div>
                        <Badge variant="outline" className="text-xs">
                          {award.year}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Эти награды подтверждают, что «Дизель Техник» стабильно удерживает лидерские позиции 
                в отрасли и продолжает развиваться, внедряя новые стандарты качества обслуживания.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Сертификаты и лицензии
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CheckCircle className="w-6 h-6 text-secondary" />
              <h4 className="text-xl font-semibold text-foreground">
                Лицензия на транспортную деятельность
              </h4>
            </div>
            <p className="text-muted-foreground">
              Лицензия на транспортную деятельность № XXXX-XXXX-XXXX | Сертификат TIR/CMR | Член АМАП
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
