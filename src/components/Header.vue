<template>
  <header class="m-header">
    <div class="left" @click="backHandler">{{ leftText }}</div>
    <h1 class="title">{{ navTitle }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: [
      'navTitle',
      'leftText',
      'leftType'
    ],
    data() {
      return {
      };
    },
    methods: {
      backHandler(e) {
        switch(this.leftType) {
          case 0:
            console.log('go back');
            this.$router.go(-1);
            break;
          case 1:
            //back index
            this.$router.push({path: '/'});
            break;
          default:
            //do nothing
            break;
        }
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-header{
    height: 46px;
    background: #fff;
    line-height: 46px;
    position: relative;
    .title{
      text-align: center;
      font-size: 16px;
      color: #111;
      font-weight: normal;
    }
    .left{
      position: absolute;
      left: 15px;
      color: #00aaee;
      &:active{
        opacity: .8;
      }
      &::before{

      }
    }
    .right{
      position: absolute;
      right: 15px;
    }
    &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      background: #e1e1e1;
      -webkit-transform-origin: top left;
      -webkit-transform: scaleY(0.5);
    }
  }
</style>
