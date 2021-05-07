<div style="background:none" class="rounded-3xl px-2 py-2 text-center">
    <p style="color:{textSidebar}">{ui}:</p>
    <p style="color:{textSidebar}">{hex}</p>
    <div class="mt-2">
        <span style="background-color:{bgEditor}" class="shadow-lg p-1 pt-2 rounded-lg">
            <input type="color" bind:value={hex} style="background: none" on:input={updateColor}/>
        </span>
    </div>
</div>



<script>
    export let name;
    export let hex;
    export let ui;

    import { colorMap } from "../javascript/stores"

    let bgEditor;
    let bgSidebar;
    let textSidebar;

    $: bgEditor = $colorMap.get("editor bg")
    $: bgSidebar = $colorMap.get("sidebar bg")
    $: textSidebar = $colorMap.get("sidebar text")

    function updateColor() {
        $colorMap = $colorMap.set( name, hex) 
        console.log($colorMap.get(name))
        //console.log(color2)
    }
    
</script>