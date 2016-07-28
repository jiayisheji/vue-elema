<template>
    <div class="page">
        <header class="eleme-header ng-scope">
            <a class="header-back" @click="goback()"><span class="icon-arrow-left">&E904;</span></a>
            <h1 class="header-title">登录</h1>
            <a class="header-helper" v-link="{name: 'signin'}">注册</a>
        </header>
        <div class="ui-flashbar error" v-if="error.show" v-text="error.message">验证码错误，请重新填写</div>
        <validator name="signup">
        <form class="logreg-form" @submit.prevent="submit($signup)" novalidate>
            <div class="logreg-inputs">
                <div class="input-group" :class="{ 'ui_error': $signup.username.invalid }">
                    <input class="ui-input" type="text" v-model="user.username" name="username" placeholder="手机/用户名/电子邮箱" initial="off" detect-change="off" v-validate:username="{ required: { rule: true, message: '手机或用户名或电子邮箱不能为空'}, username: { rule: true, message: '电子邮箱格式或手机号格式不正确'} }">
                    <p class="input-tip" v-if="$signup.username.invalid" v-text="$signup.username.errors[0].message"></p>
                </div>
                <div class="input-group" :class="{ 'ui_error': $signup.password.invalid }">
                    <input class="ui-input" type="password" v-model="user.password" name="password" placeholder="密码是必须的" initial="off" detect-change="off" v-validate:password="{ required: { rule: true, message: '密码不能为空'}, minlength: {rule: 6, message: '密码必须大于6位'} }">
                    <p class="input-tip" v-if="$signup.password.invalid" v-text="$signup.password.errors[0].message">请输入密码</p>
                </div>
                <div class="input-group captcha-group" :class="{ 'ui_error': $signup.captcha_code.invalid }">
                    <input class="ui-input captcha-input" type="text" placeholder="验证码" autocomplete="off" v-model="user.captcha_code" name="captcha" initial="off" detect-change="off" v-validate:captcha_code="{ required: { rule: true, message: '验证码不能为空'}, captcha_code: {rule: true, message: '验证码必须是6位'} }">
                    <img class="captcha-image" alt="验证码" title="请输入验证码" ng-click="refreshCode()" ng-src="/restapi/v1/captchas/ca423af9134e8f1c78fe84b012b7f8903eded6d4" src="/restapi/v1/captchas/ca423af9134e8f1c78fe84b012b7f8903eded6d4">
                    <div class="captcha-change"><p>看不清？</p><a href="JavaScript:" ng-click="refreshCode()">换一张</a></div>
                    <p class="input-tip" v-if="$signup.captcha_code.invalid" v-text="$signup.captcha_code.errors[0].message">请正确输入验证码</p>
                </div>
            </div>
            <input type="submit" class="ui-btn logreg-btn" v-bind:disabled="!$signup.modified || !$signup.valid" value="登录">
        </form>
        </validator>
        <footer>
            <a class="loginmsg-enter" v-link="{name: 'signin'}">短信验证码登录</a>
            <a class="findpw-enter" v-link="{name: 'forget'}">忘记密码？</a>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                'user': {
                    'username': null,
                    'password': null,
                    'captcha_code': null
                },
                'error': {
                    'show': false,
                    'message': '验证码错误，请重新填写'
                },
                'trySubmit': false
            };
        },
        'methods': {
            'goback': function() {
                window.history.go(-1);
            },
            'submit': function(form) {
                console.log(form, this.user);
            }
        }
    };
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
.input-group.ui_error .ui-input, .input-group.ui_error > .ui-textarea {
    border-color: #ea3106;
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
.input-group.ui_error > .input-tip {
    max-height: 10em;
    min-height: 1.8em;
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
.logreg-btn {
    margin: 1em 0 0;
}
.ui-btn.disabled, .ui-btn:disabled {
    cursor: default;
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
