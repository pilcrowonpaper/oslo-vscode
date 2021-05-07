<div>
    <div transition:fly="{{ y: 180, duration: 1500 }}" class="mx-auto container">
        <div class="px-16 py-4">
            <p>Well, Hello!<br><br>
                I'm pilcrow, and I like to make something. My current hobby is coding and this is a random little website I made.<br>
                <br>
                If you have any suggestions or questions, send me a message via <a href="https://twitter.com/pilcrowonpaper">twitter</a> or <a href="https://www.reddit.com/user/-TheRightTree-">reddit</a>.<br>
                <br>
                This website uses Svelte to make it reactive (+ animations). Unfortunately, you can't add your own code since Prism.js and VScode use a different syntax-highlighting system. That means I pain-stackingly wrote the styling by hand, with a lot of copy and pasting.<br>
                I used the Dark+ theme as a starting point and grouped each scope by their color. In the end, there were 14 color groups (excluding sidebars and activity bar). I actually merged one and hid another (wtf is "Markdown - Raw Block Fenced" ?). What I want to say is that I had to cut customizability for convenience and simplicity. <br>
                <br>
                Hope you enjoy it,<br>
                -pilcrow
            </p>
        </div>

    </div>
</div>

<script>
    import {fly} from "svelte/transition"
</script>

