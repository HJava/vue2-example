/**
 * @module
 * @author: hjava
 * @since: 2016/12/17 16:55
 */

'use strict';

import Vue from 'vue';
import Container from './containers/index.vue';
import Vuex from 'vuex';
import store from './store/';

new Vue({
    store,
    render(h) {
        return h(Container);
    }
}).$mount('#container');