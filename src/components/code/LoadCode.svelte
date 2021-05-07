
<div style="background-color:none" class="rounded-2xl px-10 shadow-md">
    <div class="container pt-6 pb-10">
        <pre style="color:#1D1F26">
            {@html jsCode}
        </pre>
    </div>
</div>


<script>
let jsCode;

$: jsCode =
`
<span style="color:color2}">// @see https://github.com/exah/promise-anime</span>
<span style="color:color8}">const </span><span>$nodes </span><span style="color:color8}">= </span><span>document</span><span>.</span><span style="color:color4}">querySelectorAll</span><span>(</span><span style="color:color5}">'</span><span style="color:color7}">.js-animate</span><span style="color:color5}">'</span><span>)</span>

<span style="color:color8}">const </span><span>animations </span><span style="color:color8}">= </span><span style="color:color13}">Array</span><span>.</span><span style="color:color4}">from</span><span>($nodes)</span><span>.</span><span style="color:color4}">reduce</span><span>(</span>
  <span style="color:color5}">(</span><span style="color:color11}">promise</span><span style="color:color5}">, </span><span style="color:color11}">$el</span><span style="color:color5}">) </span><span style="color:color8}">=> </span><span>promise</span><span>.</span><span style="color:color4}">then</span><span>(</span><span style="color:color5}">() </span><span style="color:color8}">=></span>
    <span style="color:color4}">promiseAnime</span><span>(</span><span style="color:color5}">{</span>
      <span>targets</span><span style="color:color5}">: </span><span>$el</span><span style="color:color5}">,</span>
      <span>opacity</span><span style="color:color5}">: </span><span>[</span><span style="color:color11}">0</span><span style="color:color5}">, </span><span style="color:color11}">1</span><span>]</span><span style="color:color5}">,</span>
      <span>translateY</span><span style="color:color5}">: </span><span>[</span><span style="color:color11}">50</span><span style="color:color5}">, </span><span style="color:color11}">0</span><span>]</span><span style="color:color5}">,</span>
      <span style="color:color4}">func</span><span style="color:color5}">: </span><span style="color:color8}">function</span><span style="color:color5}">() {
        return </span><span style="color:color12}">this</span><span style="color:color5}">.</span><span style="color:color10}">targets</span><span style="color:color5}">;</span>
      <span style="color:color5}">}</span>
    <span style="color:color5}">}</span><span>)</span>
  <span>)</span><span style="color:color5}">,</span>
  <span style="color:color13}">Promise</span><span style="color:color5}">.</span><span style="color:color4}">resolve</span><span>()</span>
<span>)</span>

<span>animations<span></span><span style="color:color5}">.</span><span style="color:color4}">then</span><span>(</span><span style="color:color5}">() </span><span style="color:color8}">=> </span><span>console</span><span style="color:color5}">.</span><span style="color:color4}">log</span><span>(</span><span style="color:color5}">'</span><span style="color:color7}">complete</span><span style="color:color5}">'</span><span>))</span>

<span style="color:color2}">// @exah/promise-anime module content:</span>
<span style="color:color8}">const </span><span style="color:color4}">isFn </span><span style="color:color8}">= </span><span style="color:color11}">el </span><span style="color:color8}">=> typeof </span><span>el </span><span style="color:color8}">=== </span><span style="color:color5}">'</span><span style="color:color7}">function</span><span style="color:color5}">'</span>

<span style="color:color8}">function </span><span style="color:color4}">promiseAnime </span><span style="color:color5}">(</span><span style="color:color11}">options</span><span style="color:color5}">, </span><span style="color:color11}">handleInstance</span><span style="color:color5}">) </span><span style="color:color5}">{</span>
  <span style="color:color5}">return </span><span style="color:color8}">new </span><span style="color:color13}>"Promise</span><span>(</span><span style="color:color11}">resolve </span><span style="color:color8}">=> </span><span style="color:color5}">{</span>
    <span style="color:color8}">const </span><span style="color:color5}">{ </span><span style="color:color10}">complete </span><span style="color:color5}">} </span><span style="color:color8}">= </span><span style="color:color10}">options</span>

    <span style="color:color8}">const </span><span style="color:color10}">animeInstance </span><span style="color:color8}"> = </span><span style="color:color4}">anime</span><span>(</span><span style="color:color5}">{</span>
      <span style="color:color8}">...</span><span style="color:color10}">options</span><span style="color:color5}">,</span>
      <span style="color:color4}">complete </span><span style="color:color5}">(</span><span style="color:color11}">animation</span></span style="color:color5}">) </span><span style="color:color5}">{</span>
        <span style="color:color5}">if </span><span>(</span><span style="color:color4}">isFn</span><span>(</span><span style="color:color10}">complete</span><span>)) </span><span style="color:color4}">complete</span><span>(</span><span style="color:color10}">animation</span><span>)</span>
        <span style="color:color4}">resolve</span><span>(</span><span style="color:color10}">animation</span><span>)</span>
      <span style="color:color5}">}</span>
    <span style="color:color5}">}</span><span>)</span>

    <span style="color:color5}">if </span><span>(</span><span style="color:color4}">isFn</span><span>(</span><span style="color:color10}">handleInstance</span><span>)) </span><span style="color:color4}">handleInsstance</span><span>(</span><span style="color:color10}">animeInstance</span></span>)</span>
  <span style="color:color5}">}</span><span>)</span>
<span style="color:color5}">}</span>
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

