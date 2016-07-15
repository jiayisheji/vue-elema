<template>
    <header class="eleme-header ng-scope">
        <a class="header-back" ng-click="goback()"><span class="icon-arrow-left"></span></a>
        <h1 class="header-title">登录</h1>
        <a class="header-helper" ng-click="goRedirect('register')">注册</a>
    </header>
    <div class="ui-flashbar error ng-binding ng-scope" ng-show="error" ng-bind="error.message">验证码错误，请重新填写</div>
    <form class="logreg-form ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" name="loginform" novalidate="">
        <div class="logreg-inputs">
            <div class="input-group" ng-class="{'ui_error': loginform.username.$invalid &amp;&amp; loginform.username.$dirty &amp;&amp; invalidusername}">
                <input class="ui-input ng-pristine ng-untouched ng-invalid ng-invalid-required" type="text" ng-model="user.username" name="username" placeholder="手机/用户名/电子邮箱" ng-blur="message('username')" required="" auto-fill-sync="">
                <p class="input-tip">请输入手机或用户名或电子邮箱</p>
            </div>
            <div class="input-group" ng-class="{'ui_error': loginform.password.$invalid &amp;&amp; loginform.password.$dirty &amp;&amp; invalidpassword}">
                <input class="ui-input ng-pristine ng-untouched ng-invalid ng-invalid-required" type="password" ng-model="user.password" name="password" placeholder="密码" required="" ng-blur="message('password')" auto-fill-sync="">
                <p class="input-tip">请输入密码</p>
            </div>
            <div class="input-group captcha-group" ng-class="{'ui_error': loginform.captcha.$invalid &amp;&amp; loginform.captcha.$dirty &amp;&amp; invalidcaptcha}">
                <input class="ui-input captcha-input ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" type="text" placeholder="验证码" autocomplete="off" ng-model="user.captcha_code" name="captcha" required="" maxlength="4" ng-minlength="4" ng-blur="message('captcha')">
                <img class="captcha-image" alt="验证码" title="请输入验证码" ng-click="refreshCode()" ng-src="/restapi/v1/captchas/ca423af9134e8f1c78fe84b012b7f8903eded6d4" src="/restapi/v1/captchas/ca423af9134e8f1c78fe84b012b7f8903eded6d4">
                <div class="captcha-change"><p>看不清？</p><a href="JavaScript:" ng-click="refreshCode()">换一张</a></div><p class="input-tip">请正确输入验证码</p></div>
            </div>
            <button class="ui-btn logreg-btn" ng-click="login()" ng-disabled="loginform.$invalid" disabled="disabled">登录</button>
        </form>
        <footer>
            <a class="loginmsg-enter" ng-click="goRedirect('loginmsg')">短信验证码登录</a>
            <a class="findpw-enter" goback="/forget">忘记密码？</a>
        </footer>
</template>

<script>

</script>
<style type="text/css">
body{
    background: #f2f2f2;
}
.eleme-header {
    position: relative;
    z-index: 20;
    height: 44px;
    background: #3199e8;
    color: #fff;
    line-height: 44px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.header-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 65px;
    right: 65px;
    overflow: hidden;
    margin: 0;
    text-align: center;
    font-size: 1.05rem;
    color: #fff;
}
.header-back{
    position: relative;
    padding: 0 0 0 10px;
}
.header-helper{
    padding: 0 10px 0 0;
    color: #fff;
    display: block;
}
.logreg-form {
    display: block;
    margin: 10px;
}
.logreg-inputs {
    margin: 0 -10px;
    padding: 10px 10px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #fff;
}
.input-group {
    margin-bottom: 10px;
    position: relative;
}
input {
    -webkit-appearance: none!important;
}
input.ui-input, p.ui-input, textarea.ui-textarea{
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 8px 4px;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 2px;
    font-size: 1rem;
}
.input-tip {
    margin: 0;
    max-height: 0;
    overflow: hidden;
    color: #ea3106;
    font-size: .875rem;
    line-height: 1.8;
    clear: both;
    -webkit-transition: max-height .3s;
    transition: max-height .3s;
}
.captcha-group {
    position: relative;
    padding-right: 180px;
}
.captcha-group>.captcha-image {
    position: absolute;
    top: 0;
    right: 74px;
    height: 36px;
    width: 96px;
}
.captcha-group>.captcha-change {
    position: absolute;
    top: 0;
    right: 0;
    height: 36px;
    width: 64px;
    line-height: 18px;
    margin-left: 10px;
}
.ui-btn {
    display: block;
    width: 100%;
    padding: 10px 0;
    background: #3199e8;
    border: none;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: color .4s;
    transition: color .4s;
    color: #fff;
    -webkit-appearance: button;
    text-transform: none;
    font-family: inherit;
    font-size: 100%;
}
button.logreg-btn {
    margin: 1em 0 0;
}
.ui-btn.disabled, .ui-btn:disabled {
    color: rgba(255,255,255,.6);
}
.ui-flashbar {
    padding: 10px;
    background: #fffeea;
    border-bottom: 1px solid #ddd;
    font-size: .875rem;
}

.ui-flashbar.error {
    color: #ea3106;
}
.loginmsg-enter {
    margin: 10px;
    color: #08c;
    float: right;
}
    .findpw-enter {
    margin: 10px;
    color: #08c;
    float: left;
}
</style>
