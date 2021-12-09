<template>
    <div id="animelist">
        <li>{{anime}}</li>
    </div>
</template>
<script>
export default {
    props:["anime"]
}
</script>
<style>
#animelist li{
  font-size: 40px;
    color:white;
    list-style: none;
    margin-bottom:7px;
}
</style>