/**
 * encoding: utf-8
 * @author: siru
 * @create on: 2018-12-05 15:34:14
 * @update on: 2018-12-05 16:52:51
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
