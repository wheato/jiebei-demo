<template>
  <div class="m-choose-card">
    <h1>{{ title }}</h1>
    <ul class="card-list">
      <li class="card" v-for="(card, index) in cardList" @click="chooseHandler" :data-id="index">{{ card.cardNo }}</li>
    </ul>

    <router-link class="btn-add-card" to="/bindCard">添加卡片</router-link>

  </div>
</template>

<script>
  export default{
    name: 'chooseCard',
    data() {
      return {
        title: "选择银行卡",
        cardList: this.$store.state.profile.cards
      }
    },
    methods: {
      chooseHandler: function(e) {
        let index = e.target.getAttribute('data-id');
        this.$store.dispatch('setChosenCard', this.cardList[index]);
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-choose-card{
    h1 {
      font-size: 18px;
      color: #111;
      line-height: 21px;
      padding: 15px 15px 0;
      font-weight: normal;
    }
    .card-list{
      background: #fff;
      border-top: 1px solid #e1e1e1;
      margin: 15px 0 0;
    }
    .card{
      height: 56px;
      line-height: 56px;
      padding: 0 15px;
      border-bottom: 1px solid #e1e1e1;
      &:active{
        opacity: .7;
      }
    }
    .btn-add-card{
      display: block;
      margin: 20px 0 0;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #108ee9;
    }
  }
</style>
