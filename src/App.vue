<template>
  <div id="app">
    <Backgroundvid></Backgroundvid>
    <Leftsidebar></Leftsidebar>
    <Menu v-bind:currentNumberM="currentNumber" v-bind:routerlistM="routerlist"></Menu>
    <router-view/>
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
      nextNumber:0,     //list컴포넌트 좌우 인덱스 번호
      enterNumber:0,    //enter입력 후 menu up,down고정을 위한 값
      enterindex:0,     //enter입력시 들어가는 index값
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
   mounted(){
    window.document.onkeydown = (event)=>{
      console.log("event",event.keyCode)

      switch(event.keyCode){
        //enter
        case 13:
          this.enterNumber+=1   //menu바 고정을 위한 넘버 값
          this.enterEvent(1,this.top10listL)  //top10
          this.enterEvent(2,this.gamelistL)   //게임{17}  
          this.enterEvent(3,this.animelist)   //만화(12)
          this.enterEvent(4,this.kidslist)    //키즈(4)
          this.enterEvent(5,this.eventlist)
          this.enterEvent(6,this.noticelist)
          this.enterEvent(7,this.servicelist) //고객센터
          this.enterEvent(8,this.mypage)      //마이페이지
          this.enterEvent(9,this.community)   //커뮤니티

          break;
  
        //esc
        case 27:
          for(var i=0;i<this.routerlist.length;i++){
            this.escEvent(i)
          }
          this.initialization()

          break;

        //up
        case 38 :
          if(this.enterNumber>0){             //currentNumber 고정
            stop()
            this.upEvent(1,this.top10listL,this.top10listR)   //top10
            this.upEvent(2,this.gamelistL,this.gamelistR)    //게임(17)
            this.upEvent(3,this.animelist,this.animelist)    //만화(12)
            this.upEvent(4,this.kidslist,this.kidslist)     //키즈(4)
            this.upEvent(5,this.eventlist,this.eventlist)
            this.upEvent(6,this.noticelist,this.noticelist)
            this.upEvent(7,this.servicelist,this.servicelist)  //고객센터
            this.upEvent(8,this.mypage,this.mypage)       //마이페이지
            this.upEvent(9,this.community,this.community)   //커뮤니티
          } 
          else{                               //routerlist메뉴이동
            this.currentNumber-=1
            if(this.currentNumber<0){
              this.currentNumber=this.routerlist.length-1
              this.pushrouterlist()
            }
            else{
              this.pushrouterlist()
            }
          }

          this.nextNumber==0
          console.log('indexnumber: ',this.indexNumber)
          break;

         //down
        case 40:   
          if(this.enterNumber>0){
            stop()
            for(var e=0;e<this.currentNumber.length;e++){
              this.downEvent(e,this)
            }
            this.downEvent(1,this.top10listL,this.top10listR)   //top10
            this.downEvent(2,this.gamelistL,this.gamelistR)    //게임(17)
            this.downEvent(3,this.animelist)    //만화(12)
            this.downEvent(4,this.kidslist)     //키즈(4)
            this.downEvent(5,this.eventlist)
            this.downEvent(6,this.noticelist)
            this.downEvent(7,this.servicelist)  //고객센터
            this.downEvent(8,this.mypage)       //마이페이지
            this.downEvent(9,this.community)   //커뮤니티

          } 
          else{                                 //routerlist메뉴이동  
            this.currentNumber+=1
            this.pushrouterlist()
          }

          this.nextNumber==0  
          console.log('indexnumber: ',this.indexNumber)
          break;

        //right
        case 39:
          if(this.enterNumber>0){
            this.nextNumber+=1
            if(this.enterindex==1){       //top10
              for(var a=0;a<this.top10listL.length;a++){
                this.rightEvent(a,this.top10listL,this.top10listR)
              }
            }
            if(this.enterindex==2){       //게임
              for(var b=0;b<this.top10listL.length;b++){
                this.rightEvent(b,this.gamelistL,this.gamelistR)
              }
            }
          }
        console.log('nextnumber:',this.nextNumber)
        break;

        //left
        case 37:
          if(this.enterNumber>0){
            this.nextNumber-=1
            if(this.enterindex==1){                 //top10
              for(var c=0;c<this.top10listR.length;c++){
                this.leftEvent(c,this.top10listR,this.top10listL)
              }
            }
            if(this.enterindex==2){
              for(var d=0;d<this.gamelistR.length;d++){     //게임
                this.leftEvent(d,this.gamelistR,this.gamelistL)
              }
            }
          }
          console.log('nextnumber:',this.nextNumber)
        break;
      }  
    }
  },
  methods:{
    pushrouterlist:function(){      //메뉴이동 메소드
      this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length])
    },
    upEvent:function(number,event1,event2){
      if(this.enterindex==(number)){   
        this.indexNumber-=1
        if(Math.abs(this.nextNumber)%2==0){
          if(this.indexNumber<0){                 //list인덱스가 0번일때 list인덱스 마지막가게함
            this.indexNumber=(event1).length-1
            this.$router.push((event1)[this.indexNumber%(event1).length])
          }
          else{
            this.$router.push((event1)[this.indexNumber%(event1).length])
          }
        }
        else if(Math.abs(this.nextNumber)%2==1){
          if(this.indexNumber<0){                 //list인덱스가 0번일때 list인덱스 마지막가게함
            this.indexNumber=(event2).length-1
            this.$router.push((event2)[this.indexNumber%(event2).length])
          }
          else{
            this.$router.push((event2)[this.indexNumber%(event2).length])
          }
        }
      }
    },
    downEvent:function(number,event1,event2){
      if(this.enterindex==(number)){
        this.indexNumber+=1   //1~9
        if(Math.abs(this.nextNumber)%2==0){
          this.$router.push((event1)[this.indexNumber%(event1).length])
        }
        else if(Math.abs(this.nextNumber)%2==1){
          this.$router.push((event2)[this.indexNumber%(event2).length])
        }
      }
    },
    rightEvent:function(number,event1,event2){
      if(this.indexNumber==(number) || this.indexNumber%(event1).length==(number)){
        if(Math.abs(this.nextNumber)%2==1){
          this.$router.push(event2[(number)])
        }
        else if(Math.abs(this.nextNumber)%2==0){
          this.$router.push((event1)[(number)])
        }
      }
    },
    leftEvent:function(number,event1,event2){
       if(this.indexNumber==(number) || this.indexNumber%(event1).length==(number)){
        if(Math.abs(this.nextNumber)%2==0){
          this.$router.push((event2)[(number)])
        }
        else if(Math.abs(this.nextNumber)%2==1){
          this.$router.push((event1)[(number)])
        }  
      }
    },
    enterEvent:function(number,event){
      if(this.currentNumber%this.routerlist.length==(number-1)){
        this.enterindex+=(number)
        this.$router.push((event)[0])
      }
    },
    escEvent:function(number){      
      if(this.currentNumber%this.routerlist.length==(number)){
        this.$router.push(this.routerlist[(number)])
      }
    },
    
    initialization:function(){    //여러 인덱스 값 초기화
      this.indexNumber=0
      this.nextNumber=0
      this.enterNumber=0
      this.enterindex=0
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
  height: 100%;
}
</style>
