<template>
    <jy-header></jy-header>
    <jy-search></jy-search>
    <jy-joblist></jy-joblist>
</template>

<script>
import jySearch from '../components/Search';
import jyHeader from '../components/Header';
import jyLoading from '../components/Loading';
import jyNav from '../components/Nav';
import jyJoblist from '../components/joblist';

export default {
    'components': {
        jyHeader,
        jyNav,
        jySearch,
        jyJoblist,
        jyLoading
    }
};
</script>
