<template>
  <div id="menu">
    <div class="menu-img"></div>
      <ul>
        <template v-for="(item, index) in menulist" :key="index" >
         <Menuli v-bind:menu="item" v-bind:class="menu(index)"></Menuli> 
         <hr>
        </template>
        <!-- <Menuli v-for="(item, index) in items" v-bind:key="item">{{item}}</Menuli> -->
        <!-- <Menuli v-bind:menu="menulist[0]" v-bind:class="menu(0)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[1]" v-bind:class="menu(1)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[2]" v-bind:class="menu(2)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[3]" v-bind:class="menu(3)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[4]" v-bind:class="menu(4)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[5]" v-bind:class="menu(5)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[6]" v-bind:class="menu(6)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[7]" v-bind:class="menu(7)"></Menuli>
        <hr>
        <Menuli v-bind:menu="menulist[8]" v-bind:class="menu(8)"></Menuli>  --> 
      </ul>
  </div>
</template>
<script>
import Menuli from './Menuli.vue'
export default {
  // render(){

  // },
  components:{
    'Menuli':Menuli
  },
  props:["leftRightNumberM","currentNumberM","routerlistM"],
  data(){
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
      ]
    }
  },
  methods:{
    // menuli:function(){
    //   for(var a=0;a<this.menulist.length;a++){
    //       '<Menuli v-bind:menu="menulist[a] v-bind:class="menu(a)"></Menuli>'
    //   }
    // },
    menu:function(number){
      if(this.currentNumberM%this.routerlistM.length==(number)){
        if(this.leftRightNumberM==0){
          return{ menuredbord:true }
        }
        else if(this.leftRightNumberM!=0 ){
            return{ intomenu: true}
        }
      }
      else{
        return{ menuredbord:false }
      }
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
    padding-top:90px;
    overflow:hidden;
		height:auto;
    padding-bottom: 4.7%;
}
#menu h1{
    color: white;
    position: relative;
    bottom:10px;  
}
#menu a{
    text-decoration-line: none;
    color: white;
    font-size: 40px;  
}
#menu hr{
    color:gray;
    margin-right: 10px;
    margin-left: 30px;
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
    background-image: url(http://61.251.167.74/ktweb/gniportal/resource/menu_select_bar.png);
    background-repeat: no-repeat;
    background-size:260px 65px;  
    }
.intomenu{
   background-image: url(http://61.251.167.74/ktweb/gniportal/resource/s_select_bar.png);
    background-repeat: no-repeat;
    background-size:260px 65px;  
}
</style>
