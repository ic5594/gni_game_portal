<template>
    <div id="popular">
    <template v-for="(item, index) in animeData" :key="index">
        <Anmielist v-bind="item"></Anmielist>
    </template>
    <p id="error" v-if="animeerrormessage">&nbsp;&nbsp;&nbsp;&nbsp;페이지 오류!TV를 껏다 켜주세요.</p>
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
            animeData:[],
            animeerrormessage:false
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
        })
        .then((response) => {
            this.animeData = response.data.list
            console.log(this.animeData)
        })
        .catch((error)=>{
            this.animeerrormessage=true
            console.log(error.response)
        })
    }
}
</script>
<style>
#popular{
    float:left;
    width:900px;
    position: relative;
    left:280px;
    bottom: 460px;
}
#popular p{
    position: relative;
    top:280px;
}
</style>