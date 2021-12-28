<template>
    <div id="customer">
        <div id="customerbg" style="position: absolute; left: 283px; top: 126px; width: 714px; height: 479px; background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/popup_customecenter.png);">
            <p id="customhow" style="left:70; top:69; width:566;font-size:19px; color: rgb(238,238,238);">4. 유료 아이템은 어떻게 구매하나요?<br></p>
            <p id="customerbgtext" style="position:absolute; left:72; top:98; width:566;font-size:19px; color: rgb(238,238,238); line-height:24px">
            <br>유료 아이템은 구매하고자 하는 게임 접속 후 상점등의 메뉴를 통해<br>
            구매가 가능합니다.<br>
            상품 구매 시 나타나는 팝업창을 꼭 숙지해 주세요!</p>
            <p id="curpageinfo4" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">4</p>
            <p id="etcinfo4" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">6</p>
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
#curpageinfo4{
    position: relative;
    top:315px;
    left:273px;
}
#etcinfo4{
    position: relative;
    top:275px;
    left:307px;
}

</style>