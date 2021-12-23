<template>
    <div id="service">
        <ol>
        <template v-for="(item,index) in serviceData" :key="index">
            <Servicewindow v-bind="item" v-bind:class="serviceRedBord(index,1)"></Servicewindow>
        </template>
        </ol>
    </div>
</template>
<script>
import Servicewindow from "./Servicewindow.vue"

export default{ 
    components: { 
      "Servicewindow":Servicewindow 
    },
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    data:function(){
        return{
            serviceData:[]
        }
    },
    mounted:function(){
        const request ={
            "svcaId": 210,
            "appId": "5001",
            "useYn": "Y"
        }
        this.axios.post('http://wp-api.gnigame.com/webportal-api/qna/list',request)
        .then((response) =>{
        this.serviceData = response.data.list
        console.log(this.serviceData)
        })
    },
    methods:{
        serviceRedBord:function(number1,number2){
             if(this.currentNumberM%this.routerlistM.length==6){
                if(this.upDownNumberM%this.serviceData.length==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            serviceRedBord:true
                        }
                    }
                else
                    return{
                        serviceRedBord:false
                    }   
                }
           }
        }
    }
}
</script>
<style>
#service{
    float: left;
    position: relative;
    left: 8px;
    top: 470px;
    width: 661px;
    height: 311px;
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/customer_info_back.png);
}
#service ol{
    position: relative;
    bottom:30px;
}
.serviceRedBord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/selsect_customer_info.png);
    background-repeat: no-repeat;
    background-size:100% 100%  
}
.servicered{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_select_bar.png);
    background-repeat: no-repeat;
    background-size:100% 100%  
}
</style>