<template>
    <div id="dropanime3">
        <ol>
            <li>인기만화</li>
            <hr>
            <li>업데이트</li>
            <hr>
            <li style="border:5px solid red;">신규만화</li>
            <hr>
            <li>전체만화</li>
            <hr>
        </ol>
    </div>    
    <Anime3></Anime3>
</template>
<script>
import Anime3 from '../anime/anime3.vue'

export default {
    components:{
        'Anime3':Anime3
    }
}
</script>
<style>
#dropanime3{
    float: left;
    background-color: black;
    opacity: 0.75;
    width: 300px;
    height: 809px;
    padding-top: 160px;
    
}

#dropanime3 ol li{
    font-size: 40px;
    color:white;
    list-style: none;
}

</style>