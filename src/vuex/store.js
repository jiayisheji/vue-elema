import Vue from 'vue';
import Vuex from 'vuex';
import Jobs from '../data/jobs.json';

// Vuex
Vue.use(Vuex);

const sortData = Jobs.data.filter(item => item.hot).concat(Jobs.data.filter(item => !item.hot));

// 创建一个对象来保存应用启动时的初始状态
const state = {
    // TODO: 放置初始状态
    'stateList': sortData || [],
    'stateHotList': [],
    'stateQuery': ''
};

console.log(state);
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数
    SETCATEGORY(a, b) {
        a.stateList = sortData.filter(item => item.category === b.value);
        a.stateHotList = a.stateList.length ? [] : sortData.filter((item, index) => index < 5);
    },
    SETSEARCH(a, b) {
        a.stateQuery = b;
        a.stateList = sortData.filter(item => item.name.indexOf(b) > -1);
        a.stateHotList = a.stateList.length ? [] : sortData.filter((item, index) => index < 5);
        console.log(a.stateHotList);
    }
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    mutations
});
