<template>
    <div id="kids">
        <List v-bind:class="kidredbord(0,1)" title="키즈팝" type="유아교육" about="아이들의 눈높이 교육!" imageurL="http://61.251.167.74/webportal2018/app/20180820092125005.png"></List>
        <List v-bind:class="kidredbord(1,1)" title="타요와 신나는 놀이" type="유아" about="TV앱 강력추천! 타요!" imageurL="http://61.251.167.74/webportal2018/app/20180820092145350.png"></List>
        <List v-bind:class="kidredbord(2,1)" title="판다팡" type="퍼즐" about="판다와 함께하는 3매칭 퍼즐" imageurL="http://61.251.167.74/webportal2018/app/20180820092046161.png"></List>
        <List v-bind:class="kidredbord(3,1)" title="2048" type="퍼즐" about="요정과 함께하는 숫자퍼즐게임" imageurL="http://61.251.167.74/webportal2018/app/20180905193345771.png"></List>   
    </div>
</template>
<script>
import List from '../list.vue'

export default {
    components:{
    'List':List
    },
    props:["goNumberM","indexNumberM","currentNumberM","routerlistM"],
    methods:{
        kidredbord:function(number1,number2){
             if(this.currentNumberM%this.routerlistM.length==3){
                if(this.indexNumberM%5==(number1)){
                    if(this.goNumberM==(number2)){
                        return{
                            kidsredbord:true
                        }
                    }
                    else
                        return{
                            kidsredbord:false
                        }   
                }
           }
        }
    }
}
</script>
<style>
#kids{
    width:400px;
    float: left;
    margin-top:50px;
}
.kidsredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>