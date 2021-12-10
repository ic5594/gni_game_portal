<template>
    <div id="mypage">
        <ul>
            <li v-bind:class="mypageredbord(0,1)">내정보 확인</li>
            <hr>
            <li v-bind:class="mypageredbord(1,1)">이용약관</li>
            <hr>
            <li v-bind:class="mypageredbord(2,1)">개인정보취급</li>
            <hr>
            <li v-bind:class="mypageredbord(3,1)">결제내역확인</li>
            <hr>
            <li v-bind:class="mypageredbord(4,1)">아이템 사용내역</li>
        </ul>
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
    margin-left: 5px;
    margin-top: 405px;
    text-align: center;
    width: 400px;
}
#mypage ul{
    margin-right: 10px;
    padding-left:10px
}
#mypage ul li{
    color:white;
    font-size: 40px;
    list-style: none;
      
}
.mypageredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/selsect_customer_info.png);
    background-repeat: no-repeat;
    background-size:100% 100%;  
}
</style>