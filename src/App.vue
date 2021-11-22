<template>
  <div id="app">
    <Backgroundvid></Backgroundvid>
    <Header></Header>
    <Body></Body>
    <router-view/>
    <div id="redborder" v-bind:style="redbord"></div>
  </div>
 
</template>
<script>
import Backgroundvid from './Backgroundvid.vue'
import Header from './components/header/Header.vue'
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
            { path:'/community'},
            ],
            currentNumber:0,  
            redbord:{
              width:'277px',
              height: '70px',
              border: '9px solid red',
              position: 'absolute',
              left:'345px',
              top:'153px',
              transitionDuration: '0.5s'
            },
            initial:0,
            amount:79.3
        }
    },
    mounted(){
        window.document.onkeydown = (event)=>{
          console.log("event",event.keyCode);

           switch(event.keyCode){
            case 38 :         //up
              console.log("up");
              this.currentNumber-=1
              if(this.currentNumber<0){
                console.log('-')
                this.currentNumber=this.routerlist.length-1
                this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length]);
              }
              else{
                this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length]);
              }
              this.initial -=this.amount
              document.getElementById("redborder").style.transform = "translateY(" + this.initial + "px)"
               if(this.currentNumber%this.routerlist.length==this.routerlist.length-1){
                 this.initial=this.amount*(this.routerlist.length-1)
                 document.getElementById("redborder").style.transform="translateY(" + this.initial +"px)"
              }
            break;
            case 40:          //down
               console.log("down")
                this.currentNumber+=1
                this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length])
                this.initial +=this.amount;
                document.getElementById("redborder").style.transform = "translateY(" + this.initial + "px)"
                 if(this.currentNumber%this.routerlist.length==0){
                      this.initial=0
                     document.getElementById("redborder").style.transform="translateY(" + this.initial + "px)"
                  }
            break;
          }  
        }
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
