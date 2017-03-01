<template>
  <div class="m-choose-card">
    <h1>{{ title }}</h1>
    <ul class="card-list">
      <li class="card"></li>
    </ul>

    <div class="btn-add-card"></div>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'chooseCard',
    data() {
      return {
        title: "选择银行卡"
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-choose-card{
    .card-list{
      background: #fff;
      border-top: 1px solid #e1e1e1;
      margin: 15px 0 0;
    }
    .card{
      height: 56px;
      line-height: 56px;
      border-bottom: 1px solid #e1e1e1;
    }
  }
</style>
