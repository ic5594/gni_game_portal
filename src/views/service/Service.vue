<template>
    <div id="service">
        <div id="textlist" style="position: absolute;left: 8px;top: 117px;width: 661px;height: 311px;background-image: url(http://61.251.167.74/ktweb/gniportal/resource/customer_info_back.png);">
        <p v-bind:class="serviceredbord(0,1)" style=" left:25; font-size:22px; color: rgb(238,238,238);top:3">1. 고객센터는 어떻게 연락하나요?</p>
        <p v-bind:class="serviceredbord(1,1)" style=" left:25; font-size:22px; color: rgb(238,238,238);top:53">2. 지니게임 이메일 고객센터 안내</p>
        <p v-bind:class="serviceredbord(2,1)" style=" left:25; font-size:22px; color: rgb(238,238,238);top:103">3. 게임플레이는 무료인가요?</p>
        <p v-bind:class="serviceredbord(3,1)" style=" left:25; font-size:22px; color: rgb(238,238,238);top:153">4. 유료 아이템은 어떻게 구매하나요?</p>
        <p v-bind:class="serviceredbord(4,1)" style=" left:25; font-size:22px; color: rgb(238,238,238);top:203">5. 요금이 너무 많이 나왔어요! 결제내역 확인은 어떻게 하나요?</p>
        <p v-bind:class="serviceredbord(5,1)" style=" left:25; font-size:22px; color: rgb(238,238,238);top:253">6. 구매한 아이템 환불을 신청하고 싶어요. 어떻게 해야 하나요?</p>
        </div>
    </div>
</template>
<script>

export default {
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    methods:{
        
        serviceredbord:function(number1,number2){
             if(this.currentNumberM%this.routerlistM.length==6){
                if(this.upDownNumberM%6==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            serviceredbord:true
                        }
                    }
                    else
                        return{
                            serviceredbord:false
                        }   
                }
           }
        }
    }
}
</script>
<style>
#service{
    float: left;
    position: relative;
    top:270px;
}

#service p{
    margin-left: 10px;
}
.serviceredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/selsect_customer_info.png);
    background-repeat: no-repeat;
    background-size:100% 100%  
}
.servicered{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_select_bar.png);
    background-repeat: no-repeat;
    background-size:100% 100%  
}
</style>