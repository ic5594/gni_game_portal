<template>
    <div id="mypage">
        <div class="mypage" style="display: block;">
            <img v-bind:class="mypageRedBord(0,1)" src="http://61.251.167.74/ktweb/gniportal/resource/s_mypage_text_01.png" style="top: 0px;">
            <img v-bind:class="mypageRedBord(1,1)" src="http://61.251.167.74/ktweb/gniportal/resource/s_mypage_text_02.png" style="top: 50px;">
            <img v-bind:class="mypageRedBord(2,1)" src="http://61.251.167.74/ktweb/gniportal/resource/s_mypage_text_03.png" style="top: 50px;">
            <img v-bind:class="mypageRedBord(3,1)" src="http://61.251.167.74/ktweb/gniportal/resource/s_mypage_text_04.png" style="top: 50px;">
            <img v-bind:class="mypageRedBord(4,1)" src="http://61.251.167.74/ktweb/gniportal/resource/s_mypage_text_05.png" style="top: 50px;">    
        </div>
    </div>
</template>
<script>
export default {
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    methods:{
        mypageRedBord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==7){
                if(this.upDownNumberM%5==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            mypageRedBord:true
                        }
                    }
                    else
                        return{
                            mypageRedBord:false
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
    margin-top: 550px;
    width: 210px;
    height: 320px;
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_back2.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.mypageRedBord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_select_bar.png);
    background-repeat: no-repeat;
    background-size:100% 100%;  
}
</style>