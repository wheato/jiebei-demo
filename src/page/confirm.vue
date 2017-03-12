<template>
  <div class="m-confirm">
    <div class="loan-info">
      <div class="loan-num loan-item">
        <span class="title">借多少</span>
        <span class="content">{{ loanNum }}</span>
      </div>
      <div class="loan-interest loan-item">
        <span class="title">总利息</span>
        <span class="content">{{ interest }}</span>
      </div>
      <div class="loan-time loan-item">
        <span class="title">借多久</span>
        <span class="content">{{ loanTime }}</span>
      </div>
      <div class="loan-type loan-item">
        <span class="title">怎么还</span>
        <span class="content">{{ loanType }}</span>
      </div>
    </div>

    <router-link class="loan-card" v-bind:to="hasCard ? '/chooseCard' : '/bindCard' ">
      {{ cardNum }}
    </router-link>

    <div class="provision"></div>

    <div class="btn-sure-loan" v-bind="{class: {able: hasCard}}" @click="sureHandler">
      确定
    </div>
  </div>
</template>

<script>
  export default {
    name: 'confirm',
    beforeMount: function (){
      if(!this.$store.state.interestNum
        || typeof this.$store.state.loanData.loanType !== 'number'
        || !this.$store.state.loanData.loanNum
        || !this.$store.state.loanData.loanTime) {

        this.$router.replace({path: '/'});
      }
    },
    data() {
      let loanData = this.$store.state.loanData;
      return {
        loanNum: loanData.loanNum < 1000 ?
          loanData.loanNum :
          loanData.loanNum.toString().replace(/(?=(?:\d{3})+(?!\d))/g,','),
        loanType: loanData.loanType ? '每月等额' : '随时',
        loanTime: loanData.loanType ? '6个月' : '45天',
        interest: this.$store.state.interestNum,
      }
    },
    computed: {
      cardNum() {
        let cards = this.$store.state.profile.cards;
        if(cards.length < 1){
          return "还没有绑定银行卡"
        } else if(this.$store.state.chosenCard) {
          return '银行卡号：' + this.$store.state.chosenCard.cardNo
        } else {
          return '银行卡号：' + this.$store.state.profile.cards[0].cardNo
        }
      },
      hasCard() {
        return this.$store.state.profile.cards.length > 0
      }
    },
    methods: {
      sureHandler() {
        if(this.hasCard){
          this.$store.dispatch('saveLoanNum');
          this.$router.push({path: "/success"});
        } else {
          return false;
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
.m-confirm{
  .loan-info{
    background: #fff;
    padding: 0 15px;
    .loan-num{
      border-bottom: 1px solid #e1e1e1;
      .content{
        color: #ff8208;
      }

      &.loan-item{
        font-size: 15px;
        height: 44px;
        line-height: 44px;
        color: #111;
      }
    }
    .loan-item{
      font-size: 12px;
      line-height: 30px;
      height: 30px;
      color: #888;
      .content{
        float: right;
      }
    }
  }
  .loan-card{
    display: block;
    height: 72px;
    line-height: 72px;
    background: #fff;
    border-top: 1px solid #e1e1e1;
    margin: 20px 0 0;
    padding: 0 15px;
    color: #888;
    font-size: 16px;
    position: relative;
    &::after{
      content: ">";
      display: block;
      position: absolute;
      right: 15px;
      font-size: 20px;
      line-height: 20px;
      color: #888;
      top: 26px;
    }
  }
  .provision{}
  .btn-sure-loan{
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
