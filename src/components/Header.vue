<template>
  <header class="m-header">
    <div class="left"></div>
    <h1 class="title">我的借呗</h1>
    <div class="right"></div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {};
    }
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
