<template>
    <div id="games">
        <List v-bind:class="gameredbord(0,1)" v-bind="gameData[0]"></List>
        <List v-bind:class="gameredbord(0,2)" v-bind="gameData[1]"></List>
        <List v-bind:class="gameredbord(1,1)" v-bind="gameData[2]"></List>
        <List v-bind:class="gameredbord(1,2)" v-bind="gameData[3]"></List>
        <List v-bind:class="gameredbord(2,1)" v-bind="gameData[4]"></List>
        <List v-bind:class="gameredbord(2,2)" v-bind="gameData[5]"></List>
        <List v-bind:class="gameredbord(3,1)" v-bind="gameData[6]"></List>
        <List v-bind:class="gameredbord(3,2)" v-bind="gameData[7]"></List>
        <List v-bind:class="gameredbord(4,1)" v-bind="gameData[8]"></List>
        <List v-bind:class="gameredbord(4,2)" v-bind="gameData[9]"></List>
    </div>
</template>
<script>
import List from '../list.vue'

export default {
    components:{
    'List':List
    },
    data:function(){
        return{
            gameData:[],
            gameIndex:[
                "0,1",
                "0,2",
                "1,1",
                "1,2",
                "2,1",
                "2,2",
                "3,1",
                "3,2",
                "4,1",
                "4,2"
            ]
        }
    },
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    mounted:function(){
        this.axios.get('/game.json').then(response => {
            console.log(JSON.stringify(response.data))
            this.gameData = response.data
        
        })
    },
    methods:{
        gameredbord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==1){
                if(this.upDownNumberM%5==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            gameredbord:true
                        }
                    }
                    else
                        return{
                            gameredbord:false
                        }   
                }
           }
        }
    }
}
</script>
<style>
#games{
    width:1000px;
    float: left;
    margin-top:50px;
}
.gameredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>