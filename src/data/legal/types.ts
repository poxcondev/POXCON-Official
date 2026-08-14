/** 法務ページ（規約・プライバシー・返金）の共通データ構造 */

/** 本文の 1 条。段落と箇条書きはどちらか一方でも両方でもよい */
export interface LegalBlock {
  heading: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
}

/** ページ末尾に置く英語サマリ（審査担当者向けの要約であり、正文は日本語） */
export interface LegalSummary {
  heading: string;
  paragraphs: readonly string[];
}

export type LegalSlug = 'terms' | 'privacy' | 'refund';

export interface LegalDocument {
  slug: LegalSlug;
  /** 通し番号（セクション見出しの意匠に合わせる） */
  index: string;
  /** 日本語タイトル（正文） */
  title: string;
  /** 見出し上部に置く英語ラベル */
  titleEn: string;
  /** 制定日 (YYYY-MM-DD) */
  updated: string;
  /** リード文 */
  intro: readonly string[];
  blocks: readonly LegalBlock[];
  summaryEn: LegalSummary;
  /** document.title / meta description（英語） */
  metaTitleEn: string;
  metaDescriptionEn: string;
}
