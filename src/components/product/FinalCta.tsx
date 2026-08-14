import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Download } from 'lucide-react';
import {
  ctaAccentClass,
  ctaDisabledClass,
  ctaGhostClass,
} from '@/components/ui/cta';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Product } from '@/data/products';

interface FinalCtaProps {
  product: Product;
}

export function FinalCta({ product }: FinalCtaProps) {
  const { t } = useTranslation();
  const ns = `productPage.${product.i18nKey}`;

  return (
    <section className="px-6 md:px-10 pt-12 md:pt-16 pb-8">
      <div className="border-t border-line py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-xl md:text-3xl text-mute"
        >
          {t(`${ns}.cta.sub`)}
        </motion.p>

        <motion.div
          className="overflow-hidden mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={{ hidden: { y: '110%' }, visible: { y: 0 } }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11vw] md:text-[8vw] font-black uppercase tracking-[-0.03em] leading-[0.9] text-ink select-none"
          >
            {t(`${ns}.cta.title`)}
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4"
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
      </div>

      <SiteFooter />
    </section>
  );
}
