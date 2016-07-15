<template>
  <header class="v-header">
    <img v-bind:src="image" alt="logo" class="header-logo" v-on:click="goIndex()">
    <div class="close"><span class="close-icon"></span></div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            'image': require('../assets/logo.png')
        };
    },
    'methods': {
        'goIndex': function() {
            this.$route.router.go({
                'name': 'index',
                'replace': true
            });
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
</style>
