<template>
    <div id="service">
        <ul>
            <li v-bind:class="serviceredbord(0,1)">1. 고객센터는 어떻게 연락하나요?</li>
            <hr>
            <li v-bind:class="serviceredbord(1,1)">2. 지니게임 이메일 고색센터 안내</li>
            <hr>
            <li v-bind:class="serviceredbord(2,1)">3. 유로 아이템은 어떻게 구매하나요?</li>
            <hr>
            <li v-bind:class="serviceredbord(3,1)">4. 요금이 너무 많이 나왔어요! 결제내역 확인은 어떻게 하나요?</li>
            <hr>
            <li v-bind:class="serviceredbord(4,1)">5. 구매한 아이템 환불을 신청하고 싶어요. 어떻게 해야하나요?</li>
            <hr>
            <li v-bind:class="serviceredbord(5,1)">6. 구매한 아이템 환불을 신청하고 싶어요. 어떻게 해야 하나요?</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["goNumberM","indexNumberM","currentNumberM","routerlistM"],
    methods:{
        serviceredbord:function(number1,number2){
             if(this.currentNumberM%this.routerlistM.length==6){
                if(this.indexNumberM%6==(number1)){
                    if(this.goNumberM==(number2)){
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
    background-color:white;
    opacity: 0.8;
    margin-left: 5px;
    padding-left: 20px;
    
}
#service ul{
    margin-top:300px;
    background-color: black;
    
}
#service ul li{
    color:white;
    font-size: 30px;
    list-style: none;
    position: relative;
    right:50px;
    margin:5px;
    padding-bottom:1px;
    padding-top:3px;
    
    margin-left: 20px;
}
#service hr{
    margin-right: 20px;
    position: relative;
    right: 20px;
}
.serviceredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/selsect_customer_info.png);
    background-repeat: no-repeat;
    background-size:100% 100%;  
}
</style>