# Sakura Candle Demo

架空のキャンドルアーティスト **Haru** の公式サイト練習用デモです。

## サイト概要

- ブランド名：Sakura Candle
- アーティスト名：Haru
- 目的：キャンドルアーティスト向け公式サイト制作の練習
- 技術：React / Vite
- 公開予定URL：<https://bschoice.github.io/sakura-candle-demo/>

## ローカル確認

```bash
npm install
npm run dev
```

## 公開用ビルド

```bash
npm run build
```

## GitHub Pages

`.github/workflows/deploy.yml` にGitHub Pages用の自動公開設定を入れています。
GitHubの Settings → Pages で Source を **GitHub Actions** にすると、mainブランチ更新時に自動公開されます。
