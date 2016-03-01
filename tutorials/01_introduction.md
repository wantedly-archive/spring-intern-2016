## Introduction

テーマ: 「モダンなウェブアプリケーション開発入門」

## 学べる技術

以下の技術に触れて、理解を深めることができる

- React
- ES2015
- webpack

## 内容

Wantedlyの[学生向けポータル](https://www.wantedly.com/campaign/newgrad)を書き換える。


## 準備

### レポジトリのclone

```
git clone ...
cd spring-intern-2016
```

gitは入っている前提

### node.jsのインストール

最新版のnode.jsをインストールする。
[nvm](https://github.com/creationix/nvm)を使って入れるのがオススメ。

```
brew install nvm
nvm install v5.4.0
nvm use v5.4.0
```

これでnodeのインストールは完了。
続けて、依存ライブラリをインストールする。

```
npm install
```

### サーバー起動

以下のコマンドでWebサーバーが立ち上がる。
ブラウザで http://localhost:8000 を開くとアプリケーションにアクセスできる。

```
npm start
```
