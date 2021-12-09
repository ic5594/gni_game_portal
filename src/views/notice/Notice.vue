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
    props:["goNumberM","indexNumberM","currentNumberM","routerlistM"],
    methods:{
       goredNo:function(){
            if(this.currentNumberM%this.routerlistM.length==5){
                if(this.goNumberM==1){
                        return{
                            goredbord:true
                        }
                    }
                    else
                        return{
                            goredbord:false
                        }
            }
        }
    }
}
</script>
<style>

</style>