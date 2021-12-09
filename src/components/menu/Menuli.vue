<template>
    <div id="menuli">
        <li>
        {{menu}}</li>
    </div>
</template>
<script>
export default {
    props:["menu"],
    
}
</script>
<style>
#menuli{
    display:block;
    color:white;
    list-style: none;
    text-decoration-line: none;
    color: white;
    font-size: 35px;
    padding:10px;
    z-index: 5;
    padding-left: 20px;
    position: relative;
    left: 30px;
}


</style>