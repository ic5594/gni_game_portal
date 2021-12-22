<template>
    <div id="top10">
        <template v-for="(item,index) in top10Index" :key="index">
            <List v-bind="top10Data[index]" v-bind:class="top10RedBord(item)"></List>
        </template>
        <!-- <List v-bind:class="top10RedBord(0,1)" v-bind="top10Data[0]"></List>
        <List v-bind:class="top10RedBord(0,2)" v-bind="top10Data[1]"></List>
        <List v-bind:class="top10RedBord(1,1)" v-bind="top10Data[2]"></List>
        <List v-bind:class="top10RedBord(1,2)" v-bind="top10Data[3]"></List>
        <List v-bind:class="top10RedBord(2,1)" v-bind="top10Data[4]"></List>
        <List v-bind:class="top10RedBord(2,2)" v-bind="top10Data[5]"></List>
        <List v-bind:class="top10RedBord(3,1)" v-bind="top10Data[6]"></List>
        <List v-bind:class="top10RedBord(3,2)" v-bind="top10Data[7]"></List>
        <List v-bind:class="top10RedBord(4,1)" v-bind="top10Data[8]"></List>      
        <List v-bind:class="top10RedBord(4,2)" v-bind="top10Data[9]"></List> -->
        <Top10numtag></Top10numtag>
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
            top10Index:[
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
    mounted:function() {
        this.axios.get('./json/top10.json').then(response => {
            console.log(JSON.stringify(response.data))
            this.top10Data = response.data
            
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
                    else
                        return{
                            top10RedBord:false
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
.top10RedBord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>