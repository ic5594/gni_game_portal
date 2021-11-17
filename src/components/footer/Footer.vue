<template>
    <div id="footer">
        <div v-bind:key="number in [currentNumber]" transition="fade">
            <router-link :to="routerlist[currentNumber%routerlist.length]"
              v-on:keyup.enter="up" v-on:keyup.down="down"></router-link>
        </div>
    </div>    
</template>
<script>
export default {
    data:function(){
        return{
            routerlist:['/top10',
            '/game',
            '/kids',
            '/event',
            '/notice',
            '/service',
            '/mypage',
            '/community'],
            currentNumber:0
        };
    },
    mounted:function(){
        this.$router.push({path:this.routerlist[0]})
    },
    methods:{
        up:function(){
            this.currentNumber += 1;
            if(this.currentNumber>=this.routerlist.length)
                this.currentNumber=0
        },
        down:function(){
            this.currentNumber -= 1;
            if(this.currentNumber<=0)
                this.currentNumber=this.routerlist.length-1
        }
    }
}
</script>
<style>

</style>