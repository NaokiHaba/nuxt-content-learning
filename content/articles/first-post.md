---
title: "Nuxt Content v3 でブログを作る方法"
description: "Nuxt Content v3 を使用してマークダウンベースのブログを構築する方法を解説します"
topics: ["nuxt", "markdown", "vue"]
published: true
date: 2024-03-20
---

# はじめに

Nuxt Content は Nuxt.js のコンテンツ管理モジュールで、マークダウンファイルを使用して簡単にブログやドキュメントサイトを構築できます。

# セットアップ手順

```bash
# プロジェクトの作成
npx nuxi@latest init my-blog
cd my-blog

# 必要なパッケージのインストール
npm install @nuxt/content
```

# 基本的な使い方

## マークダウンファイルの作成

`content/articles` ディレクトリにマークダウンファイルを作成します：

```markdown
---
title: "記事タイトル"
description: "記事の説明"
---

記事の内容をここに書きます
```

## 記事の表示

```vue
<template>
  <ContentDoc />
</template>
```

# マークダウンの機能

## 見出し

見出しは `#` を使用して表現します。

## コードブロック

```js
const message = 'Hello, World!'
console.log(message)
```

## メッセージボックス

::alert{type="info"}
これは通常のメッセージです
::

::alert{type="warning"}
これは警告メッセージです
::

# まとめ

Nuxt Content v3 を使用することで、以下のメリットがあります：

- マークダウンでコンテンツを管理できる
- 高速なパフォーマンス
- SEOフレンドリー
- カスタマイズ性が高い