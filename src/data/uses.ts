// ============================================================
// uses.ts — 開発環境・道具
// ============================================================

export const USES = [
  {
    title: 'Hardware',
    icon: 'ph ph-desktop',
    items: [
      { name: 'MacBook', note: '開発のメイン環境' },
      { name: 'Windows PC', note: '動画・3D（Blender）や検証用' },
    ],
  },
  {
    title: 'Editor',
    icon: 'ph ph-code',
    items: [
      { name: 'VS Code', note: '拡張機能は最小限に' },
      { name: 'AIコーディング環境（MCP対応）', note: '設計・実装・レビューの相棒' },
    ],
  },
  {
    title: 'Development',
    icon: 'ph ph-terminal-window',
    items: [
      { name: 'Astro', note: 'このサイトと巧黄土のサイト' },
      { name: 'Flutter / Dart', note: 'アプリ開発' },
      { name: 'Python', note: '自動化・動画・AIの組み込み' },
      { name: 'Git / GitHub', note: 'すべてのコードと履歴' },
    ],
  },
  {
    title: 'AI',
    icon: 'ph ph-sparkle',
    items: [
      { name: 'LLM API（DeepSeek 等）', note: '台本生成・文章・コード支援' },
      { name: 'Whisper', note: '文字起こし・字幕' },
      { name: 'Piper', note: '音声合成（TTS）' },
      { name: 'MCP', note: 'AIからツールを操作するための接続' },
    ],
  },
] as const;
