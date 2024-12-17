---
title: "TypeScriptの基本的な型システム入門"
description: "TypeScriptの基本的な型システムについて、実例を交えて解説します"
topics: ["typescript", "javascript", "programming"]
published: true
date: 2024-03-15
---

# TypeScriptの基本型

TypeScriptは静的型付けを提供するJavaScriptの上位集合です。

## プリミティブ型

```typescript
let str: string = "Hello"
let num: number = 42
let bool: boolean = true
```

## インターフェース

```typescript
interface User {
  id: number
  name: string
  email?: string  // オプショナルプロパティ
}
```

::alert{type="warning"}
any型の使用は極力避けましょう
::

# まとめ
型システムを活用することで、バグの早期発見とコードの品質向上が期待できます。 