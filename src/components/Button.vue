<template>
  <div class="btn-big"
    @click="handler"
    :class="elseClass"
    v-bind="{class: {able: isAble}}">{{ text }}</div>
</template>

<script>
  export default {
    name: "Button",
    props: [
      'isAble',
      'elseClass',
      'text',
      'handler'
    ],
    data() {
      return {};
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .btn-big{
    display: block;
    margin: 21px 15px 0;
    height: 40px;
    color: #bbb;
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    background-color: #ddd;
    &.able{
      background: #108ee9;
      color: #fff;
    }
  }
</style>
