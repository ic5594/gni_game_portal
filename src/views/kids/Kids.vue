<template>
    <div id="kids">
        <template v-for="(item,index) in kidsData" :key="index">
            <List v-bind:class="kidsRedBord(index,1)" v-bind="item"></List>
        </template>
    </div>
</template>
<script>
import List from '../list.vue'

export default {
    components:{
    'List':List
    },
    data:function(){
        return{
            kidsData:[]
        }
    },
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    mounted:function() {
        const request = {
            "svcaId": 210,
            "top10Yn": "N",
            "categoryId": "3",
            "useYn": "Y"
        }
    this.axios.post('http://wp-api.gnigame.com/webportal-api/app/list',request)
        .then(response => {
            console.log(response.data)
            this.kidsData = response.data.list
            console.log(this.kidsData)
        })
    },
    methods:{
        kidsRedBord:function(number1,number2){
             if(this.currentNumberM%this.routerlistM.length==3){
                if(this.upDownNumberM%4==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            kidsredbord:true
                        }
                    }
                    else
                        return{
                            kidsredbord:false
                        }   
                }
           }
        }
    }
}
</script>
<style>
#kids{
    width:400px;
    float: left;
    margin-top:50px;
}
.kidsredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/box_select.png);
    background-repeat: no-repeat;
    background-size:cover;
}
</style>