<template>
  <div id="app">
    <HeaderPart/>
    <div id="content-wrap">
    <router-view>
      <HomePage/>
    </router-view>
    </div>
    <FooterPart class="footer"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import HeaderPart from './components/HeaderPart.vue'
import FooterPart from './components/FooterPart.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    HeaderPart,
    FooterPart,
  },
}
</script>

<style>
body {
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #Ffffff;
  height:100%;
}
</style>
