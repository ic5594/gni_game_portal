<template>
    <div id="body">  
        <ul>
            <li v-bind:class="menu1"><a>TOP10</a></li>
            <hr>
            <li v-bind:class="menu2"><a>게임(17)</a></li>
            <hr>
            <li v-bind:class="menu3"><a>만화(12)</a></li>
            <hr>
            <li v-bind:class="menu4"><a>키즈(4)</a>></li>
            <hr>
            <li v-bind:class="menu5"><a>이벤트</a></li>
            <hr>
            <li v-bind:class="menu6"><a>공지사항</a></li>
            <hr>
            <li v-bind:class="menu7"><a>고객센터</a></li>
            <hr>
            <li v-bind:class="menu8"><a>마이페이지</a></li>
            <hr>
            <li v-bind:class="menu9"><a>커뮤니티</a></li>
          </ul>
    </div>
</template>
<script>
export default {
  data:function(){
    return{
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
      top10listL:[
        { path: '/top101'},
        { path: '/top103'}, 
        { path: '/top105'},  
        { path: '/top107'},
        { path: '/top109'},
             
      ],
      top10listR:[
        { path: '/top102'},
        { path: '/top104'},
        { path: '/top106'},
        { path: '/top108'},
        { path: '/top1010'}
      ],
      gamelistL:[
        { path: '/game1'},
        { path: '/game3'},
        { path: '/game5'},
        { path: '/game7'},
        { path: '/game9'}
      ],
      gamelistR:[
        { path: '/game2'},
        { path: '/game4'},
        { path: '/game6'},
        { path: '/game8'},
        { path: '/game10'}
      ],
      kidslist:[
        { path: '/kids1'},
        { path: '/kids2'},
        { path: '/kids3'},
        { path: '/kids4'}
      ],
      animelist:[
        { path: '/dropanime1'},
        { path: '/dropanime2'},
        { path: '/dropanime3'},
        { path: '/dropanime4'},
      ],
      servicelist:[
        { path: '/service1'},
        { path: '/service2'},
        { path: '/service3'},
        { path: '/service4'},
        { path: '/service5'},
        { path: '/service6'}
      ],
      mypage:[
        { path: '/mypage1'},
        { path: '/mypage2'},
        { path: '/mypage3'},
        { path: '/mypage4'},
        { path: '/mypage5'}
      ],
      currentNumber:0,  //menu 인덱스 번호
      indexNumber:0,    //**list컴포넌트 인덱스 번호
      nextNumber:0,     //list컴포넌트 좌우 인덱스 번호
      enterNumber:0,    //enter입력 후 메뉴 up,down고정을 위한 값
      enterindex:0      //enter입력시 들어가는 index값
    }
  },
  computed:{
    menu1:function(){
      if(this.currentNumber%this.routerlist.length==0)
        return{ menuredbord:true}
      else
        return{menuredbord:false}
    },
    menu2:function(){
      if(this.currentNumber%this.routerlist.length==1)
        return{ menuredbord:true}
      else
        return{menuredbord:false}
    },
    menu3:function(){
      if(this.currentNumber%this.routerlist.length==2)
        return{ menuredbord:true}
      else
        return{menuredbord:false}
    },
    menu4:function(){
      if(this.currentNumber%this.routerlist.length==3)
        return{ menuredbord:true}
      else
        return{menuredbord:false}
    },
    menu5:function(){
      if(this.currentNumber%this.routerlist.length==4)
        return{ menuredbord:true}
      else
        return{menuredbord:false}
    },
    menu6:function(){
        if(this.currentNumber%this.routerlist.length==5)
          return{ menuredbord:true}
        else
          return{menuredbord:false}
      },
    menu7:function(){
      if(this.currentNumber%this.routerlist.length==6)
        return{ menuredbord:true}
      else
        return{menuredbord:false}
    },
    menu8:function(){
      if(this.currentNumber%this.routerlist.length==7)
        return{ menuredbord:true}
      else
        return{menuredbord:false}
    },
    menu9:function(){
      if(this.currentNumber%this.routerlist.length==8)
         return{ menuredbord:true}
      else
        return{menuredbord:false}
    }
  },
  mounted(){
    window.document.onkeydown = (event)=>{
      console.log("event",event.keyCode)

      switch(event.keyCode){
        //up
        case 38 :
          if(this.enterNumber>0){             //currentNumber 고정
            stop()
            this.upEvent(1,this.top10listL)   //top10
            this.upEvent(2,this.gamelistL)    //게임(17)
            this.upEvent(3,this.animelist)    //만화(12)
            this.upEvent(4,this.kidslist)     //키즈(4)
            this.upEvent(7,this.servicelist)  //고객센터
            this.upEvent(8,this.mypage)       //마이페이지
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

          break;

         //down
        case 40:   
          if(this.enterNumber>0){
            stop()
            this.downEvent(1,this.top10listL)   //top10
            this.downEvent(2,this.gamelistL)    //게임(17)
            this.downEvent(3,this.animelist)    //만화(12)
            this.downEvent(4,this.kidslist)     //키즈(4)
            this.downEvent(7,this.servicelist)  //고객센터
            this.downEvent(8,this.mypage)       //마이페이지
          } 
          else{                                 //routerlist메뉴이동  
            this.currentNumber+=1
            this.pushrouterlist()
          }
              
           break;

        //right
        case 39:


        break;

        //left
        case 37:

        break;

        //enter
        case 13:
          this.enterNumber+=1
          this.enterEvent(1,this.top10listL)  //top10
          this.enterEvent(2,this.gamelistL)   //게임{17}  
          this.enterEvent(3,this.animelist)   //만화(12)
          this.enterEvent(4,this.kidslist)    //키즈(4)
          this.enterEvent(7,this.servicelist) //고객센터
          this.enterEvent(8,this.mypage)      //마이페이지

          break;
              
        //esc
        case 27:
          for(var i=0;i<this.routerlist.length;i++){
            this.escEvent(i)
          }

          this.indexNumber=0
          this.nextNumber=0
          this.enterNumber=0
          this.enterindex=0

          break;
      }  
    }
  },
  methods:{
    pushrouterlist:function(){
      this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length])
    },
    upEvent:function(number,event){
      if(this.enterindex==(number)){   
        this.indexNumber-=1
        if(this.indexNumber<0){                 //list인덱스가 0번일때 list인덱스 마지막가게함
          this.indexNumber=(event).length-1
          this.$router.push((event)[this.indexNumber%(event).length])
        }
        else{
          this.$router.push((event)[this.indexNumber%(event).length])
        }
      }
    },
    downEvent:function(number,event){
      if(this.enterindex==(number)){   
        this.indexNumber+=1
        this.$router.push((event)[this.indexNumber%(event).length])
      }
    },
    enterEvent:function(number,event){
      if(this.currentNumber%this.routerlist.length==(number-1)){
        this.enterindex+=(number)
        this.$router.push((event)[0])
      }
    },
    escEvent:function(event){     
      if(this.currentNumber%this.routerlist.length==(event)){
        this.$router.push(this.routerlist[(event)])
      }
    }
  }
}
</script>
<style>
#body{
    float: left;
    background-color:black;
    opacity: 0.8;
    height: 819px;
    width: 317px;
    padding-top:150px;
}
#body h1{
    color: white;  
}
#body li{
    margin: 12px;
    padding-left: 10px;
}
#body a{
    text-decoration-line: none;
    color: white;
    font-size: 40px;
    
}
#body hr{
    color:white;
    margin-right: 10px;
    margin-left: 10px;
}
body{
    margin: 0;
    padding: 0;
}
.menuredbord{
    border:9px solid red;
    padding: -10px;
    width:238px;
    height: 57px;
    transition: opacity .5s;;
}
.fade-enter{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity .5s;
}
</style>