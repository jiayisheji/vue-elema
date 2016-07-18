<template>
    <header class="v-header">

        <img v-bind:src="image" alt="logo" class="header-logo" v-link="{'name':'index'}">
        <div class="close" v-on:click="open()"><span class="close-icon" v-bind:class="{'open':isOpen}"></span></div>
    </header>
    <nav v-if="isOpen" class="v-nav" transition="nav">
        <ul>
            <li v-link="{name: 'index'}">首页</li>
            <li v-link="{name: 'fulltime'}">社会招聘</li>
            <li v-link="{name: 'intern'}">实习生招聘</li>
            <li v-link="{name: 'school'}">校园招聘</li>
            <li v-link="{name: 'about'}">公司介绍</li>
            <li v-link="{name: 'home'}">个人中心</li>
            <li v-link="{name: 'signup'}">登录</li>
        </ul>
    </nav>
    <div v-if="isOpen" class="nav-mask" transition="mask" v-on:click="isOpen = false" @touchmove.stop.prevent></div>
</template>

<script>

export default {
    data() {
        return {
            'isOpen': false,
            'image': require('../assets/logo.png')
        };
    },
    'methods': {
        'open': function() {
            this.isOpen = !this.isOpen;
        }
    },
    'route': {
        data(transition) {
            console.log('头部路由', transition);
            this.isOpen = false;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-header {
    background-color: #26a2ff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 15px;
    position: absolute;
    width: 100%;
    z-index: 1000;
}

.v-header .header-logo {
    height: 30px;
}

.v-header .close {
    height: 25px;
    width: 25px;
    margin-top: 2px;
}

.v-header .close-icon {
    display: inline-block;
    line-height: 20px;
    position: relative;
}

.v-header .close-icon,.v-header .close-icon:after,.v-header .close-icon:before {
    width: 25px;
    height: 2px;
    background-color: #fff;
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 1px;
}

.v-header .close-icon:after,.v-header .close-icon:before {
    content: '';
    position: absolute;
    -webkit-transform-origin: left 50%;
    transform-origin: left 50%;
    outline: 1px solid transparent;
}

.v-header .close-icon:before {
    top: -8px;
}

.v-header .close-icon:after {
    bottom: -8px;
}

.v-header .close-icon.open {
    background-color: #26a2ff;
}

.v-header .close-icon.open:after,.v-header .close-icon.open:before {
    width: 29px;
}

.v-header .close-icon.open:before {
    -webkit-transform: translate3d(0,-2px,0) rotate(45deg);
    transform: translate3d(0,-2px,0) rotate(45deg);
}

.v-header .close-icon.open:after {
    -webkit-transform: translate3d(0,2px,0) rotate(-45deg);
    transform: translate3d(0,2px,0) rotate(-45deg);
}

.v-header .header-menu {
    height: 16px;
    margin-top: 7px;
}

.v-header .header-close {
    height: 20px;
    margin-top: 6px;
}

.v-nav {
    position: fixed;
    z-index: 100;
    width: 215px;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding: 70px 0 0 25px;
}

.v-nav ul {
    list-style: none;
}

.v-nav li {
    height: 45px;
    line-height: 45px;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #eee;
}

.v-nav a {
    text-decoration: none;
    color: #333;
    display: block;
}

.v-nav .v-link-active {
    color: #26a2ff;
}

.nav-mask {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
}

.nav-transition,.mask-transition {
    -webkit-transition: .2s linear;
    transition: .2s linear;
}

.nav-enter,.nav-leave {
    -webkit-transform: translate3d(215px,0,0);
    transform: translate3d(215px,0,0);
}

.mask-enter,.mask-leave {
    background-color: transparent;
}

.logout-toast {
    width: 80%;
}
</style>
