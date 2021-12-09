<template>
  <div id="app">
    <Backgroundvid></Backgroundvid>
    <Leftsidebar></Leftsidebar>
    <Menu v-bind:currentNumberM="currentNumber" v-bind:routerlistM="routerlist"
     v-bind:goNumberM="goNumber" v-bind:indexNumberM="indexNumber"></Menu>
    <router-view v-slot="{ Component }"> 
      <component :is="Component"  v-bind:currentNumberM="currentNumber" 
      v-bind:routerlistM="routerlist" v-bind:goNumberM="goNumber" v-bind:indexNumberM="indexNumber"/> 
    </router-view>
  </div>
</template>
<script>
import Backgroundvid from './Backgroundvid.vue'
import Leftsidebar from './components/leftsidebar/Leftsidebar.vue'
import Menu from './components/menu/Menu.vue'

export default {
  data:function(){
    return{
      currentNumber:0,  //menu 인덱스 번호
      indexNumber:0,    //list컴포넌트 상하 인덱스 번호
      goNumber:0,    //list컴포넌트 좌우 인덱스 번호    
      routerlist:[
        { path: '/'},
        { path:'/game'},
        { path:'/dropanime'},
        { path:'/kids'},
        { path:'/event'},
        { path:'/notice'},
        { path:'/service'},
        { path:'/mypage'},
        { path:'/community'},
      ]
    }
  },
  components:{
    'Leftsidebar':Leftsidebar,
    'Backgroundvid':Backgroundvid,
    'Menu':Menu
  },
  computed(){
    if(this.goNumber==0){
      return{
        indexNumber:0
      }
    }
  },
  mounted(){
    window.document.onkeydown = (event)=>{
      console.log(event.keyCode)

      switch(event.keyCode){
        //enter
        case 13:

        break

        //esc
        case 27:

        break

        //up
        case 38 : 
         this.indexNumber-=1
          if(this.goNumber>0){
            stop()
            if(this.indexNumber==-1){
              if(this.currentNumber%this.routerlist.length==0 || 
              this.currentNumber%this.routerlist.length==1 || 
              this.currentNumber%this.routerlist.length==7){
                  this.indexNumber=4
                }
                if(this.currentNumber%this.routerlist.length==2 ||
                this.currentNumber%this.routerlist.length==3){
                  this.indexNumber=3
                }
                if(this.currentNumber%this.routerlist.length==6){
                  this.indexNumber=5
                }
    
            }
          }
          else{
            this.currentNumber-=1
            if(this.currentNumber<0){
              this.currentNumber=this.routerlist.length-1
              this.pushrouterlist()
            }
            else{
                this.pushrouterlist()
            }
            this.initialization()
          }

          console.log("gonumber",this.goNumber,"indexnumber",this.indexNumber)
          break;

         //down
        case 40:
          if(this.goNumber>0){
            stop()
            this.indexNumber+=1
          }
          else{
            this.currentNumber+=1
            this.pushrouterlist()
            this.initialization()
          }

          console.log("gonumber",this.goNumber,"indexnumber",this.indexNumber)
          break;

        //right
        case 39:
        this.goNumber+=1
        if(this.goNumber==3){
          this.stay()
        }
        else if(this.currentNumber==4 || this.currentNumber==5){
          if(this.goNumber==2){
            this.goNumber=1
          }
        }
        
        console.log("gonumber",this.goNumber,"indexnumber",this.indexNumber)
        break;


        //left
        case 37:
          this.goNumber-=1
          if(this.goNumber==0){
              this.initialization()
          }
         console.log("gonumber",this.goNumber,"indexnumber",this.indexNumber)
        break;
      }  
    }
  },
  methods:{
    pushrouterlist:function(){      //메뉴이동 메소드
      this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length])
    },
    initialization:function(){    //여러 인덱스 값 초기화
      this.indexNumber=0
      this.goNumber=0
    },
    stay:function(){
      this.goNumber=2
    }
  }
}
</script>
<style>

#app input{
  float:right;
  background-color: white;
  width:100px;
  z-index: 1;
  height: 100%;
}

</style>
