import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle
}) => {
  return (
    <div className="border-b border-cream-300/80 last:border-0 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group py-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-serif font-semibold text-charcoal-900 group-hover:text-teagreen-800 transition-colors">
          {question}
        </span>
        <span className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center bg-cream-200 text-teagreen-800 transition-transform duration-300 shrink-0 ml-4",
          isOpen && "rotate-180 bg-teagreen-800 text-cream-50"
        )}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-sm sm:text-base text-charcoal-800/80 leading-relaxed font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion: React.FC<{ items: Array<{ id: string; question: string; answer: string }> }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className="divide-y divide-cream-300/80 bg-cream-50/80 p-6 sm:p-8 rounded-3xl border border-cream-300/60 shadow-soft">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
};
