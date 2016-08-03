import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';
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
    saveScrollPosition: true,
    suppressTransitionError: true
});

routerConfig(router);

router.start({}, 'body');

// Validator
Vue.use(VueValidator);
Vue.validator('username', val => !!val.trim().length || /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(val) || /^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|170[0-9]{8}|177[0-9]{8})$/i.test(val));
Vue.validator('email', val => /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(val));
Vue.validator('phone', val => /^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|170[0-9]{8}|177[0-9]{8})$/i.test(val));
Vue.validator('captcha_code', val => /^[\d]{6}$/i.test(val));

// Filters
Vue.filter('date', filters.dateFilter);
Vue.filter('category', filters.categoryFilter);
Vue.filter('department', filters.departmentFilter);
Vue.filter('city', filters.cityFilter);
