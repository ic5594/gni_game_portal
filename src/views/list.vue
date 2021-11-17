<template>
    <div id="list">
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
#list{
    float: left;
    width:336px;
    background-color: black;
    opacity: 0.7;
    padding:5px;
    margin: 15px;
    height: 150px;
}
#list h1{
    color:white;
    margin-left: 5px;
    margin-bottom: 3px;
}
#list h2{
    color:white;
    margin-left: 5px;
}
</style>