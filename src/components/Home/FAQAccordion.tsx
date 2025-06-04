import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItemData[] = [
  {
    id: 'faq-1',
    question: 'Can I order custom designed furniture?',
    answer: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.',
  },
  {
    id: 'faq-2',
    question: 'Is there any way to order custom design completely in online?',
    answer: 'Yes, many of our custom design services can be initiated and managed online. Please contact our support team for more details on the process and requirements.',
  },
  {
    id: 'faq-3',
    question: 'How can I claim warranty if I bought from online?',
    answer: 'To claim warranty for online purchases, please refer to the warranty card provided with your product or visit our website\'s warranty section. You will typically need your proof of purchase and product serial number.',
  },
  {
    id: 'faq-4',
    question: 'What is your refund policy if I want to return product?',
    answer: 'Our refund policy allows for returns within 30 days of purchase, provided the product is in its original condition. Some exclusions may apply. Please review our full refund policy on our website.',
  },
  {
    id: 'faq-5',
    question: 'Will you ship immediately after I order a furniture?',
    answer: 'Shipping times vary depending on the item and your location. In-stock items are typically shipped within 2-3 business days. Custom orders may take longer. You will receive a shipping confirmation with tracking details once your order is dispatched.',
  },
   {
    id: 'faq-6',
    question: 'Is there any opportunity to get bulk product at a time?',
    answer: 'Yes, we offer special pricing and services for bulk orders. Please contact our B2B sales team or fill out the bulk order inquiry form on our website for more information.',
  },
];

interface FAQAccordionProps {
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-primary text-primary-foreground', className)}>
      <div className="container max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="bg-background/10 border-primary-foreground/30 rounded-md p-1">
              <AccordionTrigger className="px-4 py-3 text-left hover:no-underline text-base md:text-lg font-medium text-primary-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1 text-primary-foreground/90 text-sm md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQAccordion;
