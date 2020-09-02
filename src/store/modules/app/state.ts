export interface AppState {
  user: User
}
const appState: AppState = {
  user: {
    userId: '',
    username: '',
    avatar: '',
    password: '',
    createTime: 0,
  },
}
export default appState
