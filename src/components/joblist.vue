<template>
  <div class="joblist-wrapper">
    <div class="joblist">
        <div class="joblist-item" v-for="item in itmes.data | filterBy 'a' in 'category'" v-on:click="goDetail(item._id)">
            <h3 class="joblist-name">{{item.name}} <span class="joblist-hot" v-if="item.hot">HOT</span> </h3>
            <p class="joblist-city">{{item.city}}</p>
            <p class="joblist-addition">
                <span class="joblist-headcount">{{item.headcount}}人</span>
                <time class="joblist-time">发布时间: {{item.meta.createAt | date}}</time>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import jySearch from './Search';
import jyFooter from './Footer';

export default {
    data() {
        return {
            'itmes': require('../data/jobs.json')
        };
    },
    'components': {
        jySearch,
        jyFooter
    },
    'methods': {
        'goDetail': function(id) {
            console.log(id);
            this.$route.router.go({
                'name': 'job',
                'params': { 'id': id },
                'replace': true
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.updatealert{
    height: 35px;
    line-height: 35px;
    padding: 0 10px 0 12px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 50;
    background-color: #26a2ff;
    color: #fff;
}

.jobfilter{
    position: absolute;
    z-index: 90;
    top: 106px;
    height: 39px;
    width: 100%;
    padding: 9px 0;
    border-bottom: 1px solid #ddd;
    font-size: 0;
    background-color: #fff;
}

.joblist-wrapper{
    height: 100%;
    overflow: auto;
}

.jobfilter-key{
    display: inline-block;
    width: 33.33%;
    height: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
}

.jobfilter-key.active{
    color: #26a2ff;
}

.position-key{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
}

.jobfilter-key span{
    line-height: 20px;
    position: relative;
    margin-left: -10px;
}

.jobfilter-key span:after {
    content: '';
    height: 0;
    width: 0;
    border: 4px solid transparent;
    border-top-color: #333;
    position: absolute;
    top: 6px;
    right: -12px;
}

.jobfilter-key.active span[_v-f0bd5b2a]:after {
    border-top-color: transparent;
    border-bottom-color: #26a2ff;
    top: 1px;
}

.joblist{
    padding-top: 145px;
}

.joblist-item{
    height: 73px;
    padding: 17px 15px 15px;
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
    border-bottom: 1px solid #eee;
}

.joblist-item p,.joblist-item h3{
    display: -webkit-box;
    line-height: 1;
}

.joblist-name{
    font-size: 18px;
    font-weight: normal;
    color: #333;
}

.joblist-hot{
    background-color: #ff7e00;
    color: #fff;
    border-radius: 2px;
    font-size: 12px;
    vertical-align: middle;
    line-height: 1;
    padding: 1px 2px 0;
}

.joblist-city{
    font-size: 15px;
    color: #333;
}

.joblist-addition{
    margin-top: 9px;
    width: 100%;
    font-size: 12px;
    color: #666;
}

.joblist-headcount{
    padding-right: 8px;
    border-right: 1px solid #eee;
}

.joblist-time{
    padding-left: 8px;
}

.jobfilter-popup{
    position: absolute;
    z-index: 90;
    top: 39px;
    width: 100%;
    background-color: #fff;
}

.jobfilter-popup div{
    display: inline-block;
    vertical-align: top;
}

.jobfilter-category{
    width: 33.33%;
}

.type-popup .jobfilter-category{
    width: 100%;
}

.jobfilter-category p{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #333;
    background-color: #eee;
    padding-left: 15px;
}

.jobfilter-category p.active{
    color: #26a2ff;
    background-color: #fff;
}

.jobfilter-list{
    width: 66.66%;
    height: 280px;
    overflow: auto;
}

.jobfilter-list ul{
    list-style: none;
    padding-left: 25px;
}

.jobfilter-list li{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #eee;
}

.jobfilter-list li.active{
    color: #26a2ff;
}

.jobfilter-mask{
    position: fixed;
    z-index: 80;
    top: 145px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
}

.void-note{
    height: 67px;
    line-height: 67px;
    text-align: center;
    color: #26a2ff;
    font-size: 18px;
    background-color: #fff;
}

.void-title{
    height: 35px;
    line-height: 35px;
    padding-left: 15px;
    background-color: #eee;
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #ddd;
}
</style>
