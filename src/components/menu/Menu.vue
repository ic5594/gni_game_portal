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
            { path:'/dropdownanime'},
            { path:'/kids'},
            { path:'/event'},
            { path:'/notice'},
            { path:'/service'},
            { path:'/mypage'},
            { path:'/community'},
            ],
            top10listL:[
              {path: '/top101'},
              {path: '/top103'}, 
              {path: '/top105'},  
              {path: '/top107'},
              {path: '/top109'},
             
            ],
             top10listR:[
              {path: '/top102'},
              {path: '/top104'},
              {path: '/top106'},
              {path: '/top108'},
              {path: '/top1010'}
            ],
            currentNumber:0, //menu 함수 인덱스 번호
            top10NumberL:0, //top10 함수 왼쪽 list 인덱스 번호
            top10NumberR:0, //top10 함수 오른쪽 list 인덱스 번호
            nextNumber:0,
            initial:0,
            amount:79,
            rightnumber:0,
            leftnumber:0.

        }
    },
    computed:{
      menu1:function(){
        if(this.currentNumber%this.routerlist.length==0)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      },
      menu2:function(){
        if(this.currentNumber%this.routerlist.length==1)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      },
      menu3:function(){
        if(this.currentNumber%this.routerlist.length==2)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      }  ,
      menu4:function(){
        if(this.currentNumber%this.routerlist.length==3)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      }  ,
      menu5:function(){
        if(this.currentNumber%this.routerlist.length==4)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      }  ,
      menu6:function(){
        if(this.currentNumber%this.routerlist.length==5)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      }  ,
      menu7:function(){
        if(this.currentNumber%this.routerlist.length==6)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      }  ,
      menu8:function(){
        if(this.currentNumber%this.routerlist.length==7)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      }  ,
      menu9:function(){
        if(this.currentNumber%this.routerlist.length==8)
          return{ menuredbord:true};
        else
          return{menuredbord:false};
      }
    },
    mounted(){
        window.document.onkeydown = (event)=>{
          console.log("event",event.keyCode);

           switch(event.keyCode){
            //up
            case 38 :        
              this.currentNumber-=1
              if(this.currentNumber<0){
                this.currentNumber=this.routerlist.length-1
                this.pushrouterlist()
              }
              else{
                this.pushrouterlist()
              }
              this.top10NumberL=0
              this.top10NumberR=0
              this.nextNumber=0
            break;

            //down
            case 40:          
                this.currentNumber+=1
                this.pushrouterlist()
              this.top10NumberL=0
              this.top10NumberR=0
              this.nextNumber=0
            break;

            //right
            case 39:  
            this.nextNumber+=1      
            if(this.currentNumber==0){
                if(this.nextNumber%2==0){
                  this.$router.push(this.top10listR[0])
                }
                else if(this.nextNumber%2==1){
                  this.$router.push(this.top10listL[0])
                }
            }
            
            if(this.top10NumberL==1){
              if(this.nextNumber%2==0){
                this.$router.push(this.top10listR[1])
              }
              else if(this.nextNumber%2==1){
                this.$router.push(this.top10listL[1])
              }
            }
            if(this.top10NumberL==2){
              if(this.nextNumber%2==0){
                this.$router.push(this.top10listR[2])
              }
              else if(this.nextNumber%2==1){
                this.$router.push(this.top10listL[2])
              }
            }
            if(this.top10NumberL==3){
              if(this.nextNumber%2==0){
                this.$router.push(this.top10listR[3])
              }
              else if(this.nextNumber%2==1){
                this.$router.push(this.top10listL[3])
              }
            }
            if(this.top10NumberL==4){
              if(this.nextNumber%2==0){
                this.$router.push(this.top10listR[4])
              }
              else if(this.nextNumber%2==1){
                this.$router.push(this.top10listL[4])
              }
            }
            
            break;
            
            //left
            case 37:    
            if(this.currentNumber==0){
              if(this.nextNumber>0){
                 if(this.top10NumberL==0){
                    if(this.nextNumber%2==1){
                      this.$router.push(this.routerlist[0])
                      this.nextNumber-=1    
                   }
                    else if(this.nextNumber%2==0){
                      this.$router.push(this.top10listL[0])
                      this.nextNumber-=1    
                   }
                   else if(this.nextNumber<0)
                      stop()
              }
              }
            }
           
            if(this.top10NumberL==1){
                if(this.nextNumber%2==1){
                  this.$router.push(this.routerlist[0])
                  this.nextNumber-=1
                }
                else if(this.nextNumber%2==0){
                  this.$router.push(this.top10listL[1])
                  this.nextNumber-=1
                }
                else if(this.nextNumber<0)
                  stop()
            }
             if(this.top10NumberL==2){
                if(this.nextNumber%2==1){
                  this.$router.push(this.routerlist[0])
                  this.nextNumber-=1
                }
                else if(this.nextNumber%2==0){
                  this.$router.push(this.top10listL[2])
                  this.nextNumber-=1
                }
                else if(this.nextNumber<0)
                  stop()
            }
             if(this.top10NumberL==3){
                if(this.nextNumber%2==1){
                  this.$router.push(this.routerlist[0])
                  this.nextNumber-=1
                }
                else if(this.nextNumber%2==0){
                  this.$router.push(this.top10listL[3])
                  this.nextNumber-=1
                }
                else if(this.nextNumber<0)
                  stop()
            }
             if(this.top10NumberL==4){
                if(this.nextNumber%2==1){
                  this.$router.push(this.routerlist[0])
                  this.nextNumber-=1
                }
                else if(this.nextNumber%2==0){
                  this.$router.push(this.top10listL[4])
                  this.nextNumber-=1
                }
                else if(this.nextNumber<0)
                  stop()
            }
             //초기화
            
            break;

            //listup
            case 33:        
             
            if(this.currentNumber==0){
               this.top10NumberL-=1
              if(this.top10NumberL<0){
                this.top10NumberL=this.top10listL.length-1
                this.$router.push(this.top10listL[this.top10NumberL%this.top10listL.length])
              }
              else{
                this.$router.push(this.top10listL[this.top10NumberL%this.top10listL.length])
              }
              
            }
            
            break;
            
            //listdown
            case 34:        
            this.top10NumberL+=1
            if(this.currentNumber==0)
                this.$router.push(this.top10listL[this.top10NumberL%this.top10listL.length])  
          }  
        }
    },
    methods:{
      pushrouterlist:function(){
        this.$router.push(this.routerlist[this.currentNumber%this.routerlist.length]);
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
  transition: opacity .5s;;
}
</style>