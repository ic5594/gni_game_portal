<template>
    <div id="background" style="position: fixed; z-index: -99; width: 100%; height: 100%">
        <iframe frameborder="0" height="100%" width="100%" 
        src="https://www.youtube.com/embed/Z432vpw-Kuc?playlist=Z432vpw-Kuc&mute=1&loop=1&autoplay=1&rel=0&controls=0&showinfo=0"
        allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
    </div>
</template>
<style>
#background{
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 5.25%;
}
html,body,div, video {
    margin:0;padding:0;
}
body {
    padding:0px, 0px, 0px, 0px; 
    margin:0px, 0px, 0px, 0px; 
    overflow:hidden; 
    }
iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

