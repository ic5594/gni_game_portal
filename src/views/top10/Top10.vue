<template>
    <div id="top10">
        <List v-bind:class="topredbord(0,1)" :style="position=fixed"  title="스마몬마스터즈" type="퍼즐" about="퍼즐과 카드 배틀이 만났다!" imageurL="http://61.251.167.74/webportal2018/app/20210504142223797.png"></List>
        <List v-bind:class="topredbord(0,2)" title="히어로올스타즈" type="디팬스" about="최강의 히어로들이 모였다!" imageurL="http://61.251.167.74/webportal2018/app/20210504142152651.png"></List>
        <List v-bind:class="topredbord(1,1)" title="골드러너" type="캐주얼" about="보물을 찾아 떠나는 모험" imageurL="http://61.251.167.74/webportal2018/app/20210504142152651.png">ewq</List>
        <List v-bind:class="topredbord(1,2)" title="영웅전설" type="액션RPG" about="최강의 영웅이 되자!" imageurL="http://61.251.167.74/webportal2018/app/20210521103459832.png"></List>
        <List v-bind:class="topredbord(2,1)" title="지니 신맞고" type="보드게임" about="박진감 넘치는 한판!" imageurL="http://61.251.167.74/webportal2018/app/20210507105742029.png"></List>
        <List v-bind:class="topredbord(2,2)" title="정글타워" type="캐주얼" about="하늘 높이 탑을 쌓아보자!" imageurL="http://61.251.167.74/webportal2018/app/20180820091941804.png"></List>
        <List v-bind:class="topredbord(3,1)" title="돌격정령친구들" type="캐주얼" about="최강 정령사를 가려라!" imageurL="http://61.251.167.74/webportal2018/app/20190207133003357.png"></List>
        <List v-bind:class="topredbord(3,2)" title="토이레이싱" type="아케이드" about="장난감들의 레이싱 게임" imageurL="http://61.251.167.74/webportal2018/app/20210507152650078.png"></List>
        <List v-bind:class="topredbord(4,1)" title="몬스터오팬스히어로" type="오팬스" about="오팬스 끝판왕! 히어로 등장" imageurL="http://61.251.167.74/webportal2018/app/20210504142240728.png"></List>      
        <List v-bind:class="topredbord(4,2)" title="치즈런" type="러닝" about="맛있는 치즈를 차지하라!" imageurL="http://61.251.167.74/webportal2018/app/20190716151400501.png"></List>  
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
    props:["goNumberM","indexNumberM","currentNumberM","routerlistM"],
    methods:{
       topredbord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==0){
                if(this.indexNumberM%5==(number1)){
                    if(this.goNumberM==(number2)){
                        return{
                            topredbord:true
                        }
                    }
                    else
                        return{
                            topredbord:false
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

.topredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>