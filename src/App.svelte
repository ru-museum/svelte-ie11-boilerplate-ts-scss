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
<h2>動作テスト</h2>
  <h3>● TypeScript</h3>

<pre>
   <div>
&lt;script <strong>lang="ts"</strong>&gt;

   const buttons<strong>: string</strong> = [
     &#123; name: "foo", color: "red"  &#125;,
     &#123; name: "bar", color: "blue" &#125;,
     &#123; name: "baz", color: "green"&#125;
   ];

&lt;/script&gt;

   </div>
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
   <div>
&lt;style <strong>lang="scss"</strong>&gt;

   //変数の宣言 
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
   </div>
   
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


   //変数の宣言 
   $bgcolor: #e1f5fe;  
   $width: 400px;
   $color: green;
   
   pre div {
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
      }
   }

   strong {
      color: $color;
   }

   .btn{
      margin-right: 20px;
      color:#fff;
      padding:16px;
      border-radius:12px;
   }


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
