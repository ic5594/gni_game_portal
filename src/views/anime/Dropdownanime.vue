<template>
    <div id="anime">
        <ul>
            <li v-bind:class="animeredbord(0,1)">인기만화</li>
            <hr>
            <li v-bind:class="animeredbord(1,1)">업데이트</li>
            <hr>
            <li v-bind:class="animeredbord(2,1)">신규만화</li>
            <hr>
            <li v-bind:class="animeredbord(3,1)">전체만화</li>
            <hr>
            
        </ul>
    </div>
</template>
<script>
export default {
    props:["goNumberM","indexNumberM","currentNumberM","routerlistM"],
    methods:{
        animeredbord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==2){
                if(this.indexNumberM%4==(number1)){
                    if(this.goNumberM==(number2)){
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
    opacity: 0.78;
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
    background-size:96% 100%;  
}
</style>