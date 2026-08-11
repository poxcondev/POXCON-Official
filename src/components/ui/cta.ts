/** サイト共通の丸ピルCTAの基本クラス */
export const ctaBaseClass =
  'inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] transition-colors';

/** アクセント（購入・主要導線） */
export const ctaAccentClass = `${ctaBaseClass} border-accent bg-accent/10 text-accent hover:bg-accent hover:text-night`;

/** セカンダリ（ダウンロードなど） */
export const ctaGhostClass = `${ctaBaseClass} border-line text-ink hover:border-accent hover:text-accent`;

/** 無効状態（販売準備中など） */
export const ctaDisabledClass = `${ctaBaseClass} border-line text-mute/60 cursor-not-allowed`;
