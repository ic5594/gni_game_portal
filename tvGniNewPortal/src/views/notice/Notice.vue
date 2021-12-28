<template>
    <div id="notice">
        <No v-bind:class="goredNo()"></No>
    </div>
</template>
<script>
import No from '../No.vue'

export default {
    components:{
        'No':No
    },
    props:["leftRightNumberM","currentNumberM","routerlistM"],
    methods:{
       goredNo:function(){
            if(this.currentNumberM%this.routerlistM.length==5){
                if(this.leftRightNumberM==1){
                        return{
                            noticeredbord:true
                        }
                    }
                    else
                        return{
                            noticeredbord:false
                        }
            }
        }
    }
}
</script>
<style>
.noticeredbord{
    border: red solid 2px;
    position: relative;
   right: 3px;
}

</style>