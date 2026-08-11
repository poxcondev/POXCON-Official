import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Product } from '@/data/products';

interface HowItWorksProps {
  product: Product;
}

export function HowItWorks({ product }: HowItWorksProps) {
  const { t } = useTranslation();
  const ns = `productPage.${product.i18nKey}`;

  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <SectionHeading index="03" label={t('productPage.sections.howItWorks')} />
      <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10">
        {product.stepKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="border-b border-line py-8 md:py-10"
          >
            <span className="font-display text-4xl md:text-5xl font-black text-ink/15">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-display text-base md:text-lg font-bold text-ink">
              {t(`${ns}.steps.${key}.title`)}
            </h3>
            <p className="mt-3 text-sm text-mute leading-relaxed">
              {t(`${ns}.steps.${key}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
