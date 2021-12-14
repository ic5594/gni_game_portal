<template>
    <div id="mypage">
        <div class="mypage" style="display: block;">
            <img id="item" v-bind:class="mypageredbord(0,1)" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_01.png" style="top: 0px;">
            <img id="item" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_01.png" style="display: none; top: 0px;">
            <img id="item" v-bind:class="mypageredbord(1,1)" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_02.png" style="top: 50px;">
            <img id="item" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_02.png" style="display: none; top: 50px;">
            <img id="item" v-bind:class="mypageredbord(2,1)" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_03.png" style="top: 100px;">
            <img id="item" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_03.png" style="display: none; top: 100px;">
            <img id="item" v-bind:class="mypageredbord(3,1)" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_04.png" style="top: 150px;">
            <img id="item" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_04.png" style="display: none; top: 150px;">
            <img id="item" v-bind:class="mypageredbord(4,1)" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_05.png" style="top: 200px;">
            <img id="item" src="http://61.251.167.74/ktweb/gniportal/resource/mypage_text_06.png" style="display: none; top: 200px;"></div>
    </div>
</template>
<script>
export default {
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    methods:{
        mypageredbord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==7){
                if(this.upDownNumberM%5==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            mypageredbord:true
                        }
                    }
                    else
                        return{
                            mypageredbord:false
                        }   
                }
           }
        }
    }
}
</script>
<style>
#mypage{
    float:left;
    background-color:black;
    opacity: 0.8;
    margin-left: 10px;
    margin-top: 470px;
    width: 210px;
    height: 320px;
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_back2.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.mypageredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_select_bar.png);
    background-repeat: no-repeat;
    background-size:100% 100%;  
}
</style>