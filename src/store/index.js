/**
 * @module
 * @author: hjava
 * @since: 2016/12/18 15:57
 */

'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import message from './message';

Vue.use(Vuex);

export  default new Vuex.Store({
    strict: true,
    modules: {
        message
    }
});