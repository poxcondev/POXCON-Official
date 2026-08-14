/**
 * サイト全体で共有する固定情報。
 * 法務ページ・フッター・製品ページで同じ表記を使い、表記ゆれを防ぐ。
 */
export const SITE = {
  /** 提供者（個人開発者） */
  vendor: 'Novexar',
  /** サポート窓口（専用フォームは持たず GitHub Issues に集約） */
  supportUrl: 'https://github.com/novexar/server-manager-releases/issues',
  /** 配布リポジトリ（Releases） */
  releasesUrl: 'https://github.com/novexar/server-manager-releases',
  githubUrl: 'https://github.com/novexar',
  /** 決済代行（Merchant of Record） */
  merchant: 'Lemon Squeezy',
  merchantUrl: 'https://www.lemonsqueezy.com/',
  /** 返金申請の受付期限（購入日からの日数） */
  refundWindowDays: 14,
  /** 法務文書の制定日 */
  legalUpdatedAt: '2026-08-14',
} as const;

/**
 * Valve / Steam との非提携表記。
 * 第三者商標の指名的使用であることを明示するため、フッターと製品ページの双方に置く。
 */
export const TRADEMARK_NOTICE = {
  ja: '本製品は Valve Corporation および Steam と提携・承認関係にありません。Steam は Valve Corporation の商標です。',
  en: 'Not affiliated with or endorsed by Valve Corporation. Steam is a trademark of Valve Corporation.',
} as const;
