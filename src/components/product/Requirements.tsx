import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Product } from '@/data/products';

interface RequirementsProps {
  product: Product;
}

export function Requirements({ product }: RequirementsProps) {
  const { t } = useTranslation();
  const ns = `productPage.${product.i18nKey}`;

  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <SectionHeading index="05" label={t('productPage.sections.requirements')} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="mt-10 md:mt-14"
      >
        {product.requirementKeys.map((key) => (
          <div
            key={key}
            className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-6 border-b border-line py-5"
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-mute">
              {t(`${ns}.requirements.${key}.label`)}
            </span>
            <span className="text-sm text-ink/80 leading-relaxed">
              {t(`${ns}.requirements.${key}.value`)}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
