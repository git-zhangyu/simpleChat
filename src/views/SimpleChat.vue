<template>
  <div class="chat">
    <div class="chat-part1">
      <genal-tool @logout="logout"></genal-tool>
    </div>
    <GenalJoin :showModal="showModal" @regist="handleregist" @login="handlelogin" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import GenalJoin from '@/components/GenalJoin.vue'
import GenalTool from '@/components/GenalTool.vue'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const appModule = namespace('app')
const chatModule = namespace('chat')
@Component({
  components: {
    GenalJoin,
    GenalTool,
  },
})
export default class SimpleChat extends Vue {
  showModal = false

  @appModule.Getter('user') user: User
  @appModule.Mutation('clear_user') clearUser: Function
  @chatModule.Action('connectSocket') connectSocket: Function
  @appModule.Action('login') login: Function
  @appModule.Action('regist') regist: Function
  created() {
    if (!this.user.userId) {
      this.showModal = true
    } else {
      this.handleJoin()
    }
  }
  // 登录
  async handlelogin(user: User) {
    let res = await this.login(user)
    if (res) {
      // 进入系统事件
      this.handleJoin()
    }
  }

  // 注册
  async handleregist(user: User) {
    let res = await this.regist(user)
    if (res) {
      // 进入系统事件
      this.handleJoin()
    }
  }
  // 进入系统初始化事件
  async handleJoin() {
    this.showModal = false
    this.connectSocket()
  }
  // 注销
  logout() {
    this.clearUser()
    this.$router.go(0)
  }
}
</script>
<style lang="scss" scoped>
.chat {
  font-size: 16px;
  color: #fff;
  z-index: 999;
  max-width: 1000px;
  min-width: 300px;
  width: 100%;
  height: 80%;
  max-height: 900px;
  min-height: 300px;
  position: relative;
  margin: auto 20px;
  box-shadow: 6px 10px 10px rgb(153, 153, 153, 0.2);
  display: flex;
  border-radius: 5px;
  .chat-header {
    position: absolute;
    display: flex;
    right: 0;
    top: -50px;
  }
  .chat-part1 {
    width: 74px;
    height: 100%;
    background-color: rgb(21, 21, 21, 0.6);
  }
  .chat-part2 {
    width: 230px;
    height: 100%;
    background-color: rgb(21, 21, 21, 0.4);
  }
  .chat-part3 {
    flex: 1;
    height: 100%;
    background-color: rgb(21, 21, 21, 0.2);
    overflow-y: hidden;
    .chat-group {
      height: 53px;
      border-bottom: 1px solid #ccc;
      line-height: 50px;
      font-weight: bold;
    }
  }
}
@media screen and (max-width: 768px) {
  .chat-part2 {
    display: none;
  }
}
</style>
