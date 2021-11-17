<template>
  <div id="app">
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
  }
  
}
</script>
<style>

</style>
