<template>
    <div id="menuli">
        <li>
        {{menu}}</li>
    </div>
</template>
<script>
export default {
    props:["menumove","menu"],
    data:function(){
        return{
              menuredbord:{
        border:'9px solid red',
        padding:' -10px',
        width:'238px',
        height: '57px',
        transition: 'opacity .5s'
      }
        }
    },
}
</script>
<style>
#menuli{
    float:block;
    color:white;
    list-style: none;
    text-decoration-line: none;
    color: white;
    font-size: 40px;
    margin: 12px;
    padding-left: 10px;
}

</style>