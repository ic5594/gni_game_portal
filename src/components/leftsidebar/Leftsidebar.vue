<template>
    <div id="leftside">
            <div class="image">          
        </div>
    </div>
</template>
<script>
export default {
    props:["goNumberM"]
}
</script>
<style>
#leftside{
    float: left;
    background-color:black;
    opacity: 0.8;
    height: 100vh;
    width: 317px;
    overflow:hidden;
    margin:0 auto;
}
.image{
    width: 370px;
    height: 900px;
    background-image: url(http://61.251.167.74/webportal2018/bnr/20210514134035259.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border:1px solid black;
    margin-top:30px;
}
body{
    margin: 0;
    padding: 0;
}
</style>