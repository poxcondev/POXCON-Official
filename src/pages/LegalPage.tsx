import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { LegalBody } from '@/components/legal/LegalBody';
import { findLegalDocument } from '@/data/legal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** 規約・プライバシー・返金ポリシーの共通ページ（正文は日本語、末尾に英語サマリ） */
export function LegalPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const doc = findLegalDocument(slug);

  useDocumentMeta(
    doc?.metaTitleEn ?? 'Novexar',
    doc?.metaDescriptionEn ?? undefined
  );

  if (!doc) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="px-6 md:px-10 pt-32 md:pt-44 pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-14"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mute hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('legal.back')}
        </Link>
      </motion.div>

      <SectionHeading index={doc.index} label={doc.titleEn} />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        className="mt-10 md:mt-14 font-display text-4xl md:text-7xl font-black tracking-[-0.03em] leading-[0.95] text-ink"
      >
        {doc.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-mute/60"
      >
        {t('legal.updated')} — {doc.updated}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 max-w-3xl space-y-4"
      >
        {doc.intro.map((paragraph) => (
          <p key={paragraph} className="text-sm md:text-base text-mute leading-loose">
            {paragraph}
          </p>
        ))}
      </motion.div>

      <LegalBody doc={doc} />

      <div className="mt-16 md:mt-24">
        <SiteFooter />
      </div>
    </section>
  );
}
