const state={
    isAuthenticated:false,
    username:''
}
const mutations={
  username(state,{text}){
    state.username=text
    state.isAuthenticated=true
    console.log(text)
  }
}
export default {
  state,
  mutations
}
