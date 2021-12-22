<template>
    <div id="mypage">
        <div class="mypage" style="display: block;">
            <template v-for="(item, index) in mypageData" :key="index">
                <img v-bind:class="mypageredbord(index,1)" v-bind="item" >
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props:["leftRightNumberM","upDownNumberM","currentNumberM","routerlistM"],
    data:function(){
        return{
         mypageData:[]
        }
    },
    mounted:function(){
        this.axios.get("./json/mypage.json").then((response) => {
            console.log(JSON.stringify(response.data))
            this.mypageData=response.data
        })
    },
    methods:{
        mypageredbord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==7){
                if(this.upDownNumberM%5==(number1)){
                    if(this.leftRightNumberM==(number2)){
                        return{
                            mypageredbord:true
                        }
                    }
                    else
                        return{
                            mypageredbord:false
                        }   
                }
           }
        }
    }
}
</script>
<style>
#mypage{
    float:left;
    background-color:black;
    opacity: 0.8;
    margin-left: 10px;
    margin-top: 470px;
    width: 210px;
    height: 320px;
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_back2.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.mypageredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_select_bar.png);
    background-repeat: no-repeat;
    background-size:100% 100%;  
}
</style>