<template>
  <div id="app">
    <Backgroundvid></Backgroundvid>
    <Leftsidebar v-bind:leftRightNumberM="leftRightNumber"></Leftsidebar>
    <Menu v-bind:currentNumberM="currentNumber" v-bind:routerlistM="routerlist"
     v-bind:leftRightNumberM="leftRightNumber" v-bind:upDownNumberM="upDownNumber"></Menu>
    <router-view v-slot="{ Component }"> 
      <component :is="Component"  v-bind:currentNumberM="currentNumber" 
      v-bind:routerlistM="routerlist" v-bind:leftRightNumberM="leftRightNumber" v-bind:upDownNumberM="upDownNumber"/> 
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
      upDownNumber:0,    //list컴포넌트 상하 인덱스 번호
      leftRightNumber:0,      //list컴포넌트 좌우 인덱스 번호    
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
    if(this.leftRightNumber==0){
      return{
        upDownNumber:0
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
         this.upDownNumber-=1
          if(this.leftRightNumber>0){                
            stop()
            if(this.upDownNumber==-1){                 //세부 메뉴 인덱스  값 고정
              if(this.currentNumber%this.routerlist.length==0 || 
              this.currentNumber%this.routerlist.length==1 || 
              this.currentNumber%this.routerlist.length==7){
                this.upDownNumber=4
              }
              else if(this.currentNumber%this.routerlist.length==2 ||
                this.currentNumber%this.routerlist.length==3){
                this.upDownNumber=3
              }
              else if(this.currentNumber%this.routerlist.length==6){
                this.upDownNumber=5
              }
              else if(this.currentNumber%this.routerlist.length==8){
                this.upDownNumber=2
              }
            }
          }
          else if(this.leftRightNumber<0){   //leftsidebar focus이동시 상하키 고정
            stop()
          } 
          else{                       //menu 이동
            this.currentNumber-=1
            if(this.currentNumber<0){
              this.currentNumber=this.routerlist.length-1
              this.pushrouterlist()
            }
            else{
                this.pushrouterlist()
            }
            this.initialization()   //menu시 상하,좌우 인덱스 값 초기화
          }

          console.log("leftRightNumber",this.leftRightNumber,
          "upDownNumber",this.upDownNumber)
          break;

         //down
        case 40:
          if(this.leftRightNumber>0){
            stop()
            this.upDownNumber+=1
          }
          else if(this.leftRightNumber<0){       //leftsidebar focus이동시 상하키 고정
            stop()
          } 
          else{                           //menu 이동
            this.currentNumber+=1
            this.pushrouterlist()
            this.initialization()
          }

          console.log("leftRightNumber",this.leftRightNumber,
          "upDownNumber",this.upDownNumber)
        break;

        //right
        case 39:
          this.leftRightNumber+=1                //좌우인덱스값 증가
          if(this.leftRightNumber==3){
            this.leftRightNumber=2
          }
          for(var a=2;a<9;a++){
            this.leftRightNumberstop(a)
          }
          console.log("leftRightNumber",this.leftRightNumber,
          "upDownNumber",this.upDownNumber)
        break;
 
        //left
        case 37:
          this.leftRightNumber-=1              //좌우인덱스값 감소
          if(this.leftRightNumber==0){         //좌우인덱스값이 0이되면 다른 인덱스 값 초기화
              this.initialization()
          }
          else if(this.leftRightNumber<-1){
            this.leftRightNumber=-1
          }
          console.log("leftRightNumber",this.leftRightNumber,
          "upDownNumber",this.upDownNumber)
        break;
      }  
    }
  },
  methods:{
    pushrouterlist:function(){      //메뉴이동 메소드
      this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length])
    },
    leftRightNumberstop(number){
      if(this.currentNumber==(number)){   //세부 메뉴에서 오른쪽으로 더 안가지게 고정
        if(this.leftRightNumber==2)
          this.leftRightNumber=1
      }
    },
    initialization:function(){    //여러 인덱스 값 초기화
      this.upDownNumber=0
      this.leftRightNumber=0
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
