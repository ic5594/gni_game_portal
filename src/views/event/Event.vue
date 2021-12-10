<template>
    <div id="event">
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
            if(this.currentNumberM%this.routerlistM.length==4){
                if(this.leftRightNumberM==1){
                        return{
                            eventredbord:true
                        }
                    }
                    else
                        return{
                            eventredbord:false
                        }
            }
        }
    }
}
</script>
<style>
.eventredbord{
   border: red solid 2px;
   position: relative;
   right: 3px;
}

</style>