<template>
    <div id="body">  
        <ul>
            <li><a>TOP10</a></li>
            <hr>
            <li><a>게임(17)</a></li>
            <hr>
            <li><a>만화(12)</a></li>
            <hr>
            <li><a>키즈(4)</a>></li>
            <hr>
            <li><a>이벤트</a></li>
            <hr>
            <li><a>공지사항</a></li>
            <hr>
            <li><a>고객센터</a></li>
            <hr>
            <li><a>마이페이지</a></li>
            <hr>
            <li><a>커뮤니티</a></li>
            <div id="redborder" v-bind:style="redbord" v-if="delet"></div>
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
              left:'345px',
              top:'153px',
              transitionDuration: '0.5s',
              width:'277px',
              height:'70px',
              border:'9px solid red',
              position: 'absolute'
            },
            initial:0,
            amount:79,
            rightnumber:0,
            leftnumber:0.

        }
    },
    mounted(){
        window.document.onkeydown = (event)=>{
          console.log("event",event.keyCode);

           switch(event.keyCode){
            case 38 :         //up
              this.currentNumber-=1
              if(this.currentNumber<0){
                console.log('-')
                this.currentNumber=this.routerlist.length-1
                this.pushrouter()
              }
              else{
                this.pushrouter()
              }
              this.initial -=this.amount
              this.redbordmove()
               if(this.currentNumber%this.routerlist.length==this.routerlist.length-1){
                 this.initial=this.amount*(this.routerlist.length-1)
                this.redbordmove()
              }
            break;
            case 40:          //down
                this.currentNumber+=1
                this.pushrouter()
                this.initial +=this.amount;
                this.redbordmove()
                 if(this.currentNumber%this.routerlist.length==0){
                      this.initial=0
                     this.redbordmove()
                  }
            break;
            case 39:
              
              
            break;
            case 37:
              
            break;
          }  
        }
    },
    methods:{
      pushrouter:function(){
        this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length]);
      },
      redbordmove:function(){
        this.redbord.transform="translateY(" + this.initial + "px)"
      },
    
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
}
#body a{
    text-decoration-line: none;
    color: white;
    font-size: 40px;
    
}
#body hr{
    color:white;
    margin-right: 15px;
}
body{
    margin: 0;
    padding: 0;
}


</style>