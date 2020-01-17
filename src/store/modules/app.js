const state = {
  role: '管理员'
}

const mutations = {
  SET_ROLE: (state,role) => {
    state.role = role
  },
}

const actions = {
  setName({commit, dispatch},role){
    return new Promise((resolve, reject)=>{
      // getInfo(state.token).then(async(response) => {
      //   const { data } = response
      //   commit('SET_ROLE', data.userrole)
      //   commit('SET_LOGININFO', data)
      //   setUserInfo(data) // 存储cookie用户信息
      //   resolve(data)
      //   await dispatch('getSysSetting')
      // }).catch(error => {
      //   reject(error)
      // })
      commit('SET_ROLE',role)
    })
      
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}