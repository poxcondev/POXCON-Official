import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Check, Download, Minus } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  ctaAccentClass,
  ctaDisabledClass,
  ctaGhostClass,
} from '@/components/ui/cta';
import type { PricingRow, Product } from '@/data/products';

type PlanId = 'free' | 'pro';

interface PricingTableProps {
  product: Product;
}

function PlanValue({
  row,
  plan,
  ns,
}: {
  row: PricingRow;
  plan: PlanId;
  ns: string;
}) {
  const { t } = useTranslation();
  const value = plan === 'free' ? row.free : row.pro;

  if (value === 'yes') {
    return <Check className="h-4 w-4 text-accent" aria-label="Included" />;
  }
  if (value === 'no') {
    return <Minus className="h-4 w-4 text-mute/30" aria-label="Not included" />;
  }
  return (
    <span className="text-xs md:text-sm text-ink">
      {t(`${ns}.pricing.rows.${row.key}.${plan}`)}
    </span>
  );
}

export function PricingTable({ product }: PricingTableProps) {
  const { t } = useTranslation();
  const ns = `productPage.${product.i18nKey}`;
  const gridClass = 'grid grid-cols-[1.3fr_0.85fr_0.85fr] gap-x-4 items-center';

  return (
    <section id="pricing" className="px-6 md:px-10 py-16 md:py-24">
      <SectionHeading index="04" label={t('productPage.sections.pricing')} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="mt-10 md:mt-14"
      >
        {/* Header row */}
        <div className={`${gridClass} border-b border-line pb-6`}>
          <span />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-mute">
              {t('product.plans.free.name')}
            </p>
            <p className="mt-2 font-display text-2xl md:text-4xl font-black text-ink">
              {product.priceFree}
            </p>
          </div>
          <div>
            <p className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-mute">
              {t('product.plans.pro.name')}
              <span className="rounded-full border border-line px-2.5 py-0.5 text-[0.6rem] tracking-widest text-accent">
                {t('product.oneTime')}
              </span>
            </p>
            <p className="mt-2 font-display text-2xl md:text-4xl font-black text-ink">
              {product.pricePro}
            </p>
          </div>
        </div>

        {/* Feature rows */}
        {product.pricingRows.map((row) => (
          <div key={row.key} className={`${gridClass} border-b border-line py-5`}>
            <span className="text-xs md:text-sm text-mute leading-relaxed">
              {t(`${ns}.pricing.rows.${row.key}.label`)}
            </span>
            <PlanValue row={row} plan="free" ns={ns} />
            <PlanValue row={row} plan="pro" ns={ns} />
          </div>
        ))}

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
              {t('product.buy')}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span aria-disabled="true" className={ctaDisabledClass}>
              {t('product.buySoon')}
            </span>
          )}
        </div>

        <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mute/60">
          {t(`${ns}.pricing.note`)}
        </p>
      </motion.div>
    </section>
  );
}
