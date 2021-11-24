<template>
    <div id="Redlist">
        <h1>{{ title }}</h1>
        <h2>장르/{{type}}<br>
        {{about}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        type:String,
        about:String
    }
}
</script>
<style>
#Redlist{
    float: left;
    width:336px;
    background-color: black;
    opacity: 0.7;
    padding:5px;
    margin: 10px;
    height: 150px;
    border:5px solid red;
}
#Redlist h1{
    color:white;
    margin-left: 5px;
    margin-bottom: 3px;
}
#Redlist h2{
    color:white;
    margin-left: 5px;
}
</style>