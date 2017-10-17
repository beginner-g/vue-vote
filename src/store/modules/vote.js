import axios from 'axios'
const state={
  topic:'',
  all:[]
}
const mutations={
  addTitle(state,{topic ,title}){
    state.topic=topic
    state.all.push({title})
  },
  loadOptions(state,data){
    state.all=data.all
  }
}
const actions={
  addImg({commit},title){
    axios.post('http://localhost:3008/votes',title).then(
      res=>{
        commit('addTitle',title)
      }
    )
  },
  loadOptions({commit}){
    axios.get('http://localhost:3008/votes').then(
      res=>{
        commit('loadOptions',{all:res.data})
      }
    )
  }
}
export default {
  state,
  mutations,
  actions
}
