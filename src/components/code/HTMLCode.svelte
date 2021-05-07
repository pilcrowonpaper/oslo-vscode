
<div style="background-color:{bgEditor}" class="rounded-2xl px-10 shadow-md" transition:fly="{{ y: 100, duration: 700 }}">
    <div class="container pt-6 pb-10">
        <pre style="color:{color9}">
            {@html htmlCode}
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

let htmlCode;




$: htmlCode =
`
<span style="color:${color5}"><</span><span style="color:${color10}">header</span><span style="color:${color5}">></span>
  <span style="color:${color5}"><</span><span style="color:${color10}">div </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">container</span><span style="color:${color5}">"></span>
    <span style="color:${color5}"><</span><span style="color:${color10}">div </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">logo</span><span style="color:${color5}">"></span>
       <span style="color:${color5}"><</span><span style="color:${color10}">a </span><span style="color:${color8}"">href</span><span style="color:${color5}">="</span><span style="color:${color7}">www.youtube.com</span><span style="color:${color5}">"></span><span style="color:${color5}"><</span><span style="color:${color10}">i </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">fas fa-table</span><span style="color:${color5}">"></span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">i<span style="color:${color5}">></span><span style="color:${color9}">Todo List</span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">a<span style="color:${color5}">></span>
    <span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">div</span><span style="color:${color5}">></span>
    <span style="color:${color5}"><</span><span style="color:${color10}">nav</span><span style="color:${color5}">></span>
       <span style="color:${color5}"><</span><span style="color:${color10}">a </span><span style="color:${color8}"">href</span><span style="color:${color5}">="</span><span style="color:${color7}">www.youtube.com</span><span style="color:${color5}">" </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">Add Row</span><span style="color:${color5}">"></span><span style="color:${color5}"><</span><span style="color:${color10}">i </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">fas fa-plus</span><span style="color:${color5}">"></span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">i<span style="color:${color5}">></span><span style="color:${color9}">Add Row</span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">a<span style="color:${color5}">></span>
    <span style="color:${color5}"><</span><span style="color:${color10}">nav</span><span style="color:${color5}">></span>
  <span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">div</span><span style="color:${color5}">></span>
<span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">header</span><span style="color:${color5}">></span>
<span style="color:${color5}"><</span><span style="color:${color10}">div </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">container</span><span style="color:${color5}">"></span>
  <span style="color:${color5}"><</span><span style="color:${color10}">table </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">table table</span><span style="color:${color5}">"></span>
    <span style="color:${color5}"><</span><span style="color:${color10}">thread </span><span style="color:${color8}"">class</span><span style="color:${color5}">="</span><span style="color:${color7}">thread</span><span style="color:${color5}">"></span>
      <span style="color:${color5}"><</span><span style="color:${color10}">tr</span><span style="color:${color5}">></span>
        <span style="color:${color5}"><</span><span style="color:${color10}">th</span><span style="color:${color5}">></span><span style="color:${color9}">Name</span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">th</span><span style="color:${color5}">></span>
        <span style="color:${color5}"><</span><span style="color:${color10}">th</span><span style="color:${color5}">></span><span style="color:${color9}">Source</span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">th</span><span style="color:${color5}">></span>
        <span style="color:${color5}"><</span><span style="color:${color10}">th</span><span style="color:${color5}">></span><span style="color:${color9}">Description</span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">th</span><span style="color:${color5}">></span>
        <span style="color:${color5}"><</span><span style="color:${color10}">th</span><span style="color:${color5}">></span><span style="color:${color9}">Edit</span><span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">th</span><span style="color:${color5}">></span>
      <span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">tr</span><span style="color:${color5}">></span>
    <span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">thread</span><span style="color:${color5}">></span>
    <span style="color:${color5}"><</span><span style="color:${color10}">tbody</span><span style="color:${color5}">></span>
      <span style="color:${color2}"><<span>!-- data is taken from JSON --</span>></span>
    <span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">tbody</span><span style="color:${color5}">></span>
  <span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">table</span><span style="color:${color5}">></span>
<span style="color:${color5}"><</span><span style="color:${color5}">/</span><span style="color:${color10}">div</span><span style="color:${color5}">></span>
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

