<template>
  <div class="m-bind-card">

    <div class="add-box">
      <input type="number" class="card-num" placeholder="银行卡号" pattern="[0-9]*" v-model="cardNo">
      <input type="text" class="card-name" placeholder="持卡人姓名" v-model="cardName">
    </div>
    <div class="btn-add-card"
         @click="addHandler" v-bind="{class: {able: isAble}}">添加卡片</div>
  </div>
</template>

<script>
  export default{
    name: 'bindCard',
    data() {
      return {
        cardNo: "",
        cardName: "",
      }
    },
    computed: {
      isAble() {
        return (this.cardName && this.cardNo);
      }
    },
    methods: {
      addHandler: function(e) {
        if(this.cardNo && this.cardName){
          this.$store.dispatch('addCard', {
            cardNo: this.cardNo,
            cardName: this.cardName
          });
          this.$router.push({path: 'confirm'})
        } else {
          return ;
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-bind-card{
    .add-box{
      background: #fff;
      border-top: 1px solid #e1e1e1;
      margin: 15px 0 0;
      padding: 0 15px;
      & > input{
        display: block;
        -webkit-appearance: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #e1e1e1;
        background: none;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        outline: none;
        -webkit-border-radius: 0;
        border-radius: 0;
        &::-webkit-input-placeholder{
          font-size: 12px;
        }
      }
    }

    .card-num{

    }
    .btn-add-card{
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
  }
</style>
