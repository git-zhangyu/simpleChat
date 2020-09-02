import { ActionTree } from 'vuex'
import { ChatState } from './state'
import { RootState } from '../../index'
// import fetch from '@/api/fetch'
import io from 'socket.io-client'
// import Vue from 'vue'
// import { processReturn } from '@/utils/common.ts'
import { SET_SOCKET } from './mutation-types'
const actions: ActionTree<ChatState, RootState> = {
  async connectSocket({ commit, state, dispatch, rootState }) {
    let user = rootState.app.user
    // let friendGather = state.friendGather
    let scoket = io.connect(`/?userId=${user.userId}`)
    scoket.on('connect', async () => {
      console.log('链接成功')
      // 获取聊天室所需所有的信息
      scoket.emit('chatData', user)
      // 保存socket对象
      commit(SET_SOCKET, scoket)
    })
  },
}

export default actions
