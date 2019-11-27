<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div style="text-align:center;">
      <router-link to="/" style="margin: 0 20px">BaseForm</router-link> 
      <router-link to="/table" style="margin: 0 20px">BaseTable</router-link>
      <router-link to="/wangEditor" style="margin: 0 20px">wangEditor</router-link>
      <router-link to="/heightlight" style="margin: 0 20px">高亮代码</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
