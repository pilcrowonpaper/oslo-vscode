<body>
  {#if loadDelay == true}
  <div class="container mx-auto px-10 font-mono pt-12 mb-36" style="color:{textActivity}" transition:fade>
    <p class="text-3xl">Oslo</p>
    <p class="text-base mb-6">VSCode Theme Generator</p>

  {#if $pageType == "editor" && selectedPage == "editor"}
  <div class="pt-6 font-mono text-sm">

    {#if loadBox == true}
    <div class="pl-6 justify-content-start space-x-6" style="color:{textActivity}" transition:fade>
      <button on:click={() => {pageType.set("instructions")}}>How do I use it?</button>
      <button on:click={() => {pageType.set("about")}}>How does it work?</button>
    </div>
    {/if}
    {#if loadBox == true}
    <div style="background-color:{bgSidebar}" class="p-4 rounded-3xl mb-10" transition:fly="{{ y: 100, duration: 700 }}">
      <div class="flex flex-wrap container justify-center">
        {#each colors as { name, hex, ui}, i}
        <ColorSelect {name} {hex} {ui} />
        {/each}
      </div>
    </div>
    {/if}
    <div>
    </div>
    {#if loadBox == true}
    <CodeBox/>
    {/if}
    
  
  </div>
  {:else if $pageType == "instructions" && selectedPage == "instructions"}
  
  <div class="pt-6 font-mono text-sm">
    {#if loadBox == true}
    <div class="pl-6 justify-content-start space-x-6" style="color:{textActivity}" transition:fade>
      <button on:click={() => {pageType.set("editor")}}>Back to editor</button>
    </div>
    <Instructions/>
    {/if}
  </div>
  {:else if $pageType == "about" && selectedPage == "about"}
  
  <div class="pt-6  font-mono text-sm">
    {#if loadBox == true}
    <div class="pl-6 justify-content-start space-x-6" style="color:{textActivity}" transition:fade>
      <button on:click={() => {pageType.set("editor")}}>Back to editor</button>
    </div>
    <About/>
    {/if}
  </div>
  
  {/if}
  {#if loadFox == true}
  <div transition:fade="{{ duration: 700 }}">
    <div class="pb-24 pt-10">
      <div>
        <Fox/>
      </div>
      <p class="text-center text-sm select-none">Boop the fox if you enjoyed it!</p>
      <p class="text-center text-sm select-none">Boop Counter: {$boopCount}</p>
    </div>
    <div class="flex justify-center">
      <a class="text-center text-sm select-none" href="https://twitter.com/pilcrowonpaper"> made by pilcrow</a>
    </div>
  </div>
  {/if}
</div>
{/if}

</body>

<script>
  import CodeBox from "./components/CodeBox.svelte"
  import ColorSelect from "./components/ColorSelect.svelte"
  import Instructions from "./page/Instructions.svelte"
  import About from "./page/About.svelte"
  import Fox from "./components/Fox.svelte"

  import {colors, colorMap, pageType, boopCount} from "./javascript/stores"
  import {fly, fade} from "svelte/transition"


  let loadBox = false;
  let loadDelay = false;
  let loadFox = false;

  let bgSidebar;
  let bgActivity
  let textActivity;

  let selectedPage = "editor";

  $: bgSidebar = $colorMap.get("sidebar bg")
  $: bgActivity = $colorMap.get("activity bar bg")
  $: textActivity = $colorMap.get("activity bar text")
  $: document.body.style.backgroundColor = bgActivity;

  $: setTimeout(function(){ 
      loadBox = true;
    }, 1200);

    setTimeout(function(){
      loadDelay = true;
    }, 500)

    setTimeout(function(){
      loadFox = true;
    }, 2500)

    $: setTimeout(function(){ 
        selectedPage = $pageType;
    }, 1500);

    

</script>
