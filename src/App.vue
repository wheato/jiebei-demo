<template>
  <div id="app">
    <HeaderBar
      :nav-title="navTitle"
      :left-text="leftText"
      :left-type="leftType"></HeaderBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderBar from './components/Header.vue'

  export default {
    name: 'app',
    components: {HeaderBar},
    computed: {
        navTitle() {
          return this.$store.state.nav.title ? this.$store.state.nav.title : '我的借呗'
        },
        leftText() {
          return this.$store.state.nav.leftText
        },
        leftType() {
          return this.$store.state.nav.leftType
        },
    },
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
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: 'Helvetica Neue', 'Roboto', "microsoft yahei";
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
  height: 100%;
}
</style>
