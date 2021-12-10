<template>
    <div id="leftside">
        <img src="http://61.251.167.74/webportal2018/bnr/20210514134035259.png" id="leftimg" v-bind:class="leftredbord()">        
    </div>
</template>
<script>
export default {
    props:["leftRightNumberM","currentNumberM","routerlistM"],
    methods:{
        leftredbord:function(){
            if(this.leftRightNumberM==-1){
                return{
                    leftredbord:true
                }
            }
            else{
                return{
                    leftredbord:false
                }
            }
        }
    }
}
</script>
<style>
#leftside{
    float: left;
    background-color:black;
    opacity: 0.8;
    height: 100vh;
    width: 317px;
    overflow:hidden;
    margin:0 auto;
}
#leftimg{
    width: 230px;
    height: 850px;
    position: relative;
    top:50px;
    left:70px;
}
body{
    margin: 0;
    padding: 0;
}
.leftredbord{
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/b_event_banner_select_01.png);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>