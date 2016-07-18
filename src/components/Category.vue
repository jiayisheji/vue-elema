<template>
  <div class="category-wrapper">
    <div class="category-container">
      <div class="category" v-on:click="goToCategory(item)" v-for="item in itmes" v-bind:style="{'background-image': 'url(' + item.image + ')' }">
        <h3 class="category-title">{{item.title}}</h3>
        <p class="category-description">{{item.description}}</p>
      </div>
    </div>
    <jy-footer></jy-footer>
  </div>
</template>

<script>
import jySearch from './Search';
import jyFooter from './Footer';
import store from '../vuex/store';
import { queryCategory } from '../vuex/actions';

export default {
    'vuex': {
        'actions': {
            'setCategory': queryCategory
        }
    },
    data() {
        return {
            'itmes': [{
                'title': '技术类',
                'value': 'a',
                'description': '国内顶尖的技术团队',
                'image': require('../assets/bg-1.jpg')
            }, {
                'title': '产品类',
                'value': 'b',
                'description': '工匠精神专注打造好产品',
                'image': require('../assets/bg-2.jpg')
            }, {
                'title': '设计类',
                'value': 'c',
                'description': '在这里展示你天马行空的想法',
                'image': require('../assets/bg-3.jpg')
            }, {
                'title': '市场类',
                'value': 'd',
                'description': '开疆扩土需要骁勇善战的你',
                'image': require('../assets/bg-4.jpg')
            }, {
                'title': '职能类',
                'value': 'e',
                'description': '平凡的事做到极致就是不平凡',
                'image': require('../assets/bg-5.jpg')
            }, {
                'title': '物流类',
                'value': 'f',
                'description': '想成为一个风一样的骑士么',
                'image': require('../assets/bg-6.jpg')
            }, {
                'title': '客服类',
                value: 'g',
                'description': '拥有甜美声线的你还在等什么',
                'image': require('../assets/bg-7.jpg')
            }]
        };
    },
    store,
    'components': {
        jySearch,
        jyFooter
    },
    'methods': {
        'goToCategory': function(value) {
            this.setCategory(value);
            this.$route.router.go({
                'name': 'fulltime'
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category-wrapper{
      height: 100%;
      overflow: auto;
  }
  .category-container{
    padding-top: 106px;
    background-color: #ddd;
}

.category{
    height: 170px;
    background-size: cover;
    margin-bottom: 5px;
    position: relative;
}

.category:last-child {
    margin-bottom: 0;
}

.category:before{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content:"";
    background-color: rgba(0,0,0,.4);
}

.category h3,.category p{
    position: absolute;
    z-index: 10;
    color: hsla(0,0%,100%,.8);
    width: 100%;
    text-align: center;
}

.category-title{
    font-size: 24px;
    font-weight: normal;
    top: 50px;
}
.category-description{
    font-size: 16px;
    top: 85px;
}
</style>
