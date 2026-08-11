import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ImageIcon } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { screenshotSrc, type Product } from '@/data/products';

interface ScreenshotGalleryProps {
  product: Product;
}

export function ScreenshotGallery({ product }: ScreenshotGalleryProps) {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <SectionHeading
        index="01"
        label={t('productPage.sections.screenshots')}
        count={String(product.screenshotIds.length).padStart(2, '0')}
      />
      <div className="mt-10 md:mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
        {product.screenshotIds.map((id, i) => (
          <ScreenshotFrame key={id} product={product} id={id} index={i} />
        ))}
      </div>
    </section>
  );
}

interface ScreenshotFrameProps {
  product: Product;
  id: string;
  index: number;
}

function ScreenshotFrame({ product, id, index }: ScreenshotFrameProps) {
  const { t } = useTranslation();
  const [failed, setFailed] = useState(false);
  const caption = t(`productPage.${product.i18nKey}.screenshots.${id}`);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
    >
      <div className="group relative aspect-video overflow-hidden border border-line bg-white/[0.02]">
        {/* アクセントのグロー背景（モック風の舞台） */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(89,183,255,0.16),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(89,183,255,0.06),transparent_55%)]" />
        {failed ? (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3">
            <ImageIcon className="h-6 w-6 text-mute/40" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-mute/50">
              {t('productPage.comingSoon')}
            </span>
          </div>
        ) : (
          <div className="relative flex h-full w-full items-start justify-center px-8 pt-8 md:px-12 md:pt-12">
            {/* フローティングウィンドウ。下辺は枠外に流してランディング風に */}
            <img
              src={screenshotSrc(product, id)}
              alt={caption}
              loading="lazy"
              onError={() => setFailed(true)}
              className="w-full rounded-t-lg border border-white/10 shadow-[0_-8px_80px_-12px_rgba(89,183,255,0.25),0_24px_60px_-12px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out group-hover:-translate-y-2"
            />
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex items-baseline gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mute">
        <span className="text-mute/50">{String(index + 1).padStart(2, '0')}</span>
        {caption}
      </figcaption>
    </motion.figure>
  );
}
