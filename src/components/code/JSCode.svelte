
<div style="background-color:{bgEditor}" class="rounded-2xl px-10 shadow-md" transition:fly="{{ y: 100, duration: 700 }}">
    <div class="container pt-6 pb-10">
        <pre style="color:{color9}">
            {@html jsCode}
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

let jsCode;

$: jsCode =
`
<span style="color:${color2}">// @see https://github.com/exah/promise-anime</span>
<span style="color:${color8}">const </span><span>$nodes </span><span style="color:${color8}">= </span><span>document</span><span>.</span><span style="color:${color4}">querySelectorAll</span><span>(</span><span style="color:${color5}">'</span><span style="color:${color7}">.js-animate</span><span style="color:${color5}">'</span><span>)</span>

<span style="color:${color8}">const </span><span>animations </span><span style="color:${color8}">= </span><span style="color:${color13}">Array</span><span>.</span><span style="color:${color4}">from</span><span>($nodes)</span><span>.</span><span style="color:${color4}">reduce</span><span>(</span>
  <span style="color:${color5}">(</span><span style="color:${color11}">promise</span><span style="color:${color5}">, </span><span style="color:${color11}">$el</span><span style="color:${color5}">) </span><span style="color:${color8}">=> </span><span>promise</span><span>.</span><span style="color:${color4}">then</span><span>(</span><span style="color:${color5}">() </span><span style="color:${color8}">=></span>
    <span style="color:${color4}">promiseAnime</span><span>(</span><span style="color:${color5}">{</span>
      <span>targets</span><span style="color:${color5}">: </span><span>$el</span><span style="color:${color5}">,</span>
      <span>opacity</span><span style="color:${color5}">: </span><span>[</span><span style="color:${color11}">0</span><span style="color:${color5}">, </span><span style="color:${color11}">1</span><span>]</span><span style="color:${color5}">,</span>
      <span>translateY</span><span style="color:${color5}">: </span><span>[</span><span style="color:${color11}">50</span><span style="color:${color5}">, </span><span style="color:${color11}">0</span><span>]</span><span style="color:${color5}">,</span>
      <span style="color:${color4}">func</span><span style="color:${color5}">: </span><span style="color:${color8}">function</span><span style="color:${color5}">() {
        return </span><span style="color:${color12}">this</span><span style="color:${color5}">.</span><span style="color:${color10}">targets</span><span style="color:${color5}">;</span>
      <span style="color:${color5}">}</span>
    <span style="color:${color5}">}</span><span>)</span>
  <span>)</span><span style="color:${color5}">,</span>
  <span style="color:${color13}">Promise</span><span style="color:${color5}">.</span><span style="color:${color4}">resolve</span><span>()</span>
<span>)</span>

<span>animations<span></span><span style="color:${color5}">.</span><span style="color:${color4}">then</span><span>(</span><span style="color:${color5}">() </span><span style="color:${color8}">=> </span><span>console</span><span style="color:${color5}">.</span><span style="color:${color4}">log</span><span>(</span><span style="color:${color5}">'</span><span style="color:${color7}">complete</span><span style="color:${color5}">'</span><span>))</span>

<span style="color:${color2}">// @exah/promise-anime module content:</span>
<span style="color:${color8}">const </span><span style="color:${color4}">isFn </span><span style="color:${color8}">= </span><span style="color:${color11}">el </span><span style="color:${color8}">=> typeof </span><span>el </span><span style="color:${color8}">=== </span><span style="color:${color5}">'</span><span style="color:${color7}">function</span><span style="color:${color5}">'</span>

<span style="color:${color8}">function </span><span style="color:${color4}">promiseAnime </span><span style="color:${color5}">(</span><span style="color:${color11}">options</span><span style="color:${color5}">, </span><span style="color:${color11}">handleInstance</span><span style="color:${color5}">) </span><span style="color:${color5}">{</span>
  <span style="color:${color5}">return </span><span style="color:${color8}">new </span><span style="color:${color13}>"Promise</span><span>(</span><span style="color:${color11}">resolve </span><span style="color:${color8}">=> </span><span style="color:${color5}">{</span>
    <span style="color:${color8}">const </span><span style="color:${color5}">{ </span><span style="color:${color10}">complete </span><span style="color:${color5}">} </span><span style="color:${color8}">= </span><span style="color:${color10}">options</span>

    <span style="color:${color8}">const </span><span style="color:${color10}">animeInstance </span><span style="color:${color8}"> = </span><span style="color:${color4}">anime</span><span>(</span><span style="color:${color5}">{</span>
      <span style="color:${color8}">...</span><span style="color:${color10}">options</span><span style="color:${color5}">,</span>
      <span style="color:${color4}">complete </span><span style="color:${color5}">(</span><span style="color:${color11}">animation</span></span style="color:${color5}">) </span><span style="color:${color5}">{</span>
        <span style="color:${color5}">if </span><span>(</span><span style="color:${color4}">isFn</span><span>(</span><span style="color:${color10}">complete</span><span>)) </span><span style="color:${color4}">complete</span><span>(</span><span style="color:${color10}">animation</span><span>)</span>
        <span style="color:${color4}">resolve</span><span>(</span><span style="color:${color10}">animation</span><span>)</span>
      <span style="color:${color5}">}</span>
    <span style="color:${color5}">}</span><span>)</span>

    <span style="color:${color5}">if </span><span>(</span><span style="color:${color4}">isFn</span><span>(</span><span style="color:${color10}">handleInstance</span><span>)) </span><span style="color:${color4}">handleInsstance</span><span>(</span><span style="color:${color10}">animeInstance</span></span>)</span>
  <span style="color:${color5}">}</span><span>)</span>
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

