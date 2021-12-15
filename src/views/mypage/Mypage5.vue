<template>
    <div id="payment">
        <img src="http://61.251.167.74/ktweb/gniportal/resource/popup/popup_item_list.png" style="position: absolute; left: 169px; top: 111px;">
        <Mypage34></Mypage34>
        <p id="name5" style="position:absolute; left:722; top:175; width:300px; text-align: right; font-size:22px; color: rgb(240,240,240)">이정현</p>
        <p id="date5" style="position:absolute; left:261; top:273; width:200px; text-align: center; font-size:18px; color: rgb(240,240,240)">2021.11.29 15:52:4</p>
        <p id="gamename5" style="position:absolute; left:534; top:273; width:200px; text-align: center; font-size:18px; color: rgb(240,240,240)">지우개똥(지니만화)</p>
        <p id="usage5" style="position:absolute; left:807; top:273; width:200px; text-align: center; font-size:18px; color: rgb(240,240,240)">8000코인</p>
        <p id="rightnumber" style="position:absolute; left:971; top:506; width:50px; text-align: center; font-size:18px; color: rgb(240,240,240)">1</p>
        <p id="leftnumber" style="position:absolute; left:1003; top:506; width:50px; text-align: center; font-size:18px; color: rgb(240,240,240)">1</p>
        </div>
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
#name5{
    position: relative;
    left:700px;
    top:173px;
}
#date5{
    position: relative;
    left: 245px;
    top:270px;
}
#gamename5{
    position: relative;
    left: 520px;
    top:270px;
}
#usage5{
    position: relative;
    left: 795px;
    top:271px;
}
</style>