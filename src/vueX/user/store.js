import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  msg: null,
  src: 'https://tianqiapi.com/api.php?style=ya&skin=pitaya',
  // 用户数组
  users: [],
  // 当前用户
  user: {
    id: 'null',
    name: 'null',
    pwd: 'null',
    email: 'null',
    phone: 'null',
    sex: 'null',
    hiredate: 'null',
    address: 'null',
    path: 'null'
  },
  userDto: {
    name: null,
    pwd: null
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
