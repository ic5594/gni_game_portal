<template>
    <div id="pupular">
    <template v-for="(item, index) in animeData" :key="index">
        <Anmielist v-bind="item"></Anmielist>
    </template>
    </div>
</template>
<script>
import Anmielist from '../Animelist.vue'

export default {
    components:{
    "Anmielist":Anmielist
    },
    data:function(){
        return{
            animeData:[]
        }
    },
    mounted:function() {
        const request = {
            "page": 1,
            "pageSize": 9999,
            "priId": "11503850810"
        }
        this.axios.post('http://wp-api.gnigame.com/webportal-api/comic/all/list',request,{
            headers:{
                "token":"ohSRXyRab-4VCJUzra8Aq1RQINInvyKYEu2Rp_yHT8Q*"
            }
        }
        )
        .then(response => {
            console.log(response.data)
            this.animeData = response.data.list
        })
    },
}
</script>
<style>
#pupular{
    float:left;
    width:900px;
    position: relative;
    left:280px;
    bottom: 460px;
}
</style>