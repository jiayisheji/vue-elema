<template>
    <div class="page">
        <jy-header></jy-header>
        <jy-search></jy-search>
        <jy-category></jy-category>
        <jy-loading></jy-loading>
        <jy-footer></jy-footer>
    </div>
</template>

<script>
import jyHeader from '../components/Header';
import jySearch from '../components/Search';
import jyCategory from '../components/Category';
import jyFooter from '../components/Footer';
import jyLoading from '../components/Loading';

export default {
    'components': {
        jyHeader,
        jySearch,
        jyCategory,
        jyFooter,
        jyLoading
    }
};
</script>

