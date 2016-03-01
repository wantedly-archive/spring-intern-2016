## webpack

JavaScriptを使ったWebアプリケーションを効率よく開発するためツール。
重要なwebpackの機能を幾つか紹介する。

## Babel loader

webpackには`loader`という仕組みがあり、様々な形式のファイルを`import|require`できるようになっている。

`Babel loader`は、先ほど説明したES2015で書かれたJavaScriptを変換してくれる`Babel`を自動的に実行してくれる。

## CSS loader

`loader`の１つで、CSSファイルを`import|require`することができる。

```
import './App.css'
```

このように記述すると、JavaScript読み込み時に`<style>`タグを自動的に挿入してくれる。

![css loader](./assets/css_loader.png)

## Module Bundler

`import|require`したファイルを１つにまとめてくれる。
使う側のHTMLでは、そのJavaScript１つを`<script>`タグで読み込むだけでいい。


## Hot Module Replacement

開発中に、変更したJavaScriptだけを再読み込みして、ページ全体を再読み込みしなくてもアプリケーションをアップデートできるようにする機能。
開発効率がかなり向上する素晴らしい機能。

React Developer ToolsなどでStateが変更されている場合も、Stateを保持したままビューを入れ替えてくれる。
