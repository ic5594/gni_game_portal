<template>
    <div id="list">
        <img :src="iconImage">
        <h1>{{title}}</h1>
        <h2>장르 -{{genre}}<br>
        {{drawer}}</h2>
    </div>
</template>
<script>
export default {
    props:["iconImage","title","genre","drawer"]
    }
</script>
<style>
#list{
    display: inline-block;
    width:380px;
    background-color: black;
    opacity: 0.96;
    padding:5px;
    margin: 16px;
    height: 144px;
    margin-top:-30px;
}
#list h1{
    color:white;
    margin-left: 5px;
    margin-bottom: 3px;
    position: relative;
    left:143px;
    bottom:130px;
    font-size: 26px;
}
#list h2{
    color:white;
    margin-left: 5px;
    position: relative;
    left: 145px;
    bottom:80px;
    font-size: 18px;
}
#list h1,h2{
    margin-top: -10px;
}
#list img{
    display: inline-block;
    width: 140px;
    height: 138px;
    margin-top:5px;
    margin-left: 2px;
}

</style>