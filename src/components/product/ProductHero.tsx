import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import {
  ctaAccentClass,
  ctaDisabledClass,
  ctaGhostClass,
} from '@/components/ui/cta';
import type { Product } from '@/data/products';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const { t } = useTranslation();
  const ns = `productPage.${product.i18nKey}`;

  return (
    <section className="px-6 md:px-10 pt-32 md:pt-44 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/#product"
          className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mute hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('productPage.back')}
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        className="mt-10 md:mt-14 font-display text-5xl md:text-8xl font-black uppercase tracking-[-0.03em] leading-[0.95] text-ink"
      >
        {product.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-6 font-serif italic text-xl md:text-3xl text-ink/90"
      >
        {t(`${ns}.tagline`)}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-6 max-w-2xl text-sm md:text-base text-mute leading-relaxed"
      >
        {t(`${ns}.desc`)}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-mute/60"
      >
        {t(`${ns}.platforms`)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href={product.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaGhostClass}
        >
          <Download className="h-4 w-4" />
          {t('product.download')}
        </a>
        {product.purchaseUrl ? (
          <a
            href={product.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaAccentClass}
          >
            {t('product.buy')} — {product.pricePro}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <span aria-disabled="true" className={ctaDisabledClass}>
            {t('product.buySoon')}
          </span>
        )}
      </motion.div>
    </section>
  );
}
