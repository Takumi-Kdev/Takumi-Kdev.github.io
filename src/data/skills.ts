// ============================================================
// skills.ts — できること / これから学ぶこと
// ============================================================

export const SKILLS_CAN = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript / JavaScript', 'Dart', 'HTML / CSS'],
  },
  {
    title: 'Frameworks / Tools',
    items: ['Astro', 'Flutter', 'React', 'FastAPI', 'Node.js', 'SQLite'],
  },
  {
    title: 'AI',
    items: ['LLM活用（プロンプト設計）', 'AIエージェント', '音声合成・文字起こし', '画像・動画生成の組み合わせ'],
  },
  {
    title: 'Infra / Workflow',
    items: ['Git / GitHub', 'GitHub Actions', 'Cloudflare（Pages / Workers）', 'Firebase'],
  },
] as const;

export const SKILLS_LEARNING = [
  'テスト設計（自動テストを書く習慣）',
  'クラウド設計（セキュリティと権限まわり）',
  'データベース設計の基礎',
  '英語での技術文書',
] as const;
