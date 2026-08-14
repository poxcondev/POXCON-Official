import type { LucideIcon } from 'lucide-react';
import {
  Search,
  HardDriveDownload,
  Settings2,
  Play,
  RefreshCw,
  Layers,
  Puzzle,
  DatabaseBackup,
} from 'lucide-react';

export interface ProductFeature {
  key: string;
  icon: LucideIcon;
  /** Pro 限定機能なら true（PRO バッジを表示） */
  pro: boolean;
}

/** 'yes' = チェック / 'no' = ダッシュ / 'text' = ロケールの pricing.rows.<key>.<plan> を表示 */
export type PricingValue = 'yes' | 'no' | 'text';

export interface PricingRow {
  key: string;
  free: PricingValue;
  pro: PricingValue;
}

export interface Product {
  slug: string;
  /** ロケール productPage 配下の名前空間キー */
  i18nKey: string;
  name: string;
  priceFree: string;
  pricePro: string;
  downloadUrl: string;
  /** Lemon Squeezy のチェックアウトURL。空文字の間は購入ボタンを「準備中」表示にする */
  purchaseUrl: string;
  /**
   * 英語話者向けの製品概要（2〜3文）。ロケールに関わらず英語のため i18n には置かない。
   * 日本語表示時のみ本文に併記し、英語表示時は本文自体が英語のため省略する。
   */
  summaryEn: readonly string[];
  /** 製品ページの meta description（英語） */
  metaDescriptionEn: string;
  /** public/products/<slug>/<id>.png を参照。画像が無い間はプレースホルダー表示 */
  screenshotIds: readonly string[];
  features: readonly ProductFeature[];
  stepKeys: readonly string[];
  pricingRows: readonly PricingRow[];
  requirementKeys: readonly string[];
  faqKeys: readonly string[];
}

export const PRODUCTS: readonly Product[] = [
  {
    slug: 'server-manager',
    i18nKey: 'ssm',
    name: 'Novexar Server Manager',
    priceFree: '¥0',
    pricePro: '¥1,980',
    downloadUrl:
      'https://github.com/novexar/server-manager-releases/releases/latest',
    purchaseUrl:
      'https://novexar.lemonsqueezy.com/checkout/buy/512b1cf4-7162-4836-ae82-509f3c4859af',
    summaryEn: [
      'Novexar Server Manager is a desktop application for Windows and Linux that lets anyone run a dedicated game server without touching a command line.',
      'It searches for dedicated server titles distributed through SteamCMD, installs them, edits their configuration files through a GUI, and starts, stops and monitors the running processes.',
      'The free tier covers one server; the Pro tier is a one-time purchase that adds multiple servers, mod management and automatic backups. Everything runs locally on the user’s own PC — the app has no telemetry and we operate no servers of our own.',
    ],
    metaDescriptionEn:
      'Novexar Server Manager — a Windows and Linux desktop app to search, install, configure and run dedicated game servers through a GUI, with no command-line work. Free tier available; Pro is a one-time purchase.',
    screenshotIds: ['dashboard', 'search', 'config', 'console'],
    features: [
      { key: 'search', icon: Search, pro: false },
      { key: 'install', icon: HardDriveDownload, pro: false },
      { key: 'config', icon: Settings2, pro: false },
      { key: 'launch', icon: Play, pro: false },
      { key: 'update', icon: RefreshCw, pro: false },
      { key: 'multi', icon: Layers, pro: true },
      { key: 'mods', icon: Puzzle, pro: true },
      { key: 'backup', icon: DatabaseBackup, pro: true },
    ],
    stepKeys: ['search', 'install', 'configure', 'launch'],
    pricingRows: [
      { key: 'core', free: 'yes', pro: 'yes' },
      { key: 'update', free: 'yes', pro: 'yes' },
      { key: 'servers', free: 'text', pro: 'text' },
      { key: 'mods', free: 'no', pro: 'yes' },
      { key: 'backup', free: 'no', pro: 'yes' },
      { key: 'seats', free: 'no', pro: 'text' },
    ],
    requirementKeys: ['os', 'network', 'storage'],
    faqKeys: ['games', 'license', 'difference', 'updates', 'refund'],
  },
];

/**
 * 旧スラッグ → 現行スラッグ。
 * 製品リブランド前に配布した URL を生かすため、ルーター側でリダイレクトする。
 * （静的ホスティング側の受け皿は public/products/<旧スラッグ>/index.html）
 */
export const LEGACY_SLUG_REDIRECTS: Readonly<Record<string, string>> = {
  'steam-server-manager': 'server-manager',
};

export function findProduct(slug: string | undefined): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** 旧スラッグでアクセスされた場合の現行スラッグ（該当なしは undefined） */
export function findRedirectSlug(slug: string | undefined): string | undefined {
  return slug ? LEGACY_SLUG_REDIRECTS[slug] : undefined;
}

/** public 配下のスクリーンショットURLを組み立てる */
export function screenshotSrc(product: Product, id: string): string {
  return `${import.meta.env.BASE_URL}products/${product.slug}/${id}.png`;
}
