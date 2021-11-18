<template>
  <div id="app" v-on:keyup.up="up" v-on:keyup.down="down" v-on:keyup.right="right" v-on:keyup.left="left">
    <Backgroundvid></Backgroundvid>
    <Header></Header>
    <Body></Body>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/header/Header.vue'
import Backgroundvid from './Backgroundvid.vue'
import Body from './components/body/Body.vue'

export default {
  components:{
    'Header':Header,
    'Backgroundvid':Backgroundvid,
    'Body':Body
  },
  data:function(){
        return{
            routerlist:[
            { path:'/game'},
            { path:'/kids'},
            { path:'/event'},
            { path:'/notice'},
            { path:'/service'},
            { path:'/mypage'},
            { path:'/community'}],
            currentNumber:0,  
            timer:0
        };
    },
  
}
</script>
<style>

</style>
