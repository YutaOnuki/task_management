import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  auth: {
    token: null,
    userId: null
  },
  board: {
    lists: [] // array taskListを格納する配列
  }// ,
  // Vuexで管理しないため、使用するコンポーネントのdata属性に移動
  // 各タスク情報
  // task: {
  //   id: null, // integer
  //   name: null, // string
  //   description: null, // string
  //   listId: null // integer taskListのidと紐づく
  // },
  // // タスクリスト
  // taskList: {
  //   id: null, // integer taskのlistIdと紐づく
  //   name: null, // string
  //   items: [] // array taskを格納する配列
  // }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
