<template>
    <div id="payment">
        <img src="http://61.251.167.74/ktweb/gniportal/resource/popup/popup_payment.png" style="position: absolute; left: 169px; top: 111px;">
        <Mypage34></Mypage34>
        <p id="name4" style="position:absolute; left:724; top:101; width:300px; text-align: right; font-size:22px; color: rgb(240,240,240)">이정현</p>
        <p id="coin4" style="position:absolute; left:924; top:145; width:100px; text-align: right; font-size:18px; color: rgb(240,240,240)">223,240</p>
        <p id="money4" style="position:absolute; left:924; top:176; width:100px; text-align: right; font-size:18px; color: rgb(240,240,240)">0</p>
        <p id="leftnumber" style="position:absolute; left:971; top:506; width:50px; text-align: center; font-size:18px; color: rgb(240,240,240)">1</p>
        <p id="rightnumber" style="position:absolute; left:1003; top:506; width:50px; text-align: center; font-size:18px; color: rgb(240,240,240)">1</p>
        <p id="usage3" style="position:absolute; left:435; top:273; width:200px; text-align: center; font-size:18px; color: rgb(240,240,240)">사용 내역이 없습니다.</p></div>
</template>
<script>
import Mypage34 from './Mypage34.vue'
export default {
    components:{
        'Mypage34':Mypage34
    }
}
</script>
<style>
#payment{
    position: relative
    ;
    left:530px;
    top:100px;
}
#name4{
    position: relative;
    left:700px;
    top:100px;
}
#coin4{
    position: relative;
    left:900px;
    top:140px;
}
#money4{
    position: relative;
    left: 900px;
    top: 171px;
}
#usage3{
    position: relative;
    left: 625px;
    top: 270px;
}
#leftnumber{
    position: relative;
    left:985px;
    top:502px;
}
#rightnumber{
    position: relative;
    left:950px;
    top:502px;
}
</style>