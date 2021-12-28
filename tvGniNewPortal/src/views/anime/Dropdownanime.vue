<template>
    <div id="anime">
        <ul>
            <template v-for="(item,index) in dropdownanimeData" :key="index">
                <li v-bind:class="animeredbord(index,1)">{{item}}</li>
                <hr>
            </template>
            <Anime></Anime>
        </ul>
    </div>
</template>
<script>
import Anime from './anime.vue'

export default {
    components:{ 
        'Anime':Anime
    },
    data:function(){
        return{
            dropdownanimeData:[
                "인기만화",
                "업데이트",
                "신규만화",
                "전체만화"
            ]
        }
    },
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    methods:{
        animeredbord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==2){
                if(this.upDownNumberM%4==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            animeredbord:true
                        }
                    }
                    else
                        return{
                            goredbord:false
                        }   
                }
           }
        }
    }
}
</script>
<style>
#anime{
    float: left;
    background-color: black;
    opacity: 0.7;
    width: 300px;
    height: 809px;
    padding-top: 160px;
}

#anime ul li{
    font-size: 40px;
    color:white;
    list-style: none;
    margin-bottom:7px;    
}
.animeredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/selsect_customer_info.png);
    background-repeat: no-repeat;
    background-size:99% 100%; 
  
}
</style>