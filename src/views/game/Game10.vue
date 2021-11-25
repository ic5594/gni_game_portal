<template>
    <div id="games10">
        <List title="지니 신맞고" type="보드게임" about="박진감 넘치는 한판!"></List>
        <List title="펫마블" type="캐주얼" about="두개의 주사위로 떠나는 모험"></List>
        <List title="히어로올스타즈" type="디팬스" about="최강의 히어로들이 모였다!"></List>
        <List title="영웅전설" type="액션RPG" about="최강의 영웅이 되자!"></List>
        <List title="고슈터" type="슈팅" about="도깨비 치우의 화끈 슈팅액션"></List>
        <List title="스마몬마스터즈" type="퍼즐" about="퍼즐과 카드 배틀이 만났다!"></List>
        <List title="배틀킹" type="전략&액션" about="실시간 전략 액션 게임!"></List>
        <List title="치즈런" type="러닝" about="맛있는 치즈를 차지하라!"></List>
        <List title="토이레이싱" type="아케이드" about="장난감들의 레이싱 게임"></List>
        <Redlist title="골드러너" type="캐주얼" about="보물을 찾아 떠나는 모험!"></Redlist>
    </div>
</template>
<script>
import List from '../list.vue'
import Redlist from '../Redlist.vue'
export default {
    components:{
    'List':List,
    'Redlist':Redlist
    }
}
</script>
<style>
#games10{
    width:800px;
    float: left;
}

</style>