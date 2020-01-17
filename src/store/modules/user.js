const state = {
  name: 'admin'
}

const mutations = {
  SET_NAME: (state) => {
    state.name = state
  },
}

const actions = {
  setName({commit, dispatch},name){
    return new Promise((resolve, reject)=>{
      // getInfo(state.token).then(async(response) => {
      //   const { data } = response
      //   commit('SET_NAME', data.username)
      //   commit('SET_LOGININFO', data)
      //   setUserInfo(data) // 存储cookie用户信息
      //   resolve(data)
      //   await dispatch('getSysSetting')
      // }).catch(error => {
      //   reject(error)
      // })
      commit('SET_NAME',name)
    })
      
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}