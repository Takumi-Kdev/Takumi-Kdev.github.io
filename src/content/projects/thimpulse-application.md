---
title: Thimpulse-application
category: app
categoryLabel: アプリ
year: '2026'
status: 開発中（GitHub）
order: 4
summaryJa: 答えを急がず、問いを深めるAI対話アプリ。
summaryEn: An AI conversation app that deepens questions instead of rushing to answers.
highlights:
  - 「問いを深める」ための対話設計
  - ローカルDB（Drift）で考えの記録を蓄積
  - Riverpod + go_router の堅牢な構成
tech: [Flutter, Dart, Riverpod, Drift, go_router]
repo: https://github.com/Takumi-Kdev/Thimpulse-application
---

## 概要

Think + impulse。「答えを出そうとする衝動」そのものを探求するための、AI対話アプリです。
解決策を提示するのではなく、**問いを深める方向に誘導する**対話を核にしています。

## 背景

AIに聞けばすぐ答えが出る時代に、考える時間そのものが失われがちです。
「答えをもらう」のではなく「考えが深まる」体験をつくるには、どんな対話の設計が必要かを試しています。

## 設計

- **対話の型**: 結論を急がず、前提・理由・反例を順にたどる問いかけを組み立てる
- **状態管理**: Riverpod で対話と設定の状態を一元的に管理
- **記録**: Drift（SQLite）にローカル保存し、過去の思考をあとから振り返れるようにする
- **画面遷移**: go_router で見通しのよいルーティング。多言語対応（日本語・英語）

## 実装のポイント

- 対話の「深さ」をパラメータとして持ち、セッションごとに調整できる
- ローカル保存を前提にし、機微な内容でも安心して書けるようにする
- 依存を差し替えやすいよう、データ層とUI層を分離する

## つまずきと解決

「深い対話」を目指すほど、AIの応答が長くなり、読むのが負担になりました。
短い問いかけを積み重ねる形式に変え、1回あたりの負荷を下げる方向に調整しています。

## 学び・次にやること

AIの出力の質より、**対話の構造**のほうが体験を左右する。
次は、セッションをまたいで思考の変化をたどれるビューを作りたいです。
