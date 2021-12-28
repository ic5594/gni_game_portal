<template>
    <div id="customer">
        <div id="customerbg" style="position: absolute; left: 283px; top: 126px; width: 714px; height: 479px; background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/popup_customecenter.png);">
            <p id="customhow" style="left:70; top:69; width:566;font-size:19px; color: rgb(238,238,238);">2. 지니게임 이메일 고객센터 안내<br>안녕하세요. 지니게임입니다.</p>
            <p id="customerbgtext" style="position:absolute; left:72; top:98; width:566;font-size:19px; color: rgb(238,238,238); line-height:24px">
            이메일 문의 상담 창구가 오픈되었습니다.<br>
            빠르고 편리한 이메일 문의 서비스를 이용해 보세요.<br>
            <br>
            이메일 문의는 언제나 빠른 상담을 도와드릴 수 있습니다.<br>
            고객님들의 많은 이용 부탁드립니다.<br>
            <br>
            * 내용 : 이메일 고객센터 안내<br>
            * 이메일 문의 : gnigame@gnifrix.com</p>
            <p id="curpageinfo2" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">2</p>
            <p id="etcinfo2" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">6</p>
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
#curpageinfo2{
    position: relative;
    top:290px;
    left:273px;
}
#etcinfo2{
    position: relative;
    top:250px;
    left:307px;
}

</style>