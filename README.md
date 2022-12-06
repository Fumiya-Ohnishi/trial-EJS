# trial-EJS

## **開発環境**
### 環境要件
- node.js：v14以上
- yarn : v1.22.10（推奨）

## **環境構築手順**
1. 本環境をクローン後、`_gulp`ディレクトリへ移動します
2. `yarn install`（初回のみ）して依存ライブラリをインストール
3. `gulp` コマンドで指定サイトのビルド・監視が開始、browsersyncによりブラウザに画面が立ち上がります

```
cd _gulp
yarn install //初回のみ
gulp
```