<template>

</template>

<script>
export default {

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    .nav-transition,.nav-transition {
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
