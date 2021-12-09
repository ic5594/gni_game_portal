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
    props:["goNumberM","indexNumberM","currentNumberM","routerlistM"],
    methods:{
        goredNo:function(){
            if(this.currentNumberM%this.routerlistM.length==4){
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
.goredbord{
    padding:-5px;
    margin: -16px;
    border:3px solid red;
}

</style>