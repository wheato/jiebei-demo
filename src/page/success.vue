<template>
  <div class="m-success">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
  export default{
    name: 'chooseCard',
    data() {
      return {
        title: "借款成功"
      }
    },
    mounted() {
      setTimeout(()=>{
        this.$router.push({path: '/'})
      }, 3000);
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-success{
    .title{
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
      padding: 20px 0;
    }
  }
</style>
