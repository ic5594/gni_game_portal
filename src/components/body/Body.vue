<template>
    <div id="body">
        
        <ul>
            <li><a><router-link to="/" v-on:keypress="left">TOP10</router-link></a></li>
            <hr>
            <li><a><router-link to="/game">게임(17)</router-link></a></li>
            <hr>
            <li><a><router-link to="">만화(12)</router-link></a></li>
            <hr>
            <li><a><router-link to="">키즈(4)</router-link></a>></li>
            <hr>
            <li><a><router-link to="">이벤트</router-link></a></li>
            <hr>
            <li><a><router-link to="">공지사항</router-link></a></li>
            <hr>
            <li><a><router-link to="">고객센터</router-link></a></li>
            <hr>
            <li><a><router-link to="">마이페이지</router-link></a></li>
            <hr>
            <li><a><router-link to="">커뮤니티</router-link></a></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#body{
    float: left;
    background-color:black;
    opacity: 0.8;
    height: 100vh;
    width: 317px;
}
#boby h1{
    color: white;
    
}
#body a{
    text-decoration-line: none;
    color: white;
    font-size: 40px;
    
}
#body hr{
    color:white;
    margin-right: 15px;
}
body{
    margin: 0;
    padding: 0;
}

</style>