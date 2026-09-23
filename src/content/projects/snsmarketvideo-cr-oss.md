---
title: SNSmarketVideo-CR-OSS
category: ai
categoryLabel: 業務自動化
year: '2026'
status: 公開中（GitHub）
order: 2
summaryJa: SNS動画の台本から投稿までを、AIエージェントが自動化。
summaryEn: An orchestration system that automates SNS video production and posting.
highlights:
  - 台本・3D・音声・字幕・投稿までの一気通貫
  - マルチエージェント協調とトレンド分析
  - デスクトップUI＋スマホ同期（WebSocket）
tech: [Python, FastAPI, React, TypeScript, DeepSeek, Whisper, Blender]
repo: https://github.com/Takumi-Kdev/SNSmarketVideo-CR-OSS
---

## 概要

SNSマーケティング向けの動画制作を、**台本作成から投稿まで一気通貫**で自動化するシステムです。
台本生成、3Dアニメーション、音声合成、字幕、編集、そして YouTube / TikTok への投稿までを、
複数のエージェントが役割を分担しながら進めます。

## 背景

SNS運用は、企画・撮影・編集・投稿を毎日続ける必要があり、一人で回すには限界があります。
「人がやるべき判断」と「機械でよい作業」を分けたら、どこまで自動化できるかを試したくて作りました。

## 設計

- **バックエンド**: Python（FastAPI）。各工程をエンジンとして分離（TTS / Animation / Music / Whisper など）
- **フロントエンド**: React のデスクトップUI。スマホとは WebSocket で同期し、外出先からも進行を確認
- **エージェント**: 台本生成（DeepSeek）、トレンド分析、投稿までを協調して実行
- **メディア処理**: Blender + Rigify で3Dアニメーション、Piper で音声、Whisper で字幕

## 実装のポイント

- トレンド分析の結果を台本生成に渡し、企画の方向を毎回更新する
- 縦型（ショート）と横型（長尺）の両方に対応し、横→ショートの変換も行える
- 音声・字幕・BGM のタイミングを1つのタイムラインに集約してから書き出す

## つまずきと解決

工程ごとにファイル形式と時間軸がばらばらで、結合時にズレが生まれました。
そこで「中間タイムライン」を定義し、各エンジンはそこに書き出すだけ、という役割分担に変更。
結果として、工程の入れ替えや追加がしやすい構造になりました。

## 学び・次にやること

自動化は「全部を置き換える」より「人が判断すべき点を残す」設計のほうが、実用的で壊れにくい。
次は投稿後の反応を分析して、次の企画に反映するループを強くしたいです。
