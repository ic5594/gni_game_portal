<template>
    <div id="dropanime1">
        <ol>
            <li style="border:5px solid red;">인기만화</li>
            <hr>
            <li>업데이트</li>
            <hr>
            <li>신규만화</li>
            <hr>
            <li>전체만화</li>
            <hr>
        </ol>
    </div>  
      
</template>
<script>
import Anime1 from '../anime/anime1.vue'
export default {
    'Anime1':Anime1
}
</script>
<style>
#dropanime1{
    float: left;
    background-color: black;
    opacity: 0.75;
    width: 300px;
    height: 809px;
    padding-top: 160px;   
}

#dropanime1 ol li{
    font-size: 40px;
    color:white;
    list-style: none;
}


</style>