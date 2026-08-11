import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Product } from '@/data/products';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface FaqProps {
  product: Product;
}

export function Faq({ product }: FaqProps) {
  const { t } = useTranslation();
  const ns = `productPage.${product.i18nKey}`;
  const [openKey, setOpenKey] = useState<string | null>(
    product.faqKeys[0] ?? null
  );

  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <SectionHeading
        index="06"
        label={t('productPage.sections.faq')}
        count={String(product.faqKeys.length).padStart(2, '0')}
      />
      <div className="mt-10 md:mt-14">
        {product.faqKeys.map((key) => {
          const isOpen = openKey === key;
          return (
            <div key={key} className="border-b border-line">
              <button
                onClick={() => setOpenKey(isOpen ? null : key)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-sm md:text-base text-ink">
                  {t(`${ns}.faq.${key}.q`)}
                </span>
                <Plus
                  className={`h-4 w-4 shrink-0 text-mute transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 text-sm text-mute leading-relaxed">
                      {t(`${ns}.faq.${key}.a`)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
