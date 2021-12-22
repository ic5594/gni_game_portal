<template>
    <div id="pupular">
    <template v-for="(item,index) in animeData" :key="index">
        <List v-bind="item"></List>
    </template>
    </div>
</template>
<script>
import List from "../list.vue"

export default {
    components:{
    'List':List
    },
    data:function(){
        return{
            animeData:[]
        }
    },
    mounted:function(){
            this.axios.get('./json/anime.json').then(response => {
            console.log(JSON.stringify(response.data))
            this.animeData = response.data
        })
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