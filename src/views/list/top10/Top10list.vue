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
    width:300px;
    background-color: black;
    opacity: 0.7;
    padding:5px;
    margin: 15px;
    height: 150px;
}
#list h1{
    color:white
}
#list h2{
    color:white
}
</style>