import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ctaAccentClass, ctaGhostClass } from '@/components/ui/cta';
import { PRODUCTS } from '@/data/products';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** トップページの Product ティーザー。詳細・購入導線は個別ページに集約 */
export const Product = () => {
  const { t } = useTranslation();
  const [product] = PRODUCTS;
  const ns = `productPage.${product.i18nKey}`;

  return (
    <section id="product" className="px-6 md:px-10 py-28 md:py-40">
      <SectionHeading index="03" label={t('product.label')} />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mt-10 md:mt-14 font-display text-4xl md:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.95] text-ink"
      >
        {product.name}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-6 font-serif italic text-xl md:text-3xl text-ink/90"
      >
        {t(`${ns}.tagline`)}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mt-6 max-w-2xl text-sm md:text-base text-mute leading-relaxed"
      >
        {t(`${ns}.desc`)}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-mute/60"
      >
        {t(`${ns}.platforms`)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <span className="rounded-full border border-line px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mute">
          {t('product.plans.free.name')} — {product.priceFree}
        </span>
        <span className="rounded-full border border-line px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mute">
          {t('product.plans.pro.name')} — {product.pricePro}{' '}
          <span className="text-accent">{t('product.oneTime')}</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Link to={`/products/${product.slug}`} className={ctaAccentClass}>
          {t('product.viewDetails')}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={product.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaGhostClass}
        >
          <Download className="h-4 w-4" />
          {t('product.download')}
        </a>
      </motion.div>
    </section>
  );
};
