import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';
import { LEGAL_DOCUMENTS } from '@/data/legal';
import { TRADEMARK_NOTICE } from '@/data/site';

/**
 * 全ページ共通のフッター。
 * 著作権表示・規約類へのリンク・第三者商標の非提携表記をまとめる。
 */
export function SiteFooter() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-line pt-6 pb-2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-[0.6rem] md:text-xs uppercase tracking-[0.25em] text-mute">
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {LEGAL_DOCUMENTS.map((doc) => (
            <Link
              key={doc.slug}
              to={`/legal/${doc.slug}`}
              className="link-underline hover:text-ink transition-colors"
            >
              {t(`legal.${doc.slug}`)}
            </Link>
          ))}
        </nav>

        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 self-start sm:self-auto hover:text-ink transition-colors"
          aria-label={t('contact.top')}
        >
          {t('contact.top')}
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <p className="mt-6 max-w-3xl text-[0.65rem] leading-relaxed text-mute/60">
        {TRADEMARK_NOTICE.ja}
        <span className="block">{TRADEMARK_NOTICE.en}</span>
      </p>

      <p className="mt-4 font-mono text-[0.6rem] md:text-xs uppercase tracking-[0.25em] text-mute">
        {t('meta.copyright')}
      </p>
    </footer>
  );
}
