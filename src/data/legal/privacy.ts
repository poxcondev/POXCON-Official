import { SITE } from '@/data/site';
import type { LegalDocument } from './types';

/** プライバシーポリシー。アプリはローカル完結・テレメトリなしという実態に即して記載する */
export const PRIVACY: LegalDocument = {
  slug: 'privacy',
  index: '02',
  title: 'プライバシーポリシー',
  titleEn: 'Privacy Policy',
  updated: SITE.legalUpdatedAt,
  intro: [
    `本ポリシーは、個人開発者 ${SITE.vendor}（以下「提供者」）が、ソフトウェア「Novexar Server Manager」（以下「本ソフトウェア」）および本ウェブサイトにおいて、情報をどのように取り扱うかを説明するものです。`,
  ],
  blocks: [
    {
      heading: '1. 基本方針',
      paragraphs: [
        '本ソフトウェアはデスクトップアプリケーションであり、処理は利用者の PC 上で完結します。提供者は自社のサーバーを保有しておらず、利用者の操作履歴・利用統計・クラッシュレポートを収集する仕組み（テレメトリ）を実装していません。',
        'サーバー設定、ログ、バックアップ、ライセンストークンは、すべて利用者の PC 内にのみ保存されます。',
      ],
    },
    {
      heading: '2. 本ソフトウェアが行う外部通信',
      paragraphs: [
        '本ソフトウェアは、次の目的に限って外部と通信します。いずれも機能の実行に必要な範囲に限られます。',
      ],
      items: [
        `ライセンスの有効化および定期的な再検証: ライセンスキーと、デバイス識別子をハッシュ化した値を、署名用エンドポイントを経由して ${SITE.merchant} のライセンス API に照会します。デバイス識別子の生の値は送信・保存しません。`,
        'アプリのアップデート確認: 配布リポジトリ（GitHub）の公開リリース情報を取得します。',
        'ゲームサーバーの一覧取得: 公開リポジトリ上のカタログスナップショットを取得し、検索用にローカルへキャッシュします。',
        'ゲームサーバー本体のダウンロードおよび更新: SteamCMD を通じて Valve Corporation の配信サーバーへ接続します。この通信は Valve のプライバシーポリシーの対象となります。',
      ],
    },
    {
      heading: '3. 取得しない情報',
      paragraphs: [
        '提供者は、氏名・住所・電話番号・メールアドレス等の個人情報を、本ソフトウェアを通じて取得しません。利用者が導入したゲーム、サーバー設定の内容、ログの内容が提供者へ送信されることはありません。',
      ],
    },
    {
      heading: '4. 決済に関する情報',
      paragraphs: [
        `Pro ライセンスの決済は、Merchant of Record である ${SITE.merchant} が処理します。氏名・メールアドレス・決済情報は同社が取得・管理し、提供者はクレジットカード番号等の決済情報を取得しません。`,
        '提供者は、購入者からの問い合わせに対応する範囲で、同社の管理画面を通じて注文情報およびライセンスキーの状態を確認することがあります。',
        `同社における個人情報の取扱いは、${SITE.merchantUrl} に掲載されたプライバシーポリシーに従います。`,
      ],
    },
    {
      heading: '5. 本ウェブサイトについて',
      paragraphs: [
        '本ウェブサイトは GitHub Pages 上でホストされています。提供者は、アクセス解析ツール（Google Analytics 等）およびトラッキング用の Cookie を設置していません。',
        'ホスティング事業者である GitHub, Inc. が、サービス運用のためにアクセスログ（IP アドレス等）を記録する場合があります。これは同社の管理下にあり、提供者は当該ログを参照できません。',
        '本ウェブサイトは、表示に使用するフォントを Google Fonts から読み込みます。この際、閲覧者の IP アドレス等が Google へ送信されることがあります。',
        '言語設定（日本語 / 英語）は、閲覧者のブラウザの localStorage に保存されます。これは表示設定の保持のみを目的としており、個人を識別する情報は含みません。',
      ],
    },
    {
      heading: '6. 第三者への提供',
      paragraphs: [
        '提供者は、取得した情報を第三者へ販売または提供しません。ただし、法令に基づく開示請求があった場合はこの限りではありません。',
      ],
    },
    {
      heading: '7. 本ポリシーの変更',
      paragraphs: [
        '提供者は、本ソフトウェアの仕様変更等に応じて本ポリシーを変更することがあります。変更後の内容は、本ページに掲載した時点から適用され、制定日を更新します。',
      ],
    },
    {
      heading: '8. お問い合わせ',
      paragraphs: [
        `本ポリシーに関するお問い合わせは、サポート窓口（${SITE.supportUrl}）または購入確認メールへの返信により受け付けます。`,
      ],
    },
  ],
  summaryEn: {
    heading: 'Summary (English)',
    paragraphs: [
      'Novexar Server Manager is a desktop application that runs entirely on the user’s own PC. It contains no telemetry: we do not collect usage statistics, crash reports, or the contents of server configurations and logs. Server data, settings, and license tokens are stored only on the user’s machine.',
      `The app connects to the network only to validate a license key (sent with a hashed device identifier — never the raw identifier), to check for application updates, to fetch a public game catalog snapshot, and to download game server files through SteamCMD from Valve Corporation’s servers.`,
      `Payments are processed by ${SITE.merchant} as Merchant of Record. They collect the purchaser’s name, email, and payment details; we never receive or store payment card information.`,
      'This website is hosted on GitHub Pages. We run no analytics and set no tracking cookies; the only browser storage used is a localStorage entry for the language preference. Fonts are loaded from Google Fonts, and GitHub may log requests as part of hosting.',
    ],
  },
  metaTitleEn: 'Privacy Policy — Novexar',
  metaDescriptionEn:
    'Privacy policy for Novexar Server Manager: no telemetry, local-only data, license validation via the payment provider, no analytics or tracking cookies on this website.',
};
