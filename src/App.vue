<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderBar from './components/Header.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    components: {HeaderBar},
    beforeMount: function(){
      if(typeof localStorage.demoApp === 'undefined') {
        this.$store.dispatch('initProfile');
      } else {
        this.$store.dispatch('readProfile');
      }
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body, html{
  height: 100%;
}

a {
  text-decoration: none;

}
a:active{
  opacity: 0.75;
}

#app {
  background: #efeff3;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
  height: 100%;
}
</style>
