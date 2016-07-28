<template>
    <jy-header></jy-header>
    <jy-search></jy-search>
    <jy-jobfilter></jy-jobfilter>
    <jy-joblist></jy-joblist>
    <jy-loading></jy-loading>
</template>

<script>
import jySearch from '../components/Search';
import jyHeader from '../components/Header';
import jyLoading from '../components/Loading';
import jyJoblist from '../components/joblist';
import jyJobfilter from '../components/jobfilter';

export default {
    'components': {
        jyHeader,
        jySearch,
        jyJoblist,
        jyLoading,
        jyJobfilter
    }
};
</script>
