<template>
    <div id="customer">
        <div id="customerbg" style="position: absolute; left: 283px; top: 126px; width: 714px; height: 479px; background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/popup_customecenter.png);">
            <p id="customhow" style="left:70; top:69; width:566;font-size:19px; color: rgb(238,238,238);">1. 고객센터는 어떻게 연락하나요?</p>
            <p id="customerbgtext" style="position:absolute; left:72; top:98; width:566;font-size:19px; color: rgb(238,238,238); line-height:24px">
                지니프릭스 고객센터<br>
                - 연락처 : 02-2027-3378<br>
                - 운영 시간 : 평일 월~금(공휴일 제외) 오전 10시 부터 ~ 오후 5시<br>
                - 점심시간  : 12시30분 ~ 13시30분<br>
                <br>다만, 운영 시간내에도 상담원이 상담을 진행하고 있을 경우 상담이<br>  
                어려울 수 있으니 이점 양해바랍니다.</p>
            <p id="curpageinfo1" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">1</p>
            <p id="etcinfo1" style="width:60 ;font-size:18px; color: rgb(239,239,239); line-height:22px;text-align:center;">6</p>
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
#customer{
    position: relative;
    left:400px;
    top:100px;
}
#customhow{
    position: relative;
    left:40px;
    top:60px;
}

#customerbgtext{
    position: relative;
    left:40px;
    top: 110px;
}
#curpageinfo1{
    position: relative;
    top:315px;
    left:273px;
}
#etcinfo1{
    position: relative;
    top:275px;
    left:307px;
}
p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 1em;
    margin-inline-end: 1em;
}
</style>