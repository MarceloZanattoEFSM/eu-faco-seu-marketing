import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQAccordionProps {
  items: FAQItem[];
}
const FAQAccordion = ({
  items
}: FAQAccordionProps) => {
  return <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-6">
        {items.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-dark-light rounded-lg overflow-hidden border-none">
            <AccordionTrigger className="px-6 py-4 text-xl font-bold hover:no-underline text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              {item.answer}
            </AccordionContent>
          </AccordionItem>)}
      </Accordion>
    </div>;
};
export default FAQAccordion;