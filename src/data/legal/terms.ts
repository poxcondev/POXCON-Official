import { SITE } from '@/data/site';
import type { LegalDocument } from './types';

/** 利用規約（ソフトウェア利用許諾）。正文は日本語、末尾に英語サマリ */
export const TERMS: LegalDocument = {
  slug: 'terms',
  index: '01',
  title: '利用規約',
  titleEn: 'Terms of Service',
  updated: SITE.legalUpdatedAt,
  intro: [
    `本規約は、個人開発者 ${SITE.vendor}（以下「提供者」）が提供するソフトウェア「Novexar Server Manager」（以下「本ソフトウェア」）および本ウェブサイトの利用条件を定めるものです。`,
    '本ソフトウェアをダウンロード、インストールまたは利用した時点で、本規約に同意したものとみなします。',
  ],
  blocks: [
    {
      heading: '第1条（ライセンスの許諾）',
      paragraphs: [
        '提供者は、利用者に対し、本規約に従うことを条件として、本ソフトウェアを利用する非独占的かつ譲渡不能な権利を許諾します。本ソフトウェアは販売ではなく利用許諾されるものであり、著作権その他の権利は提供者に留保されます。',
      ],
      items: [
        'Free 版: 機能の一部が制限された範囲で、無償で利用できます。',
        'Pro 版: 買い切りのライセンスキーを購入することで、Pro 機能を利用できます。月額費用は発生しません。',
        'Pro ライセンスは 1 キーにつき最大 3 台のデバイスで有効化できます。有効化済みのデバイスは購入者自身で解除し、別のデバイスへ移すことができます。',
      ],
    },
    {
      heading: '第2条（禁止事項）',
      paragraphs: ['利用者は、次の行為を行ってはなりません。'],
      items: [
        'ライセンスキーを第三者に譲渡、貸与、共有または再配布すること。',
        'ライセンス認証を回避する目的で本ソフトウェアを改変し、またはその手段を配布すること。',
        '法令に違反する目的、または第三者の権利を侵害する目的で本ソフトウェアを利用すること。',
        '本ソフトウェアを用いて、接続先サービスの利用規約に違反する行為を行うこと。',
      ],
    },
    {
      heading: '第3条（第三者のソフトウェアおよびサービス）',
      paragraphs: [
        '本ソフトウェアは、ゲームサーバーの導入・更新のために Valve Corporation が提供する SteamCMD を利用します。SteamCMD および Steam の利用には、それぞれの提供元が定める規約が適用されます。',
        '提供者は Valve Corporation と提携・承認関係にありません。Steam は Valve Corporation の商標です。本ウェブサイトおよび本ソフトウェアにおける当該名称の使用は、対応するサービスを説明する目的に限られます。',
        '各ゲームサーバーの配布条件・改変条件は、当該ゲームの権利者が定める規約に従います。',
      ],
    },
    {
      heading: '第4条（対価および決済）',
      paragraphs: [
        `Pro ライセンスの販売および決済は、Merchant of Record である ${SITE.merchant} が行います。決済手段、請求書、消費税等の取扱いは同社の定めに従います。`,
        '提供者は、利用者のクレジットカード番号その他の決済情報を取得・保持しません。',
        '返金の取扱いは、別途定める返金ポリシーによります。',
      ],
    },
    {
      heading: '第5条（免責事項）',
      paragraphs: [
        '本ソフトウェアは「現状有姿（AS IS）」で提供され、提供者は、明示・黙示を問わず、商品性、特定目的への適合性、および非侵害について、いかなる保証も行いません。',
        '本ソフトウェアが特定のゲームタイトル、特定の環境、または将来の仕様変更後も動作することを保証しません。',
        '利用者は、サーバーデータおよび設定ファイルのバックアップを自己の責任で確保するものとします。',
      ],
    },
    {
      heading: '第6条（責任の制限）',
      paragraphs: [
        '提供者は、本ソフトウェアの利用または利用不能から生じた損害について、責任を負いません。ただし、提供者の故意または重大な過失による場合はこの限りではありません。',
        '前項にかかわらず提供者が責任を負う場合、その賠償額は、当該利用者が本ソフトウェアについて実際に支払った金額を上限とします。',
        '本条は、消費者契約法その他の強行法規により無効となる範囲では適用されません。',
      ],
    },
    {
      heading: '第7条（本規約の変更）',
      paragraphs: [
        '提供者は、必要と判断した場合に本規約を変更することがあります。変更後の規約は、本ページに掲載した時点から適用されます。重要な変更を行う場合は、本ページの制定日を更新します。',
      ],
    },
    {
      heading: '第8条（準拠法および管轄）',
      paragraphs: [
        '本規約は日本法に準拠して解釈されます。本ソフトウェアまたは本規約に関して紛争が生じた場合、日本の裁判所を第一審の専属的合意管轄裁判所とします。',
      ],
    },
    {
      heading: '第9条（お問い合わせ）',
      paragraphs: [
        `本規約に関するお問い合わせは、サポート窓口（${SITE.supportUrl}）または購入確認メールへの返信により受け付けます。`,
      ],
    },
  ],
  summaryEn: {
    heading: 'Summary (English)',
    paragraphs: [
      `Novexar Server Manager is developed and provided by ${SITE.vendor}, an independent developer based in Japan. The free tier is available at no cost; the Pro tier is a one-time purchase that may be activated on up to three devices per license key.`,
      `Licenses are sold through ${SITE.merchant}, which acts as the Merchant of Record. We never receive or store payment card details.`,
      'The software is provided "as is" without warranties, and our liability is limited to the amount actually paid for the software. Steam and SteamCMD are products of Valve Corporation; we are not affiliated with or endorsed by Valve Corporation.',
      'These terms are governed by the laws of Japan. The Japanese text is the authoritative version; this summary is provided for convenience.',
    ],
  },
  metaTitleEn: 'Terms of Service — Novexar',
  metaDescriptionEn:
    'Terms of service for Novexar Server Manager: license grant, one-time Pro purchase with up to three device activations, disclaimers, and governing law (Japan).',
};
