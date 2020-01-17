import Vue from "vue";
import vuex from "vuex";
import getters from "./getters";

Vue.use(vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/,'$1')
  const value = modulesFiles(modulePath)
  console.log(336,modules  ,modulePath)
  modules[moduleName] = value.default
  return modules
},{})
console.log(666, modules);

const store = new vuex.Store({
  modules,
  getters
})

export default store
