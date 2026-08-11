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
    slug: 'steam-server-manager',
    i18nKey: 'ssm',
    name: 'Steam Server Manager',
    priceFree: '¥0',
    pricePro: '¥1,980',
    downloadUrl:
      'https://github.com/novexar/steam-server-manager-releases/releases/latest',
    purchaseUrl:
      'https://novexar.lemonsqueezy.com/checkout/buy/512b1cf4-7162-4836-ae82-509f3c4859af',
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

export function findProduct(slug: string | undefined): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** public 配下のスクリーンショットURLを組み立てる */
export function screenshotSrc(product: Product, id: string): string {
  return `${import.meta.env.BASE_URL}products/${product.slug}/${id}.png`;
}
