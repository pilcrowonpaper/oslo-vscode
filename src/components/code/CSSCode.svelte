
<div style="background-color:{bgEditor}" class="rounded-2xl px-10 shadow-md" transition:fly="{{ y: 100, duration: 700 }}">
    <div class="container pt-6 pb-10">
        <pre style="color:{color6}">
            {@html cssCode}
        </pre>
    </div>
</div>


<script>
    import { fly } from 'svelte/transition';
    import { colorMap } from "../../javascript/stores"

    let color1;
    let color2;
    let color3;
    let color4;
    let color5;
    let color6;
    let color7;
    let color8;
    let color9;
    let color10;
    let color11;
    let color12;
    let color13;
    let color14;

    let bgEditor;



$: color1 = $colorMap.get("color1")
$: color2 = $colorMap.get("color2")
$: color3 = $colorMap.get("color3")
$: color4 = $colorMap.get("color4")
$: color5 = $colorMap.get("color5")
$: color6 = $colorMap.get("color6")
$: color7 = $colorMap.get("color7")
$: color8 = $colorMap.get("color8")
$: color9 = $colorMap.get("color9")
$: color10 = $colorMap.get("color10")
$: color11 = $colorMap.get("color11")
$: color12 = $colorMap.get("color12")
$: color13 = $colorMap.get("color13")
$: color14 = $colorMap.get("color14")

$: bgEditor = $colorMap.get("editor bg")

let cssCode;




$: cssCode =
`
<span style="color:${color10}">body </span><span style="color:${color5}">{</span>
  <span>height</span><span style="color:${color5}">: </span><span style="color:${color11}">100vh</span><span style="color:${color5}">;</span>
  <span>margin</span><span style="color:${color5}">: </span><span style="color:${color11}">0</span><span style="color:${color5}">;</span>
  <span>padding</span><span style="color:${color5}">: </span><span style="color:${color11}">0</span><span style="color:${color5}">;</span>
  <span>border</span><span style="color:${color5}">: </span><span style="color:${color11}">0</span><span style="color:${color5}">;</span>
  <span>color</span><span style="color:${color5}">: </span><span style="color:${color14}">#eee</span><span style="color:${color5}">;</span>
  <span>background-color</span><span style="color:${color5}">: </span><span style="color:${color14}">#000</span><span style="color:${color5}">;</span>
  <span>overflow</span><span style="color:"${color5}">: </span><span style="color:${color11}">hidden</span><span style="color:${color5}">;</span>
<span style="color:${color5}">}</span>
<span style="color:${color10}">body </span><span style="color:${color5}">{</span>
  <span>display</span><span style="color:${color5}">: </span><span style="color:${color11}">flex</span><span style="color:${color5}">;</span>
  <span>align-items</span><span style="color:${color5}">: </span><span style="color:${color11}">center</span><span style="color:${color5}">;</span>
  <span>justify-content</span><span style="color:${color5}">: </span><span style="color:${color11}">center</span><span style="color:${color5}">;</span>
  <span>align-content</span><span style="color:${color5}">: </span><span style="color:${color11}">center</span><span style="color:${color5}">;</span>
<span style="color:${color5}">}</span>

<span style="color:${color13}">lds-ripple </span><span style="color:${color5}">{</span>
  <span>display</span><span style="color:${color5}">: </span><span style="color:${color11}">flex</span><span style="color:${color5}">;</span>
  <span>position</span><span style="color:${color5}">: </span><span style="color:${color11}">relative</span><span style="color:${color5}">;</span>
  <span>width</span><span style="color:${color5}">: </span><span style="color:${color11}">300px</span><span style="color:${color5}">;</span>
  <span>height</span><span style="color:${color5}">: </span><span style="color:${color11}">300px</span><span style="color:${color5}">;</span>
  <span>margin</span><span style="color:"${color5}">: </span><span style="color:${color11}">auto</span><span style="color:${color5}">;</span>
<span style="color:${color5}">}</span>
<span style="color:${color13}">lds-ripple </span><span style="color:${color10}">div </span><span style="color:${color5}">{</span>
  <span>position</span><span style="color:${color5}">: </span><span style="color:${color11}">absolute</span><span style="color:${color5}">;</span>
  <span>border</span><span style="color:${color5}">: </span><span style="color:${color11}">4px solid </span><span style="color:${color14}">#fff</span><span style="color:${color5}">;</span>
  <span>opacity</span><span style="color:${color5}">: </span><span style="color:${color11}">1</span><span style="color:${color5}">;</span>
  <span>border-radius</span><span style="color:${color5}">: </span><span style="color:${color11}">50%</span><span style="color:${color5}">;</span>
  <span>animation</span><span style="color:"${color5}">: </span><span style="color:${color9}">lds-ripple </span><span style="color:${color11}">1s </span><span style="color:${color4}">cubic-bezier</span><span style="color:${color5}">(</span><span style="color:${color11}">0</span><span style="color:${color5}">, </span><span style="color:${color11}">0.2</span><span style="color:${color5}">, </span><span style="color:${color11}">0.8</span><span style="color:${color5}">, </span><span style="color:${color11}">1</span><span style="color:${color5}">)</span><span style="color:${color11}"> infinite</span><span style="color:${color5}">;</span>
<span style="color:${color5}">}</span>
<span style="color:${color13}">lds-ripple </span><span style="color:${color10}">div</span><span style="color:${color5}">:</span><span style="color:${color8}">nth-child</span><span style="color:${color5}">(</span><span style="color:${color11}">2</span><span style="color:${color5}">) {</span>
  <span>animation-delay</span><span style="color:${color5}">: </span><span style="color:${color11}">-0.5s</span><span style="color:${color5}">;</span>
<span style="color:${color5}">}</span>

<span style="color:${color5}">@keyframes </span><span style="color:${color11}">lds-ripple </span><span style="color:${color5}">{</span>
  <span style="color:${color9}">0% </span><span style="color:${color5}">{</span>
    <span>top</span><span style="color:${color5}">: </span><span style="color:${color11}">150px</span><span style="color:${color5}">;</span>
    <span>left</span><span style="color:${color5}">: </span><span style="color:${color11}">150px</span><span style="color:${color5}">;</span>
    <span>width</span><span style="color:${color5}">: </span><span style="color:${color11}">0</span><span style="color:${color5}">;</span>
    <span>height</span><span style="color:${color5}">: </span><span style="color:${color11}">0</span><span style="color:${color5}">;</span>
    <span>opacity</span><span style="color:"${color5}">: </span><span style="color:${color11}">1</span><span style="color:${color5}">;</span>
  <span style="color:${color5}">}</span>
  <span style="color:${color9}">100% </span><span style="color:${color5}">{</span>
    <span>top</span><span style="color:${color5}">: </span><span style="color:${color11}">0px</span><span style="color:${color5}">;</span>
    <span>left</span><span style="color:${color5}">: </span><span style="color:${color11}">0px</span><span style="color:${color5}">;</span>
    <span>width</span><span style="color:${color5}">: </span><span style="color:${color11}">300px</span><span style="color:${color5}">;</span>
    <span>height</span><span style="color:${color5}">: </span><span style="color:${color11}">300px</span><span style="color:${color5}">;</span>
    <span>opacity</span><span style="color:"${color5}">: </span><span style="color:${color11}">0</span><span style="color:${color5}">;</span>
  <span style="color:${color5}">}</span>
<span style="color:${color5}">}</span> 
`
</script>

<style>
    pre {
            overflow-x: auto;
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
         }
</style>
