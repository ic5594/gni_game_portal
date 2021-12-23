<template>
    <div id="games">
        <template v-for="(item,index) in gameData" :key="index">
            <List v-bind="item" v-bind:class="gameRedBord(gameIndex1[index],gameIndex2[index])"></List>
        </template>
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
            gameData:[],            //axios 통신 배열
            gameIndex1:[
                "0",
                "0",
                "1",
                "1",
                "2",
                "2",
                "3",
                "3",
                "4",
                "4"
            ],
            gameIndex2:[
                "1",
                "2",
                "1",
                "2",
                "1",
                "2",
                "1",
                "2",
                "1",
                "2",
                "1",
                "2"
            ]
        }
    },
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    mounted:function(){
        const request = {
            "svcaId": 210,
            "top10Yn": "N",
            "categoryId": "2",
            "useYn": "Y"
        }
        this.axios.post('http://wp-api.gnigame.com/webportal-api/app/list',request)
        .then(response => {
            console.log(response.data)
            this.gameData = response.data.list
            console.log(this.gameData)
        })
    },
    methods:{
        gameRedBord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==1){
                if(this.upDownNumberM%5==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            gameRedBord:true
                        }
                    }
                    else
                        return{
                            gameRedBord:false
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
.gameRedBord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>