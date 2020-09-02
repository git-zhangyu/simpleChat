// import Vue from 'vue';
import { MutationTree } from 'vuex'
import { SET_SOCKET } from './mutation-types'
import { ChatState } from './state'
const mutations: MutationTree<ChatState> = {
  // 保存socket
  [SET_SOCKET](state, payload: any) {
    state.socket = payload
  },
}
export default mutations
