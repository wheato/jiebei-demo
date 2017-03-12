<template>
  <div class="m-index">
    <div class="m-loan-num">
      <div class="content">
        <p class="n-text">可借的钱（元）</p>
        <div class="num">{{ profile.last }}</div>
        <div class="total-money b-text">总额度 {{ profile.total }}</div>
      </div>
      <div class="loan-info">
        <p class="n-text">1天起借，可随时还</p>
        <p class="s-text light">利息按天计算，日利率最低1.5</p>
      </div>
    </div>
    <MyButton
      text="去借钱"
      :is-able="true"
      :handler="nextHandler"
    ></MyButton>

    <foot></foot>
  </div>
</template>

<script>
  import foot from '../components/Footer';
  import MyButton from '../components/Button';

  const addGap = (num) => {
    return num > 1000 ?
      num.toString().replace(/(?=(?:\d{3})+(?!\d))/g,',') :
      num;
  };

  export default {
    name: 'index',
    beforeMount() {
      this.$store.dispatch('setTitle', '我的借呗');
      this.$store.dispatch('setLeftText', '');
      this.$store.dispatch('setLeftType', '');
    },
    computed: {
      profile() {
        let pf = this.$store.state.profile;
        return {
          total: addGap(pf.total),
          last: addGap(pf.total - pf.current)
        }
      }
    },
    methods: {
      nextHandler(e) {
        this.$router.push('/loan');
      }
    },
    components: {foot, MyButton}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  .m-loan-num{
    height: 230px;
    background: #108ee9;
    padding: 0 30px;

    .s-text{
      font-size: 12px;
      color: #fff;
    }
    .n-text{
      font-size: 14px;
      color: #fff;
    }
    .b-text{
      font-size: 16px;
      color: #fff;
    }
    .light{
      color: #b7ddf8;
    }
    .content{
      padding: 30px 0;
      .num{
        font-size: 44px;
        color: #fff;
      }
      .total-money{

      }
    }
    .loan-info{
      padding: 12px 0 0;
      border-top: 1px dashed #82c4f4;
    }
  }
</style>
