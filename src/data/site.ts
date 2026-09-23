// ============================================================
// site.ts — サイト全体の共通データ
// ============================================================

export const SITE = {
  handle: 'Takumi-Kdev',
  nameJa: '河合巧実',
  titleJa: '高校生開発者',
  region: '愛知県豊橋市',
  url: 'https://takumi-kdev.github.io',
  github: 'https://github.com/Takumi-Kdev',
  email: 'contact.teenext@gmail.com',
  koodoUrl: 'https://koodo-prog.com',
  taglineJa: 'つくって、動かして、記録する。',
  taglineEn: 'Build, ship, and document.',
  leadJa:
    '面倒な仕事を、仕組みに変える開発者。AIとWebのシステムを、個人開発でつくっています。',
  leadEn: 'I build systems that make tedious work disappear.',
} as const;

export const NAV = [
  { href: '/projects', label: 'Works', labelJa: '作品' },
  { href: '/about', label: 'About', labelJa: '私について' },
  { href: '/uses', label: 'Uses', labelJa: '環境' },
  { href: '/now', label: 'Now', labelJa: 'いま' },
  { href: '/contact', label: 'Contact', labelJa: '連絡' },
] as const;

export const TIMELINE = [
  { when: '2026.09', what: 'ポートフォリオサイトを公開（このサイト）' },
  { when: '2026.08', what: 'AIFunRun-Video を公開（動画の自律制作）' },
  { when: '2026.07', what: 'AIProductionOS / SNSmarketVideo / Thimpulse / YORIAI を開発・公開' },
  { when: '2026', what: '巧黄土として活動開始（ホームページ制作・業務の仕組み化）' },
  { when: '2026', what: 'AIでWebサイトを作ったのをきっかけに、開発をはじめる' },
] as const;

export const VALUES = [
  {
    title: 'つくって、確かめる',
    body: '考えすぎるより、まず小さく動かす。動くものを見てから、よくしていきます。',
  },
  {
    title: '設計を、残す',
    body: 'なぜそうしたかを書き残す。あとから自分も、他の人も読めるように。',
  },
  {
    title: 'できることを、正直に',
    body: 'できていないことは、できていないと書く。実力より、誠実さを先に。',
  },
] as const;

export const KOODO = {
  title: '仕事の依頼は、巧黄土へ',
  titleEn: 'For business inquiries',
  body: 'ホームページ制作、業務の自動化、AIの使い方相談。愛知県豊橋市の「巧黄土」として、お店や会社の「困った」をいっしょに解決しています。',
  url: 'https://koodo-prog.com',
  label: 'koodo-prog.com',
} as const;
