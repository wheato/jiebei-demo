<template>
  <footer class="m-footer">
    <a class="normal-question">常见问题</a>
    <p class="copyright">xxxxxx公司提供</p>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {};
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px 0;
    text-align: center;

    .normal-question{
      color: #00aaee;
      font-size: 12px;
    }
    .copyright{
      color: #ccc;
      font-size: 12px;
    }
  }
</style>
