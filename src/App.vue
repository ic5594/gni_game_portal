<template>
  <div id="app"  v-bind="number in [currentNumber]" transition="fade">
    <Backgroundvid></Backgroundvid>
    <Header></Header>
    <Body></Body>
    <router-view/>
    <input type="button" v-on:keyup.up='up' v-on:keyup.down='down' v-on:keyup.right="right" v-on:keyup.left="left">
    <div id="redborder" v-bind:style="redbord"></div>
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
            { path: '/'},
            { path:'/game'},
            { path:'/dropdownanime'},
            { path:'/kids'},
            { path:'/event'},
            { path:'/notice'},
            { path:'/service'},
            { path:'/mypage'},
            { path:'/community'}],
            currentNumber:0,  
            timer:0,
            redbord:{
              width:'277px',
              height: '70px',
              border: '6px solid red',
              position: 'absolute',
              left:'345px',
              top:'154px',
              WebkitTransitionDuration: '1s',
              MozTransitionDuration: '1s',
              MsTransitionDuration: '1s',
              OTransitionDuration: '1s',
              transitionDuration: '1.5s'
            }
        }
    },
    methods:{
      up:function(){
        console.log("up")
        this.redbord.Transform="translateY(-0.1px)" 
        this.currentNumber-=1
        this.$router.push(this.routerlist[Math.abs(this.currentNumber)%this.routerlist.length])
          },
      down:function(){
        console.log("down")
        this.redbord.transform="translateY(75px)"  
        this.currentNumber+=1
        this.$router.push(this.routerlist[Math.abs(this.currentNumber)%this.routerlist.length])

      },

    }
  
}
</script>
<style>
#app input{
  float:right;
  background-color: white;
  width:100px;
  z-index: 1;
}
.fade-transition {
  transition: all 2s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}

</style>
