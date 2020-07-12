import drag from './drag'
const install = function(Vue){
    Vue.directive('el-drag',drag)
}

if (window.Vue) {
    window['el-drag'] = drag
    Vue.use(install)
}

drag.install = install
export default drag