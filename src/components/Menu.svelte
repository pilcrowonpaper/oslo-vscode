<div class="pl-6 justify-content-start space-x-6" style="color:{textActivity}">
    <button on:click={() => {codeType.set("js")}} >JavaScript</button>
    <button on:click={() => {codeType.set("html")}} >HTML</button>
    <button on:click={() => {codeType.set("css")}} >CSS</button>
    <button on:click={() => {codeType.set("vsc")}} >VS Code</button>
</div>

<script>
    import {codeType, colorMap} from "../javascript/stores"

    let textActivity;
    $: textActivity = $colorMap.get("activity bar text")

</script>