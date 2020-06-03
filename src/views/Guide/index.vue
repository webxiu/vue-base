<template>
  <div class="app-container">
    <aside>
      The guide page is useful for some people who entered the project for the first time. You can briefly introduce the
      features of the project. Demo is based on
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button id="header-search" icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      Show Guide
    </el-button>
    <el-button id="header-search2" icon="el-icon-question" type="primary">
      Show Guide2
    </el-button>
    <el-button id="header-search3" icon="el-icon-question" type="primary">
      Show Guide3
    </el-button>
    <el-button id="header-search4" icon="el-icon-question" type="primary">
      Show Guide4
    </el-button>
    <el-button id="header-search5" icon="el-icon-question" type="primary">
      Show Guide5
    </el-button>
    <el-button id="header-search6" icon="el-icon-question" type="primary">
      Show Guide5
    </el-button>

    <div style="width: 50%;margin: 0 auto;">
    <el-carousel :interval="4000" type="card" height="388px">
      <el-carousel-item v-for="item in banner" :key="item">
       <div style="position: relative;">
         <h3 style="position: absolute;bottom: 10px; left: 50px;">装机地址: {{ item }}</h3>
         <img :src="item" />
       </div>
      </el-carousel-item>
    </el-carousel>
    </div>
    </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null,
      banner: [
        'https://img11.360buyimg.com/da/jfs/t1/106493/33/15817/102366/5e74e913Ea70c99d2/0aec194712289798.jpg',
        'https://img20.360buyimg.com/da/jfs/t1/117683/18/3325/121268/5ea79cc0Ed92146e4/c0fe9468429cacdf.jpg',
        'https://img10.360buyimg.com/da/jfs/t1/107423/38/15270/91228/5eac5174E81b4434e/94dc7dcbb3c93221.jpg',
        'https://img14.360buyimg.com/da/jfs/t1/101677/30/15524/95585/5e71d4d2E8a51608a/3563ef4777e745c2.jpg',
      ]
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
