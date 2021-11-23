<template>
  <div id="app" v-bind:list='routerlist' v-bind:number="currentNumber">
    <Backgroundvid></Backgroundvid>
    <Leftsidebar></Leftsidebar>
    <Menu></Menu>
    <router-view/>
  </div>
 
</template>
<script>
import Backgroundvid from './Backgroundvid.vue'
import Leftsidebar from './components/leftsidebar/Leftsidebar.vue'
import Menu from './components/menu/Menu.vue'

export default {
  components:{
    'Leftsidebar':Leftsidebar,
    'Backgroundvid':Backgroundvid,
    'Menu':Menu
  },
  
}
</script>
<style>
#app input{
  float:right;
  background-color: white;
  width:100px;
  z-index: 1;
}
</style>
