import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routerConfig from './router';
import * as filters from './filters';

// Resource
Vue.use(VueResource);

Vue.http.options.root = '/data/';
Vue.http.options.emulateJSON = true;

// Router
Vue.use(VueRouter);

const router = new VueRouter({
    hashbang: true,
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
});

routerConfig(router);

router.start({}, 'body');

// Filters
Vue.filter('date', filters.dateFilter);
Vue.filter('category', filters.categoryFilter);
Vue.filter('department', filters.departmentFilter);
Vue.filter('city', filters.cityFilter);
