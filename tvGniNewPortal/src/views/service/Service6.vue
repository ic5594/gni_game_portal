<template>
    <div id="customer">
        <div id="customerbg" style="position: absolute; left: 283px; top: 126px; width: 714px; height: 479px; background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/popup_customecenter.png);">
        <p id="customhow" style="left:70; top:69; width:566;font-size:19px; color: rgb(238,238,238);">6. 구매한 아이템 환불을 신청하고 싶어요. 어떻게 해야 하나요?<br></p>
        <p id="customerbgtext" style="position:absolute; left:72; top:98; width:566;font-size:19px; color: rgb(238,238,238); line-height:24px">
        지니게임 내 판매되는 모든 아이템은 구매 후 청약철회 또는 환불이<br>
        불가능 합니다.<br>
        <br>
        다만, 구매한 아이템을 사용하지 않았다면 지니프릭스 고객센터<br>
        (02-2027-3378) 또는 gnigame@gnifrix.com 으로 연락 주시면 환불을<br>
        도와 드리겠습니다.</p>
        <p id="curpageinfo6" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">6</p>
        <p id="etcinfo6" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">6</p>
        </div>
        <Servicepopup></Servicepopup>
        </div>
</template>
<script>
import Servicepopup from './Servicepopup.vue'
export default {
    components:{
        'Servicepopup':Servicepopup
    }
}
</script>
<style>
#curpageinfo6{
    position: relative;
    top:315px;
    left:273px;
}
#etcinfo6{
    position: relative;
    top:275px;
    left:307px;
}

</style>