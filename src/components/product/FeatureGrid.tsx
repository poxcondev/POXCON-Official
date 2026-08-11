import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Product } from '@/data/products';

interface FeatureGridProps {
  product: Product;
}

export function FeatureGrid({ product }: FeatureGridProps) {
  const { t } = useTranslation();
  const ns = `productPage.${product.i18nKey}`;

  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <SectionHeading
        index="02"
        label={t('productPage.sections.features')}
        count={String(product.features.length).padStart(2, '0')}
      />
      <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10">
        {product.features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className="border-b border-line py-8 md:py-10"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-accent" />
                {feature.pro && (
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-accent">
                    {t('productPage.proBadge')}
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-display text-base md:text-lg font-bold text-ink">
                {t(`${ns}.features.${feature.key}.title`)}
              </h3>
              <p className="mt-3 text-sm text-mute leading-relaxed">
                {t(`${ns}.features.${feature.key}.desc`)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
