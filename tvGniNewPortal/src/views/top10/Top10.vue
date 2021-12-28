<template>
    <div id="top10">
        <template v-for="(item,index) in top10Data" :key="index">
            <List v-bind="item" v-bind:class="top10RedBord(top10Index1[index],top10Index2[index])"></List>
        </template>
        <Top10numtag></Top10numtag>
        <p id="error" v-if="top10errormessage">&nbsp;&nbsp;&nbsp;&nbsp;페이지 오류! TV를 껏다 켜주세요.</p>
    </div>
</template>
<script>
import List from '../list.vue'
import Top10numtag from './top10numtag.vue'

export default {
    components:{
    'List':List,
    'Top10numtag':Top10numtag ,
    },
    data:function(){
        return{
            top10Data:[],
            top10Index1:[
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
            top10Index2:[
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
            ],
            top10errormessage:false
        }
    },
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    mounted:function(){
        const request = {
            "svcaId": 210,
            "top10Yn": "Y",
            "useYn": "Y"     
        }
        this.axios.post('http://wp-api.gnigame.com/webportal-api/app/list',request)
        .then((response) => {
            this.top10Data = response.data.list
            console.log(this.top10Data)
        })
        .catch((error) =>{
            console.log(error.response)
            this.top10errormessage=true
        })
        
    },
    methods:{
        top10RedBord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==0){
                if(this.upDownNumberM%5==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            top10RedBord:true
                        }
                    }
                    else{
                        return{
                            top10RedBord:false
                        }
                    }       
                }
            }
        }
    }
}
</script>
<style>
#top10{
    width:1000px;
    float: left;
    margin-bottom: 10px;
    margin-top:50px;
}
#top10 p{
    position: relative;
    top:25px;
}
.top10RedBord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>