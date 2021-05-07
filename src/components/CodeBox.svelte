<div>
    <div transition:fly="{{ y: 180, duration: 1500 }}" class="mx-auto container">
        <Menu/>
        <div style="background-color:{bgSidebar}" class="rounded-3xl px-16 py-16">
            {#if !selectedCode}
            <LoadCode/>
            {:else if selectedCode == "js" && $codeType == "js"}      
            <JSCode/>
            {:else if selectedCode == "css" && $codeType == "css"}
            <CSSCode/>
            {:else if selectedCode == "html" && $codeType == "html"}
            <HTMLCode/>
            {:else if selectedCode == "vsc" && $codeType == "vsc"}
            <VSCode/>
            {/if}
            
        </div>
    </div>
</div>

<script>
    import {fly} from "svelte/transition"
    import JSCode from "./code/JSCode.svelte";
    import HTMLCode from "./code/HTMLCode.svelte";
    import CSSCode from "./code/CSSCode.svelte";
    import VSCode from "./code/VSCode.svelte"
    import Menu from "./Menu.svelte"
    import LoadCode from "./code/LoadCode.svelte"
    import {codeType, colorMap} from "../javascript/stores"

    let bgSidebar;

    $: bgSidebar = $colorMap.get("sidebar bg")
    $: console.log($codeType)

    let selectedCode;

    $: setTimeout(function(){ 
        selectedCode = $codeType;
    }, 700);

    

</script>

