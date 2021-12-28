<template>
    <div id="games">
        <template v-for="(item,index) in gameData2" :key="index">
            <List v-if="gamePageMove1M" v-bind="item" v-bind:class="gameRedBord(gameIndex1_1[index],gameIndex1_2[index])"></List>
        </template>
        <template v-for="(item,index) in gameData1" :key="index">
            <List v-if="gamePageMove2M" v-bind="item" v-bind:class="gameRedBord(gameIndex2_1[index],gameIndex2_2[index])"></List>
        </template>
        <p id="error" v-if="gameErrorMessage">&nbsp;&nbsp;&nbsp;&nbsp;페이지 오류! 뒤로가기 버튼을 눌러주세요!</p>
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
            gameData1:[],            //axios 통신 배열
            gameData2:[],
            gameIndex1_1:[
                "0","0","1","1","2","2","3","3","4","4"
            ],
            gameIndex1_2:[
                "1","2","1","2","1","2","1","2","1","2"
            ],
            gameIndex2_1:[
                "5","5","6","6","7","7","8"
            ],
            gameIndex2_2:[
                "1","2","1","2","1","2","1"
            ],
           gameErrorMessage:false
        }
    },
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM","gamePageMove1M","gamePageMove2M"],
    mounted:function(){
        const request = {
            "svcaId": 210,
            "top10Yn": "N",
            "categoryId": "2",
            "useYn": "Y"
        }
        this.axios.post('http://wp-api.gnigame.com/webportal-api/app/list',request)
        .then((response) => {
            this.gameData = response.data.list
    
            this.gameData1= this.gameData.splice(10,7)
            console.log("gameData1: ",this.gameData1)

            this.gameData2= this.gameData.splice(0,10)
             console.log("gameData2: ",this.gameData2)
        })
        .catch((error)=>{
            this.gameErrorMessage=true
            console.log(error.response)
        })
    },
    methods:{
        gameRedBord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==1){
                if(this.upDownNumberM%9==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            gameRedBord:true
                        }
                    }
                    else{
                        return{
                            gameRedBord:false
                        }
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
#games p{
    position: relative;
    top:180px;
}
.gameRedBord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>