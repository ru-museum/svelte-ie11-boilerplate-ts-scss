# svelte-ie11-boilerplate-ts-scss
svelte-template for IE11, TypeScript and SCSS(SASS)  
IE11、TypeScript 及び SCSS(SASS) の為のテンプレート  

# 特徴
- この Svelte apps は [https://github.com/sveltejs/template](https://github.com/sveltejs/template) に基づいています。
- TypeScript 及び SCSS(SASS) を使用する為のテンプレートです。  
　　※ TypeScript は添付のスクリプト（setupTypeScript.js）に依り導入されています。 
- 特に IE11 に対応するためのものです(バージョン 11.1087.16299.0 で確認)。  
　　※ 詳細はこちらをご覧下さい。 ⇒  [svelte-ie11-boilerplate](https://github.com/ru-museum/svelte-ie11-boilerplate)
- Android 4.4- で確認しています。  
- 開発環境：Linux(Debian), Node.js 15.8.0。  


# 構築手順
1. cron をダウンロード。  
```
npx degit ru-museum/svelte-ie11-boilerplate-ts-scss svelte-app
cd svelte-app
npm install
```

2. [Rollup](https://rollupjs.org/) をスタートします。

```
npm run dev
```

- ブラウザで [localhost:5000](http://localhost:5000/) にアクセスしますと初期画面が表示されます。

3. 公開用にビルドします。

```
npm run build
```

4. WEB 上へ公開するには、public フォルダ内の必要なファイル(.map を除く)を アップします。
