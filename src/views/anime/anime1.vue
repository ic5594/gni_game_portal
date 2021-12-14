<template>
    <div id="pupular">
    <List title="나의 로맨틱 홀리데이!" type="로맨스/액션" about="최금락/최경국" imageurL="http://61.251.167.77/webportal2018/comic_master/20190328115227774.png"></List>
    <List title="BRIGHT HOUSE" type="드라마" about="회사원/회사원" imageurL="http://61.251.167.77/webportal2018/comic_master/20190328112730267.png"></List>
    <List title="투문" type="무협/드라마" about="이훈영/윤석준" imageurL="http://61.251.167.77/webportal2018/comic_master/20181210110109134.png"></List>
    <List title="상수와 합정 사이" type="BL/드라마" about="봉봉/도드" imageurL="http://61.251.167.77/webportal2018/comic_master/20181210122654919.png"></List>
    <List title="지우개똥" type="일상" about="아이나무/아이나무" imageurL="http://61.251.167.77/webportal2018/comic_master/20181210123010881.png"></List>
    <List title="푸드메이트" type="BL/드라마" about="토리컴즈/토리컴즈" imageurL="http://61.251.167.77/webportal2018/comic_master/20181210121615518.png"></List>
    <List title="워블" type="판타지 액션" about="크래커/윤석준" imageurL="http://61.251.167.74/webportal2018/comic_master/20181210112912377.png"></List>
    <List title="어둠의 자식들" type="드라마" about="Dogaji/조세윤" imageurL="http://61.251.167.77/webportal2018/comic_master/20181210122316575.png"></List>
    <List title="보스 인 스쿨" type="학원 액션" about="이훈영/김의권" imageurL="http://61.251.167.77/webportal2018/comic_master/20181210113252114.png"></List>
    <List title="작살무개녕" type="일상" about="냥치기/냥치기" imageurL="http://61.251.167.77/webportal2018/comic_master/20181210121956316.png"></List>
    
    </div>
</template>
<script>
import List from "../list.vue"

export default {
    components:{
    'List':List
    }
}
</script>
<style>
#pupular{
    float:left;
    width:900px;
    position: relative;
    left:280px;
    bottom: 420px;
}
</style>