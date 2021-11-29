<template>
    <div id="Redlist">
        <img :src="imageurL"/>
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
#Redlist{
    float: left;
    width:380px;
    background-color: black;
    opacity: 0.8;
    padding:5px;
    margin: 10px;
    height: 150px;
    border:5px solid red;
}
#Redlist h1{
    color:white;
    margin-left: 5px;
    margin-bottom: 3px;
    position: relative;
    left:150px;
    bottom:160px;
    font-size: 26px;
}
#Redlist h2{
    color:white;
    margin-left: 5px;
    position: relative;
    left: 150px;
    bottom:120px;
    font-size: 18px;
}
#Redlist img{
    display: inline-block;
    width: 150px;
    height: 150px;
}
</style>