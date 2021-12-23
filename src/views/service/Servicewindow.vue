<template>
    <div id="servicewindow">
        <li>{{title}}</li>
    </div>
</template>
<script>
export default {
    props:["title"]
}
</script>
<style>
#servicewindow{
    color:white;
}
#servicewindow li{
    font-size: 22px;
}
</style>
