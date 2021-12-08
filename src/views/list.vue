<template>
    <div id="list">
        <img :src="imageurL">
        <h1>{{ title }}</h1>
        <h2>장르/{{type}}<br>
        {{about}}</h2>
    </div>
</template>
<script>
export default {
    props:['imageurL','title','type','about']
    }
</script>
<style>
#list{
    display: inline-block;
    width:380px;
    background-color: black;
    opacity: 0.8;
    padding:5px;
    margin: 16px;
    height: 145px;
    margin-top:-30px;
}
#list h1{
    color:white;
    margin-left: 5px;
    margin-bottom: 3px;
    position: relative;
    left:150px;
    bottom:130px;
    font-size: 26px;
}
#list h2{
    color:white;
    margin-left: 5px;
    position: relative;
    left: 150px;
    bottom:90px;
    font-size: 18px;
}
#list h1,h2{
    margin-top: -10px;
}
#list img{
    display: inline-block;
    width: 150px;
    height: 145px;
}
.menuredbord{
    border:9px solid red;
    padding: -10px;
    width:238px;
    height: 57px;
    transition: opacity .5s;;
}
</style>