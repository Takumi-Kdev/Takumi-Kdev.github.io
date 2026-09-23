---
title: YORIAI-Application
category: app
categoryLabel: アプリ
year: '2026'
status: 開発中（GitHub）
order: 5
summaryJa: 誰もが自分らしく居場所を見つけられるコミュニティアプリ。
summaryEn: A community app where everyone can find a place to belong.
highlights:
  - Flutterによるマルチプラットフォーム対応
  - Firebaseで認証・DB・通知を統合
  - Googleサインイン・画像投稿に対応
tech: [Flutter, Dart, Firebase, Google Sign-In]
repo: https://github.com/Takumi-Kdev/YORIAI-Application
---

## 概要

「誰もが自分らしく居場所を見つけられる」をテーマにしたコミュニティアプリです。
Flutter で iOS / Android / Web / デスクトップのマルチプラットフォーム構成をとり、
Firebase で認証・データベース・ストレージ・通知を統合しています。

## 背景

居場所とつながりは、物理的な距離や属性に左右されがちです。
オンラインでも「安心していられる場所」をつくるには何が必要かを、
実際に動くアプリとして形にしながら考えています。

## 設計

- **クロスプラットフォーム**: 1つのコードベースで複数の環境に届くように
- **認証**: Google サインインを軸に、入り口の負担を下げる
- **データ**: Firestore で投稿・プロフィールを管理、Storage に画像を保存
- **通知**: Firebase Messaging で、つながりを見失わないように
- **多言語**: 日本語・英語をはじめ複数言語に対応できる構成

## 実装のポイント

- 画面とデータの責務を分け、状態の流れを追いやすくする
- 画像投稿は、端末差を吸収するために圧縮してから送信する
- 環境ごとの差異（権限・通知・ストレージ）を抽象化して扱う

## つまずきと解決

プラットフォームごとに設定や権限の作法が異なり、同じコードでも動かない箇所が出ました。
差異を1か所に集めるアダプタ層を設け、アプリ本体からは詳細を隠すようにしました。

## 学び・次にやること

マルチプラットフォームは「同じコード」より「同じ設計」を保つことが大事。
次は、少人数でも安全に運用できるモデレーションの仕組みを考えたいです。
