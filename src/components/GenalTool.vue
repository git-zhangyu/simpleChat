<template>
  <div class="tool">
    <div class="tool-avatar">
      <div class="tool-avatar-img" @click="showModal('showUserModal')">
        <img v-if="user" :src="user.avatar" alt="" />
      </div>
      <div class="tool-avatar-name">{{ user.username }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const appModule = namespace('app')
const chatModule = namespace('chat')

@Component
export default class GenalTool extends Vue {
  @appModule.Getter('user') user: User
  showModal(modalType: 'showSetModal' | 'showUserModal') {
    console.log(modalType)
  }
}
</script>

<style lang="scss" scoped>
.tool {
  color: #fff;
  padding: 10px 5px;
  height: 98%;
  position: relative;
  .tool-avatar {
    .tool-avatar-img {
      margin: 0 auto;
      width: 55px;
      height: 55px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tool-avatar-name {
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap; //溢出不换行
      margin-top: 2px;
    }
  }
  .tool-set {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    position: absolute;
    bottom: 0px;
    left: 13px;
  }
  .tip {
    position: absolute;
    font-size: 25px;
    bottom: 125px;
    left: 25px;
    :hover {
      color: skyblue;
    }
  }
  .github {
    position: absolute;
    font-size: 25px;
    bottom: 60px;
    left: 25px;
  }
}
.tool-user {
  text-align: center;
  font-size: 16px;
  .tool-user-img {
    margin-bottom: 24px;
  }
  .tool-user-avatar {
    display: flex;
    margin-bottom: 15px;
    .upload {
      display: flex;
      flex-wrap: nowrap;
      cursor: pointer;
      align-items: center;
      border: 1px solid #d9d9d9;
      height: 33px;
      padding: 0 5px;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 5px;
      transition: 0.1s all linear;
      &:hover {
        border: 1px solid skyblue;
        color: skyblue;
      }
    }
    .tool-user-avatar-title {
      font-weight: bold;
      word-break: keep-all;
      margin-right: 15px;
    }
    .button {
      margin-left: 5px;
    }
  }
  .tool-user-name {
    display: flex;
    align-items: center;
    > * {
      margin-right: 5px;
    }
    .tool-user-name-title {
      font-weight: bold;
      word-break: keep-all;
      margin-right: 15px;
    }
  }
}
.tool-set-icon {
  transition: all 0.2s linear;
  cursor: pointer;
  margin: 10px;
  &:hover {
    color: skyblue;
  }
}
</style>
