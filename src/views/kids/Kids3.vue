<template>
    <div id="kids3">
        <List title="키즈팝" type="유아교육" about="아이들의 눈높이 교육!"></List>
        <List title="타요와 신나는 놀이" type="유아" about="TV앱 강력추천! 타요!"></List>
        <Redlist title="판다팡" type="퍼즐" about="판다와 함께하는 3매칭 퍼즐"></Redlist>
        <List title="2048" type="퍼즐" about="요정과 함께하는 숫자퍼즐게임"></List>   
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
#kids3{
    width:400px;
    float: left;
}

</style>