# Wanoiro（和の色） React版

日本の伝統色を表示するWebアプリ。

[動くページ](https://tris5572.github.io/wanoiro-react)

React+Hooks+TypeScriptの勉強を兼ねて作ったものなので、大したことはできない。

## 使い方

「無作為選択」ボタンを押すと、ランダムに色を表示する。

テキストフィールドに文字列を入力してエンターキーを押すと、その名前の色を検索する。
今のところ、色名一覧のリストの順に前方一致したものをとにかく表示する仕様になっているので、もう少しまともな動きに改修したい。

## コードの注意点（ビルド時）

GitHub Pagesに公開するにあたり、「docsフォルダを公開する」という簡単な方法をとっている。

このため、ビルド時に `npm run build` の実行時、「所定で出来上がる build フォルダを docs へリネームする」という処理を `package.json` に追加している。

```
"build": "react-scripts build && move build docs",
```

作者の実行環境がWindowsなので `move` コマンドでフォルダ名を変更している。もしこのリポジトリのコードをLinux等の~~まともな~~環境で実行する際は、`mv` へ書き換える必要がある。
