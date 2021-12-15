<template>
    <div id="customer">
        <div id="customerbg" style="position: absolute; left: 283px; top: 126px; width: 714px; height: 479px; background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/popup_customecenter.png);">
            <p id="customhow" style="left:70; top:69; width:566;font-size:19px; color: rgb(238,238,238);">5. 요금이 너무 많이 나왔어요! 결제내역 확인은 어떻게 하나요?<br></p>
            <p id="customerbgtext" style="position:absolute; left:72; top:98; width:566;font-size:19px; color: rgb(238,238,238); line-height:24px">
            결제 내역에 대한 확인은 아래와 같이 가능합니다.<br>
            1. 지니포탈에서 확인 법<br>
            - 지니 포털에 접속<br>
            - 마이페이지 > 결제내역 확인 선택<br>
            <br>. 고객센터를 통한 확인 법<br>
            - 지니 포털 혹은 KT 100 번을 통해 SAID 혹은 고객 코드를 확인!<br>
            - 02-2027-3378 연락 후 고객문의 접수<br>
            - SAID 혹은 고객 코드를 확인 후 결제 내역 확인</p>
            <p id="curpageinfo5" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">5</p>
            <p id="etcinfo5" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">6</p>
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

#curpageinfo5{
    position: relative;
    top:315px;
    left:273px;
}
#etcinfo5{
    position: relative;
    top:275px;
    left:307px;
}

</style>