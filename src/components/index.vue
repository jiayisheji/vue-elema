<template>
      <div>
        <jy-header></jy-header>
        <jy-search></jy-search>
        <jy-category></jy-category>
        <jy-loading></jy-loading>
        <img class="logo" src="./assets/logo.png">
      </div>
</template>

<script>
import jySearch from './Search';
import jyHeader from './Header';
import jyLoading from './Loading';
import jyCategory from './Category';
import jyNav from './Nav';

export default {
    components: {
        jyHeader,
        jyNav,
        jySearch,
        jyCategory,
        jyLoading
    }
};
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
