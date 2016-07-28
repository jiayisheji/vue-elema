<template>
    <div class="jobfilter">
        <div class="jobfilter-key" v-bind:class="[item.sClass, {'active': item.active}]" v-for="item in filters" track-by="$index" v-on:click="showPopup(item.popup,$index)">
            <span>{{item.name}}</span>
        </div>
        <div class="jobfilter-popup" v-if="popupClass" v-bind:class="popupClass">
            <div class="jobfilter-category" v-if="jobfilterCategory.length">
                <p></p>
            </div>
            <div class="jobfilter-list" v-if="jobfilterList.length">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="jobfilter-mask" v-if="popupClass" v-on:click="popupClass == ''"></div>
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
            'filters': [
                {
                    'name': '全国',
                    'sClass': 'location-key',
                    'popup': 'location-popup',
                    'active': false
                },
                {
                    'name': '职位类别',
                    'sClass': 'position-key',
                    'popup': 'position-popup',
                    'active': false
                },
                {
                    'name': '社会招聘',
                    'sClass': 'type-key',
                    'popup': 'type-popup',
                    'active': false
                }
            ],
            'isPopup': false,
            'isOldPopup': false,
            'popupClass': '',
            'jobfilterCategory': [],
            'jobfilterList': []
        };
    },
    store,
    'components': {
        jySearch,
        jyFooter
    },
    'methods': {
        'showPopup': function(value, index) {
            console.log(this.filters[index].active);
            this.filters.forEach(item => {
                item.active = false;
            });
            this.popupClass = !this.isPopup ? value : '';
            this.filters[index].active = true;
            if (!this.isPopup) {
                this.isPopup = true;
            } else {
                this.isPopup = false;
            }
            this.isOldPopup = this.filters[index].active;
            console.log(this.filters, this.isPopup, this.isOldPopup);
        },
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

.jobfilter-key.active span:after {
    border-top-color: transparent;
    border-bottom-color: #26a2ff;
    top: 1px;
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
.jobfilter-category p.active{
    color: #26a2ff;
    background-color: #fff;
}
.jobfilter-category p{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #333;
    background-color: #eee;
    padding-left: 15px;
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
.type-popup .jobfilter-category{
    width: 100%;
}
.jobfilter-mask {
    position: fixed;
    z-index: 80;
    top: 145px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
}
</style>
