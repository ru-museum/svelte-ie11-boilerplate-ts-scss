# svelte-ie11-boilerplate-ts-scss
svelte-template for IE11, TypeScript and SCSS(SASS)  
IE11、TypeScript 及び SCSS(SASS) の為のテンプレート  

**[ 注意 ]** 　元となる **sveltejs/template** は既に更新が止まり **Public Archive** となり **vite** への移行が促されていますのでご注意下さい。

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
## 【注意１】
- GitHub では**社会情勢に伴い** branch の名称が master から **main** に変更されています。  
degit 側で未対応の為、以下のエラーが出る場合は明示的に指定して下さい。   　　  
```
! could not find commit hash for master
```
-  **main** を指定して実行
```
npx degit ru-museum/svelte-ie11-boilerplate-ts-scss#main svelte-app
```

2. [Rollup](https://rollupjs.org/) をスタートします。

```
npm run dev
```

- ブラウザで [localhost:5000](http://localhost:5000/) にアクセスしますと初期画面が表示されます。
- 画面で各サンプルが正しく表示されていることを確認して下さい。

<!--
## 【注意１】
- ファイル **global.d.ts** が src フォルダに無い場合は以下のエラーが表示されます。   　　  
```
(!) Plugin typescript: @rollup/plugin-typescript TS2307: Cannot find module './App.svelte' or its corresponding type declarations.
src/main.ts: (1:17)
1 import App from './App.svelte';
```
### ★対処法
- CRON では TypeScript に必要な **global.d.ts** ファイルを何故か認識せずダウンロードに含まれません。  
※ ZIP ダウンロードでは含まれます。
- **global.d.ts** が src フォルダに無い場合は以下のスクリプトを実行すると生成されます。   　　  
```
node scripts/createGlobal.d.ts.js 
```
　　※ 同梱の setupTypeScript.js でも可能ですが、重複されて記述されますのでその部分の削除が必要となります。
-->


3. 公開用にビルドします。

```
npm run build
```
## 【注意２】

* build 時に以下の警告が表示される場合は一部を修正して下さい。
```
(!) Plugin typescript: @rollup/plugin-typescript: Typescript 'sourceMap' compiler option must be set to generate source maps.
```
**rollup.config.js**：  
【修正】  sourcemap: true　⇒ **sourcemap: !production**

```
export default {
    input: 'src/main.ts',
    output: {
    // sourcemap: true,  
    sourcemap: !production,
```
※ [参考：stackoverflow](https://stackoverflow.com/questions/63128597/how-to-get-rid-of-the-rollup-plugin-typescript-rollup-sourcemap-option-must)

4. WEB 上へ公開するには、public フォルダ内の必要なファイル(.map を除く)を アップします。

## 【注意３】
(2022-12-11)
* Rollup のバージョンアップ（v.3）に伴い以下のパッケージに不具合が生じています。
```
    "rollup-plugin-css-only": "^3.1.0",
    "rollup-plugin-terser": "^7.0.2",
```
```
Could not resolve dependency:
npm ERR! peer rollup@"1 || 2" from rollup-plugin-css-only@3.1.0
npm ERR! node_modules/rollup-plugin-css-only
npm ERR!   dev rollup-plugin-css-only@"^3.1.0" from the root project
....
npm ERR! Could not resolve dependency:
npm ERR! peer rollup@"^2.0.0" from rollup-plugin-terser@7.0.2
npm ERR! node_modules/rollup-plugin-terser
npm ERR!   dev rollup-plugin-terser@"^7.0.2" from the root project
```
* rollup-plugin-css-only のパッケージ作者は更新終了を宣告しており、解決方法は以下の解説に依っています。  
Samuele：[How To Update Rollup to Version 3](https://betterprogramming.pub/how-to-update-rollup-to-version-3-10c59139cbeb)

### 【解決方法】

1. パッケージを削除します。
```
    npm uninstall rollup-plugin-css-only rollup-plugin-terser
```
2. Samuele 氏提供のパッケージをインストールします。
```
npm install @el3um4s/rollup-plugin-css-only @el3um4s/rollup-plugin-terser
```
3. package.json を編集します。
```
  + "type": "module",
```
4. rollup.config.js を編集します。
```
- import { terser } from 'rollup-plugin-terser';
+ import { terser } from "@el3um4s/rollup-plugin-terser";
- import css from 'rollup-plugin-css-only';
+ import css from "@el3um4s/rollup-plugin-css-only";
- import { scss } from 'svelte-preprocess';
+ import pkg from 'svelte-preprocess';
+ const { scss } = pkg;
+ import { spawn } from "child_process";

- server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
+ server = spawn('npm', ['run', 'start', '--', '--dev'], {

```
## 【注意4】
(2023-04-13)
* typescript のバージョンアップ（5.0）に伴い以下のエラー表示されます。
* deprecated  importsNotUsedAsValues, preserveValueImports
```
tsconfig options "importsNotUsedAsValues" and "preserveValueImports" are deprecated. Either set "ignoreDeprecations" to "5.0" in your tsconfig.json to silence this warning, or replace them in favor of the new "verbatimModuleSyntax" flag.
LiveReload enabled
(!) Plugin typescript: @rollup/plugin-typescript TS5101: Option 'importsNotUsedAsValues' is deprecated and will stop functioning in TypeScript 5.5. Specify compilerOption '"ignoreDeprecations": "5.0"' to silence this error.
  Use 'verbatimModuleSyntax' instead.
(!) Plugin typescript: @rollup/plugin-typescript TS5101: Option 'preserveValueImports' is deprecated and will stop functioning in TypeScript 5.5. Specify compilerOption '"ignoreDeprecations": "5.0"' to silence this error.
  Use 'verbatimModuleSyntax' instead.
```
* 解決方法は以下の解説に依っています。  
参照：[TypeScript errors and how to fix them : TS5101](https://typescript.tv/errors/)

### 【解決方法】
tsconfig.json　
```
  "compilerOptions": {
    “ignoreDeprecations”: “5.0”
  }
``
