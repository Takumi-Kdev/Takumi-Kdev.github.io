# Takumi-Kdev — Portfolio

**つくって、動かして、記録する。**
Takumi-Kdev（河合巧実）の個人ポートフォリオサイト。AIとWebのシステムを個人開発しています。

- 公開URL: https://takumi-kdev.github.io
- 仕事の依頼: [巧黄土](https://koodo-prog.com)（ホームページ制作・業務の自動化・AIの相談）

## 特徴
- 青基調のライト/ダーク切替、余白のあるレイアウト
- 作品は「背景 → 設計 → 実装 → つまずき → 学び」まで解説
- 画像を使わず、コード風カードと図で見せる
- 日本語＋英語の併記、システムフォント中心で高速

## 技術
- Astro（静的生成 / TypeScript strict）+ Tailwind CSS v4
- アイコンは Phosphor（使用分のみサブセット化・セルフホスト）
- 見出しフォントは Space Grotesk をセルフホスト
- sitemap / robots / OGP画像（resvgで生成）
- GitHub Actions → GitHub Pages

## コマンド
| コマンド | 内容 |
| :--- | :--- |
| `npm install` | 依存関係のインストール |
| `npm run dev` | 開発サーバー（localhost:4321） |
| `npm run build` | 本番ビルド（dist/） |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run check` | 型チェック |
| `npm run assets` | OGP画像・アイコンPNGの再生成 |
| `npm run icons` | 使用アイコンだけのCSS/woff2を再生成 |

## 構成
```
src/
├── components/  Monogram / SiteHeader / SiteFooter / ProjectCard / CodeCard ほか
├── content/projects/  作品（Markdown・frontmatter）
├── data/        site / skills / uses / now
├── layouts/     BaseLayout（SEO・テーマ・構造）
├── pages/       ホーム / 作品一覧・詳細 / About / Uses / Now / Contact / 404
├── styles/      global.css（トークン・ダークテーマ・共通部品）
└── utils/       seo.ts / reveal.js
```

## デプロイ
`main` ブランチに push すると GitHub Actions がビルドして GitHub Pages に公開します。
リポジトリ名はユーザーサイトの規則に合わせて **`Takumi-Kdev.github.io`** にしてください。

## メモ
- 作品の追加は `src/content/projects/` に Markdown を1つ置くだけ（`order` で並び替え）
- 近況は `src/data/now.ts`、環境は `src/data/uses.ts` を編集
