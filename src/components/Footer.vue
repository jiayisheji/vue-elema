<template>
    <footer class="v-footer">©2016 ele.me, all rights reserved</footer>
</template>

<script>
export default {

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    footer.v-footer {
        text-align: center;
        font-size: 12px;
        color: #666;
        background-color: #ddd;
        height: 60px;
        line-height: 60px;
    }

    footer.v-footer.fixed {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
