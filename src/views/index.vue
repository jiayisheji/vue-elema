<template>
    <div class="page">
        <jy-header></jy-header>
        <jy-search></jy-search>
        <jy-category></jy-category>
    </div>
</template>

<script>
import jySearch from '../components/Search';
import jyHeader from '../components/Header';
import jyLoading from '../components/Loading';
import jyCategory from '../components/Category';
import jyNav from '../components/Nav';

export default {
    'components': {
        jyHeader,
        jyNav,
        jySearch,
        jyCategory,
        jyLoading
    }
};
</script>

