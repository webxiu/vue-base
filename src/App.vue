<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div style="text-align:center;padding: 15px;">
      <router-link v-for="(item,index) in routes" :key="index" :to="item.path" style="margin: 0 20px">{{item.meta.title}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { routes } from '@/router/router'
console.log('routes', routes)
export default {
  name: 'App',
  data(){
    return{
      routes:routes
    }
  },
  mounted() {
    
  },
}
</script>

<style>
#app {

}
</style>
