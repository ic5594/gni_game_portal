<template>
    <div id="menu">
      <div class="menu-img"></div>
        <Menuli></Menuli>
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
import Menuli from './Menuli.vue'
export default {
  components:{
    'Menuli':Menuli
  },
  data:function(){
    return{
      menulist:[
                "TOP10",
                "게임(17)",
                "만화(12)",
                "키즈(4)",
                "이벤트",
                "공지사항",
                "고객센터",
                "마이페이지",
                "커뮤니티"
            ],
            menunumber:0
    }
  },
  name:"menumove",
  props:["currentNumberM","routerlistM",],
  computed:{            //menu바 이동 클래스 스타일 바인딩
    menu1:function(){
      if(this.currentNumberM%this.routerlistM.length==0)
        return{ menuredbord:true }
      else
        return{ menuredbord:false }
    },
    menu2:function(){
      if(this.currentNumberM%this.routerlistM.length==1)
        return{ menuredbord:true }
      else
        return{ menuredbord:false }
    },
    menu3:function(){
      if(this.currentNumberM%this.routerlistM.length==2)
        return{ menuredbord:true }
      else
        return{ menuredbord:false }
    },
    menu4:function(){
      if(this.currentNumberM%this.routerlistM.length==3)
        return{ menuredbord:true }
      else
        return{ menuredbord:false }
    },
    menu5:function(){
      if(this.currentNumberM%this.routerlistM.length==4)
        return{ menuredbord:true }
      else
        return{ menuredbord:false }
    },
    menu6:function(){
        if(this.currentNumberM%this.routerlistM.length==5)
          return{ menuredbord:true }
        else
          return{ menuredbord:false }
      },
    menu7:function(){
      if(this.currentNumberM%this.routerlistM.length==6)
        return{ menuredbord:true }
      else
        return{ menuredbord:false }
    },
    menu8:function(){
      if(this.currentNumberM%this.routerlistM.length==7)
        return{ menuredbord:true }
      else
        return{ menuredbord:false }
    },
    menu9:function(){
      if(this.currentNumberM%this.routerlistM.length==8)
         return{ menuredbord:true }
      else
        return{ menuredbord:false }
    }
  }
}
</script>
<style>
#menu{
    float: left;
    background-color:black;
    opacity: 0.8;
    height: 110vh;
    width: 340px;
    padding-top:100px;
    overflow:hidden;
		height:auto;
    padding-bottom: 4.7%;
}
#menu h1{
    color: white;  
}
#menu li{
    margin: 12px;
    padding-left: 10px;
}
#menu a{
    text-decoration-line: none;
    color: white;
    font-size: 40px;
    
}
#menu hr{
    color:white;
    margin-right: 10px;
    margin-left: 10px;
}
.menu-img{
   width: 370px;
    height: 100px;
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/title/MainTitle_gnigame_2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border:1px solid black;
    margin-top:-70px;
}
.menuredbord{
    border:9px solid red;
    padding: -10px;
    width:238px;
    height: 57px;
    transition: opacity .5s;;
}
.menublackbord{
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