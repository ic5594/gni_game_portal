<template>
    <div id="community">
    <div v-bind:class="communityredbord(0,1)" style="position: absolute; left: 9px; width: 651px; height: 182px; top: 60px; background-image: url(&quot;http://61.251.167.74/webportal2018/qrCode/20180820093823544.png&quot;);"><img src="http://wp-api.gnigame.com/webportal-api/getQrCode?encQrSeq=201&amp;encUserKey=U77Awdlz_WrSToewJmSsmJwiVkaHgdKvgRI4j2A0vTM*" style="position: absolute; top: 25px; left: 25px; width: 133px; height: 133px;"></div>
    <div v-bind:class="communityredbord(1,1)" style="position: absolute; left: 9px; width: 651px; height: 182px; top: 254px; background-image: url(&quot;http://61.251.167.74/webportal2018/qrCode/20180820092942328.png&quot;);"><img src="http://wp-api.gnigame.com/webportal-api/getQrCode?encQrSeq=226&amp;encUserKey=U77Awdlz_WrSToewJmSsmJwiVkaHgdKvgRI4j2A0vTM*" style="position: absolute; top: 25px; left: 493px; width: 133px; height: 133px;"></div>
    <div v-bind:class="communityredbord(2,1)" style="position: absolute; left: 9px; width: 651px; height: 182px; top: 448px; background-image: url(&quot;http://61.251.167.74/webportal2018/qrCode/20180820093000682.png&quot;);"><img src="http://wp-api.gnigame.com/webportal-api/getQrCode?encQrSeq=227&amp;encUserKey=U77Awdlz_WrSToewJmSsmJwiVkaHgdKvgRI4j2A0vTM*" style="position: absolute; top: 25px; left: 25px; width: 133px; height: 133px;"></div>
    </div>
</template>
<script>
export default {
    props:["goNumberM","indexNumberM","currentNumberM","routerlistM"],
    methods:{
        communityredbord:function(number1,number2){
            if(this.currentNumberM%this.routerlistM.length==8){
                if(this.indexNumberM%3==(number1)){
                    if(this.goNumberM==(number2)){
                        return{
                            communityedbord:true
                        }
                    }
                    else
                        return{
                            communityedbord:false
                        }   
                }
           }
        }   
    }
}
</script>
<style>
#community{
    position: relative;
    left:750px;
    top:100px;
    height: 100vh;
}
#community div{
    margin: 10px;
}
.communityedbord{
    border: 5px red solid; 
}

</style>