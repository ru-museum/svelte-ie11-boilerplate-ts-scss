<script lang="ts">

	export let name: string;

	const buttons: string = [
     { name: "foo", color: "red"  },
     { name: "bar", color: "blue" },
     { name: "baz", color: "green"}
	];

</script>

<main>

	<h1>Hello {name}!</h1>
	<h1>svelte-ie11-boilerplate</h1>
	<h2>
	   + TypeScript<br>&nbsp;&nbsp; + SCSS(SASS)
	</h2>
	<h4>svelte-ie11-boilerplate-ts-scss</h4>
	
	<p>
	  Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.
	</p>

</main>

<div class="container">

<h2>環境構築</h2>

  <h3>● package.json</h3>
<pre>
"@babel/core": "^7.29.0",
"@babel/plugin-syntax-dynamic-import": "7.8.3",
"@babel/plugin-transform-runtime": "^7.29.0",
"@babel/preset-env": "^7.29.2",
"@babel/runtime": "^7.29.2",
"@el3um4s/rollup-plugin-css-only": "^1.0.0",
"@el3um4s/rollup-plugin-terser": "^1.0.2",
"@rollup/plugin-babel": "^7.0.0",
"@rollup/plugin-commonjs": "^29.0.2",
"@rollup/plugin-node-resolve": "^16.0.3",
"@rollup/plugin-replace": "^6.0.3",
"@rollup/plugin-typescript": "^12.3.0",
"@tsconfig/svelte": "^5.0.8",
"core-js": "^3.49.0",
"marked": "^18.0.0",
"npm-run-all": "^4.1.5",
"rollup": "^4.60.1",
"rollup-plugin-livereload": "^2.0.5",
"rollup-plugin-svelte": "^7.2.3",
"sass": "^1.99.0",
<strong>"svelte": "^4.2.19"</strong>, (latest: 5.55.4)
"svelte-check": "^4.4.6",
"svelte-preprocess": "^6.0.3",
"tslib": "^2.8.1",
<strong>"typescript": "^5.9.3"</strong>, (latest: 6.0.2)
"whatwg-fetch": "^3.6.20"
</pre>


  <h3>● TypeScript</h3>
<pre>
// Warning：Node 24系以後から表示される様です。
[DEP0190] DeprecationWarning: Passing args to a child process with shell<br> option true can lead to security vulnerabilities, as the arguments are<br> not escaped, only concatenated.
(Use `node --trace-deprecation ...`to show where the warning was created)

１）指示のオプション指定では別の警告が表示されます。
    package.json
    "scripts": &#123;
     "dev": "<strong>NODE_OPTIONS=--trace-deprecation</strong> rollup -c -w",

２）全てを非表示にするには <strong>--no-deprecation</strong> 或いは、23系を使用します。
   // build その他も同様です
   - "dev": "rollup -c -w",
   + "dev": "NODE_OPTIONS='--no-deprecation' rollup -c -w",
</pre>

<h2>動作テスト</h2>
  <h3>● TypeScript</h3>

<pre>
&lt;script <strong>lang="ts"</strong>&gt;

   const buttons<strong>: string</strong> = [
     &#123; name: "foo", color: "red"  &#125;,
     &#123; name: "bar", color: "blue" &#125;,
     &#123; name: "baz", color: "green"&#125;
   ];

&lt;/script&gt;
</pre>    

     <div style="text-align:center;">
         {#each buttons as {name, color}, i}

            <button class="btn" 
                    style="background-color:{color};">
               {name}
            </button>

         {/each}
     </div>

  <h3>● SCSS</h3>
  
<pre>
&lt;style <strong>lang="scss"</strong>&gt;

   /* 変数の宣言 */ 
   <strong>$bgcolor</strong>: #e1f5fe;
   <strong>$width</strong>:400px;
   <strong>$color</strong>: green;

   .sample &#123;
      background-color: <strong>$bgcolor</strong>;
      width:<strong>$width</strong>;
      .content p &#123;
         color: <strong>$color</strong>;
      &#125;
   &#125;
   
&lt;/style&gt;
</pre>    

   <div class="sample">
     <h3>SCSS テスト</h3>
     <div class="content">
       <p>変数の使用</p>
     </div>
   </div> 

<br>
<br>
</div>

<style lang="scss">

	main {
		text-align: center;
	}

	main, .container {
		padding: 1em;
		width: 600px;
		margin: 0 auto;
	}
	
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

   /* 変数の宣言 */
   $bgcolor: #e1f5fe;  
   $width: 400px;
   $color: green;
   
   pre {
      background-color: #f4f9ff;
      padding: 12px;
   }

   .sample {
      background-color: $bgcolor;
      width:$width;
      margin: 0 auto;
      padding: 14px 24px;
            
      h3 {
         margin: 20px;
         font-size: 24px;
      }
      .content p {
         color: $color;
         font-size:2em;
         text-align:center;
      }
   }

   strong {
      color: $color;
   }

   .btn{
      font-size:3em;
      margin-right: 20px;
      color:#fff;
      padding:0.6em;
      border-radius:12px;
   }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
