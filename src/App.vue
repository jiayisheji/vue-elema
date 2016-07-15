<template>
    <div class="page" id="page">
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a,img {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
}

body,html {
    font-family: Helvetica Neue,Microsoft Yahei,sans-serif;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    overflow: hidden;
}

body.grey {
    background-color: #eee;
}
</style>
