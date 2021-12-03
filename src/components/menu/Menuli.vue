<template>
    <li v-bind:class="menumove">{{menu}} </li>
</template>
<script>
export default {
    props:["menumove","menu"],
    data:function(){
        return{
            
        }
    },
    watch:{
        menumove:function(number){
            if(this.currentNumberM%this.routerlistM.length==(number))
                return{ menuredbord:true }
            else
                return{ menuredbord:false }
        }
    }
}
</script>