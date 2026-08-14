import { SITE } from '@/data/site';
import type { LegalDocument } from './types';

/** 返金ポリシー。決済は Merchant of Record 経由のため、申請の受付と判断の範囲を明示する */
export const REFUND: LegalDocument = {
  slug: 'refund',
  index: '03',
  title: '返金ポリシー',
  titleEn: 'Refund Policy',
  updated: SITE.legalUpdatedAt,
  intro: [
    `本ポリシーは、ソフトウェア「Novexar Server Manager」の Pro ライセンスに関する返金の取扱いを定めるものです。決済は Merchant of Record である ${SITE.merchant} を通じて行われます。`,
    'Free 版で主要な機能を無償でお試しいただけます。ご購入前に、お使いの環境で動作することをご確認いただくことを推奨します。',
  ],
  blocks: [
    {
      heading: '1. 返金の受付期間',
      paragraphs: [
        `ご購入日から ${SITE.refundWindowDays} 日以内に申請いただいた場合、返金を承ります。期間を過ぎた申請については、個別の事情を確認のうえ対応可否を判断します。`,
      ],
    },
    {
      heading: '2. 申請方法',
      paragraphs: [
        '次のいずれかの方法で、注文番号（購入確認メールに記載）と返金を希望される理由を添えてご連絡ください。',
      ],
      items: [
        '購入確認メールへの返信',
        `サポート窓口: ${SITE.supportUrl}`,
      ],
    },
    {
      heading: '3. 返金の対象となる例',
      items: [
        '動作環境を満たしているにもかかわらず、本ソフトウェアが起動しない、または Pro 機能が利用できない場合',
        '重複して購入された場合',
        '誤って購入された場合',
      ],
    },
    {
      heading: '4. 返金をお受けできない場合',
      items: [
        `ご購入日から ${SITE.refundWindowDays} 日を大幅に超えている場合`,
        'ライセンスキーの第三者への譲渡・共有・再配布が確認された場合',
        '利用規約に違反する利用が確認された場合',
      ],
    },
    {
      heading: '5. 返金後のライセンス',
      paragraphs: [
        '返金が完了したライセンスキーは無効となり、有効化済みのデバイスにおける Pro 機能は、次回のライセンス再検証時に利用できなくなります。Free 機能は引き続きご利用いただけます。',
      ],
    },
    {
      heading: '6. 返金の実行',
      paragraphs: [
        `返金は ${SITE.merchant} を通じて、原則としてご購入時と同じ決済手段へ返金されます。着金までに要する日数は、カード会社等の処理により異なります。`,
      ],
    },
    {
      heading: '7. お問い合わせ',
      paragraphs: [
        `返金に関するご不明点は、サポート窓口（${SITE.supportUrl}）または購入確認メールへの返信によりお問い合わせください。`,
      ],
    },
  ],
  summaryEn: {
    heading: 'Summary (English)',
    paragraphs: [
      `Pro licenses for Novexar Server Manager are sold through ${SITE.merchant}, which acts as the Merchant of Record. A refund can be requested within ${SITE.refundWindowDays} days of purchase by replying to the purchase confirmation email or by contacting us through our support page.`,
      'Please include your order number and the reason for the request. Typical grounds for a refund include the application failing to run or the Pro features not working on a supported system, duplicate purchases, and accidental purchases.',
      'Refunds may be declined when the request falls well outside the refund window, or when the license key has been shared or redistributed in breach of the terms of service.',
      'Once a refund is issued, the license key is revoked and Pro features stop working at the next license revalidation; the free tier remains available. Refunds are returned to the original payment method through the payment provider.',
    ],
  },
  metaTitleEn: 'Refund Policy — Novexar',
  metaDescriptionEn: `Refund policy for Novexar Server Manager: request a refund within ${SITE.refundWindowDays} days of purchase via the purchase confirmation email or our support page. Payments are handled by ${SITE.merchant} as Merchant of Record.`,
};
