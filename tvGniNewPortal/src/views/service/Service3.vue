<template>
    <div id="customer">
        <div id="customerbg" style="position: absolute; left: 283px; top: 126px; width: 714px; height: 479px; background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/popup_customecenter.png);">
            <p id="customhow" style="left:70; top:69; width:566;font-size:19px; color: rgb(238,238,238);">3. 게임플레이는 무료인가요?<br></p>
            <p id="customerbgtext" style="position:absolute; left:72; top:98; width:566;font-size:19px; color: rgb(238,238,238); line-height:24px">
            지니 게임 내에 있는 모든 게임은 무료로 플레이가 가능합니다.<br>
            다만, 게임 내에서 판매되는 유료 아이템 구매시 요금이 청구되니<br> 이점 참고해 주세요!</p>
            <p id="curpageinfo3" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">3</p>
            <p id="etcinfo3" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">6</p>
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

#curpageinfo3{
    position: relative;
    top:315px;
    left:273px;
}
#etcinfo3{
    position: relative;
    top:275px;
    left:307px;
}

</style>