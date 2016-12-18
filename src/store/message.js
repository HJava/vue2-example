/**
 * @module
 * @author: hjava
 * @since: 2016/12/18 19:41
 */

'use strict';
import {ADD_MESSAGE} from './constant';

export default {
    state: {
        messages: []
    },
    mutations: {
        [ADD_MESSAGE](state, message){
            state.messages.push(message);
        }
    },
    actions: {
        addMessage({commit}, message){
            commit(ADD_MESSAGE, message);
        }
    }
}