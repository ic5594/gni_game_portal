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
  components:{
    'Leftsidebar':Leftsidebar,
    'Backgroundvid':Backgroundvid,
    'Menu':Menu
  },
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
        ],
        top10data:['/starmon',
        '/goldrunner',
        '/matgo',
        '/spiritfrined',
        '/offensehero',
        '/heroallstarz',
        '/herolegend',
        '/jungletower',
        '/toyracing',
        '/cheezerun'
        ],
        gamedata:[
        '/matgo',
        '/heroallstarz',
        '/goshooter',
        '/battleking',
        '/toyracing',
        '/petmarble',
        '/herolegend',
        '/starmon',
        '/cheezerun',
        '/goldrunner'
        ],
        servicedata:[
        '/service1',
        '/service2',
        '/service3',
        '/service4',
        '/service5',
        '/service6'
        ],
        mypagedata:[
        '/mypage1',
        '/mypage2',
        '/mypage3',
        '/mypage4',
        '/mypage5',
        ],
        kidsdata:[
        '/kidspop',
        '/tayo',
        '/pangdapang',
        '/two048'
        ]
    }
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
          if(this.currentNumber%this.routerlist.length==0){         //top10 세부메뉴 이동
            for(var a=0;a<this.top10data.length/2;a++){
              this.top10entermenu1(a,1)
            }
            for(var b=0;b<this.top10data.length/2;b++){
              this.top10entermenu2(b,2)
            }
          }
          else if(this.currentNumber%this.routerlist.length==1){    //game 세부메뉴 이동
            for(var c=0;c<this.gamedata.length/2;c++){
              this.gameentermenu1(c,1)
            }
            for(var d=0;d<this.gamedata.length/2;d++){
              this.gameentermenu2(d,2)
            }
          }
           else if(this.currentNumber%this.routerlist.length==3){    //game 세부메뉴 이동
              if(this.leftRightNumber==1){
                for(var q=0;q<this.kidsdata.length;q++){
                  this.kidsentermenu(q)
              }
            }
          }
          else if(this.currentNumber%this.routerlist.length==6){     //service 세부메뉴 이동
            if(this.leftRightNumber==1){
              for(var e=0;e<this.servicedata.length;e++){
                this.serviceentermenu(e)
              }
            }
          }else if(this.currentNumber%this.routerlist.length==7){     //mypage 세부메뉴 이동
            if(this.leftRightNumber==1){
              for(var f=0;f<this.mypagedata.length;f++){
                this.mypageentermenu(f)
              }
            }
          }
        break

        //esc
        case 27:
           for(var p=0;p<2;p++){
             this.escmenu(p)
           }
           if(this.currentNumber%this.routerlist.length==3){
              this.$router.push({ path: '/kids'})
            }
            for(var o=6;o<8;o++){
              this.escmenu(o)
            }
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
          else{                              //menu 이동
            this.currentNumber-=1
            if(this.currentNumber<0){
              this.currentNumber=this.routerlist.length-1
              this.pushrouterlist()
            }
            else{
                this.pushrouterlist()
            }
            this.initialization()           //menu시 상하,좌우 인덱스 값 초기화
          }

          console.log("leftRight",this.leftRightNumber,
          "upDown",this.upDownNumber)
          break;

         //down
        case 40:
          if(this.leftRightNumber>0){
            stop()
            this.upDownNumber+=1
          }
          else if(this.leftRightNumber<0){     //leftsidebar focus이동시 상하키 고정
            stop()
          } 
          else{                                //menu 이동
            this.currentNumber+=1
            this.pushrouterlist()
            this.initialization()
          }
          console.log("leftRight",this.leftRightNumber,
          "upDown",this.upDownNumber)
        break;

        //right
        case 39:
          this.leftRightNumber+=1                //좌우인덱스값 증가
          if(this.leftRightNumber==3){
            this.leftRightNumber=2
          }
          for(var g=2;g<9;g++){                 //레프트 인덱스 3이되면 2로 가지 back해주는 함수
            this.leftRightNumberstop(g)
          }
          console.log("leftRight",this.leftRightNumber,
          "upDown",this.upDownNumber)
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
          console.log("leftRight",this.leftRightNumber,
          "upDown",this.upDownNumber)
        break;
      }  
    }
  },
  methods:{
    pushrouterlist:function(){      //메뉴이동 메소드
      this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length])
    },
    top10entermenu1:function(number1){//top10 세부메뉴 이동 메소드
      if(this.upDownNumber%5==(number1) && this.leftRightNumber==1){
              this.$router.push(this.top10data[(number1)])
            }
    },
    top10entermenu2:function(number1){//top10 세부메뉴 이동 메소드
      if(this.upDownNumber%5==(number1) && this.leftRightNumber==2){
              this.$router.push(this.top10data[(number1+5)])
            }
    },
    gameentermenu1:function(number1){//game 세부메뉴 이동 메소드
      if(this.upDownNumber%5==(number1) && this.leftRightNumber==1){
              this.$router.push(this.gamedata[(number1)])
            }
    },
    gameentermenu2:function(number1){//game 세부메뉴 이동 메소드
      if(this.upDownNumber%5==(number1) && this.leftRightNumber==2){
              this.$router.push(this.gamedata[(number1+5)])
            }
    },
    kidsentermenu:function(number){//kids 세부메뉴 이동 메소드
      if(this.upDownNumber%this.kidsdata.length==(number)){
        this.$router.push(this.kidsdata[(number)])
      }
    },
    serviceentermenu:function(number){              //서비스 메뉴 라우터 이동함수
      if(this.upDownNumber%this.servicedata.length==(number)){
              this.$router.push(this.servicedata[(number)])
            }
    },
    mypageentermenu:function(number){              //서비스 메뉴 라우터 이동함수
      if(this.upDownNumber%this.mypagedata.length==(number)){
              this.$router.push(this.mypagedata[(number)])
            }
    },
    escmenu:function(number){
      if(this.currentNumber%this.routerlist.length==(number)){
              this.$router.push(this.routerlist[(number)])
            }
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
