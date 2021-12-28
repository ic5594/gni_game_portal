<template>
    <div id="mypage1">
        <img src="http://61.251.167.74/ktweb/gniportal/resource/popup/popup_4.png" style="position: absolute; left: 338px; top: 165px;">
        <img src="http://61.251.167.74/ktweb/gniportal/resource/popup/popup_title_mypage.png" style="position: absolute; left: 400px; top: 186px;">
        <img id="ok_on" src="http://61.251.167.74/ktweb/gniportal/resource/popup/b_ok_01.png" style="position: absolute; left: 498px; top: 478px; display: none;">
        <img id="ok_off" src="http://61.251.167.74/ktweb/gniportal/resource/popup/b_ok_00.png" style="position: absolute; left: 498px; top: 478px;">
        <img id="cancel_on" src="http://61.251.167.74/ktweb/gniportal/resource/popup/n_exit_01.png" style="position: absolute; left: 647px; top: 478px; display: none;">
        <img id="cancel_off" src="http://61.251.167.74/ktweb/gniportal/resource/popup/n_exit_00.png" style="position: absolute; left: 647px; top: 478px;">
        <div id="input" style="position: absolute; left: 580px; top: 400px; width: 120px; height: 48px; background-image: url(http://61.251.167.74/ktweb/gniportal/resource/popup/box_password.png&quot;);">
    </div>
    <div id="dot" style="position: absolute; height: 13px; left: 574px; top: 418px;"></div>
    <img id="inputfocus" src="http://61.251.167.74/ktweb/gniportal/resource/popup/select_mypage_password.png" style="position: absolute; left: 575px; top: 396px;">
    <img src="http://61.251.167.74/ktweb/gniportal/resource/popup/button_select.png" id="okfocus" style="position: absolute; left: 490px; top: 470px; display: none;">
    <div id="title1" style="position:absolute; width:200px; height:40px; left: 441px; top:242; font-size:30px; color: rgb(255,217,0); text-align: right;"> 본인확인 &gt;</div>
    <div id="title2" style="position:absolute; width:200px; height:40px; left: 645px; top:247; font-size:24px; color: rgb(239,239,239);">내정보 보기</div>
    <div id="comment1" style="line-height:15px; position:absolute; width:638px; ; left: 328px; top:286; font-size:21px; color: rgb(239,239,239); text-align: center"><br>내정보 보기 전, 본인 확인을 위해 성인인증 4자리를 입력하세요.<br><br>내정보 불러오기는 수초, 수분이 소요될수 있습니다.<br><br>(비밀번호 문의 : 국번없이 100번)<br></div>
    <div id="comment2" style="display: none; line-height:15px; position:absolute; width:638px; ; left: 328px; top:288; font-size:21px; color: rgb(239,239,239); text-align: center"><br>비밀번호를 잘못 입력 하였습니다.<br><br>비밀번호 확인 후 다시 입력해 주세요.<br><br>(비밀번호 문의 : 국번없이 100번)<br>
    </div>
    </div>
</template>
<style>
#mypage1{
    position: relative;
    left:350px;
    top:150px;
}
#comment1{
    position: relative;
    top:300px;
}
#title1{
    position: relative;
    top:250px;
}
#title2{
    position: relative;
    top:257px;
}
</style>