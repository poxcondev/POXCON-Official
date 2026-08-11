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
      <div className="aspect-video overflow-hidden border border-line bg-white/[0.02]">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <ImageIcon className="h-6 w-6 text-mute/40" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-mute/50">
              {t('productPage.comingSoon')}
            </span>
          </div>
        ) : (
          <img
            src={screenshotSrc(product, id)}
            alt={caption}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-contain"
          />
        )}
      </div>
      <figcaption className="mt-3 flex items-baseline gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mute">
        <span className="text-mute/50">{String(index + 1).padStart(2, '0')}</span>
        {caption}
      </figcaption>
    </motion.figure>
  );
}
