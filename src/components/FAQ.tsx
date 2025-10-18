import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Что такое TIR (МДП) и какие преимущества даёт эта система?",
      answer: "TIR (Transports Internationaux Routiers) или МДП (Международные дорожные перевозки) — это международная система таможенного транзита. Главное преимущество: груз проходит границы без таможенных досмотров на маршруте, только под таможенными пломбами. Это сокращает время доставки и снижает риски повреждения груза при перегрузках."
    },
    {
      question: "Какие документы нужны для международной перевозки груза?",
      answer: "Базовый пакет: CMR (международная транспортная накладная), инвойс, упаковочный лист, сертификаты соответствия (если требуются), экспортная/импортная декларация. Мы помогаем подготовить все необходимые документы и проверяем их корректность перед отправкой."
    },
    {
      question: "Сколько времени занимает доставка из Китая в Россию?",
      answer: "Автомобильная доставка из основных городов Китая (Урумчи, Иу, Гуанчжоу) до городов России обычно занимает 7-12 дней в зависимости от конечного пункта. Экспресс-доставка — от 5 дней. Мы предоставляем точные сроки после расчёта маршрута под ваш груз."
    },
    {
      question: "Можно ли отследить местоположение груза во время транспортировки?",
      answer: "Да, все наши грузовые автомобили оснащены GPS-трекерами. Вы получаете доступ к онлайн-мониторингу и регулярные обновления о статусе груза. Также наши логисты на связи 24/7 для оперативных вопросов."
    },
    {
      question: "Какие грузы вы перевозите? Есть ли ограничения?",
      answer: "Мы перевозим широкий спектр грузов: промышленное оборудование, товары народного потребления, сырьё, продукцию пищевой промышленности (с соблюдением температурных режимов). Не перевозим опасные грузы класса 1 (взрывчатые вещества) и запрещённые к обороту товары. По специфическим грузам проводим индивидуальную консультацию."
    },
    {
      question: "Как рассчитывается стоимость перевозки?",
      answer: "Стоимость зависит от: маршрута, веса и объёма груза, типа груза (обычный/негабаритный/скоропортящийся), срочности доставки, необходимости дополнительных услуг (таможня, хранение, страхование). Мы предоставляем детальный расчёт и прозрачную смету без скрытых платежей."
    },
    {
      question: "Предоставляете ли вы таможенное оформление?",
      answer: "Да, у нас есть собственный штат таможенных брокеров с действующими лицензиями. Мы оформляем импорт и экспорт, получаем необходимые сертификаты, согласовываем документы с контролирующими органами. Это экономит ваше время и минимизирует риски задержек на таможне."
    },
    {
      question: "Что делать, если груз повреждён или потерян?",
      answer: "Все грузы застрахованы. В случае повреждения или утраты мы сразу запускаем процедуру расследования и подачи претензии. Страховое возмещение покрывает стоимость груза согласно условиям полиса. Мы сопровождаем клиента на всех этапах урегулирования."
    },
    {
      question: "Есть ли минимальный объём груза для заказа?",
      answer: "Мы работаем как с полными фурами (FTL), так и со сборными грузами (LTL). Минимальный объём для сборного груза — от 1 м³ или 100 кг. Для небольших партий предлагаем консолидацию на наших складах в Китае."
    },
    {
      question: "Какие условия оплаты вы предлагаете?",
      answer: "Для постоянных клиентов предусмотрена отсрочка платежа и гибкие условия. Новым клиентам — предоплата 50%, остаток после доставки. Возможна оплата в рублях, долларах, юанях. Все детали обсуждаем индивидуально."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Часто задаваемые вопросы
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ответы на основные вопросы о международных перевозках и наших услугах
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Не нашли ответ на свой вопрос?
              </h3>
              <p className="text-muted-foreground mb-6">
                Наши специалисты готовы ответить на любые вопросы о международных перевозках 
                и помочь подобрать оптимальное решение для вашего бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Задать вопрос
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Получить консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
