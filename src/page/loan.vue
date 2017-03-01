<template>
  <div class="m-loan">
    <div class="float-tips-bar" v-bind="{class: {show: isOut}}">金额超出可用金额</div>
    <div class="loan-input-box">
      <div class="m-item">
        <label for="J_input_loan_num" class="lable-loan-num">借多少</label>
        <input type="number" id="J_input_loan_num" class="input-loan-num"
               v-bind="{
                placeholder: '最多可借' + (profile.total - profile.current) + '元',
                value: loanData.loanNum ? loanData.loanNum : ''
                }"
               pattern="[0-9]*" @input="loanNumChange"/>
      </div>
    </div>

    <div class="interest-compute-box"
         v-bind="{class: typeZeroName }">
      <div class="main-content" @click="switchType(0, $event)">
        <input type="radio" class="type-check"
               v-bind="{checked: loanData.loanType === 0 ? 'checked' : ''}"/>
        <span class="type-name">按日借款 | 1～45天</span>
        <span class="type-info">日利率<strong>万2</strong></span>
      </div>
      <div class="sub-content">
        <div class="m-item">借多久 <span class="right">45天</span></div>
        <div class="m-item">怎么还 <span class="right">到期一次性还本付息</span></div>
        <div class="m-item">总利息 <span class="right">{{interestNum}}</span></div>
      </div>
      <div class="interest-info">
        <p>1000元借1天，利息0.2元</p>
        <p>随借随还0手续费</p>
      </div>
    </div>

    <div class="interest-compute-box"
         v-bind="{class: typeOneName }">
      <div class="main-content" @click="switchType(1, $event)">
        <input type="radio" class="type-check"
               v-bind="{checked: loanData.loanType === 1 ? 'checked' : ''}"/>
        <span class="type-name">按月借款 | 3～12月</span>
        <span class="type-info">日利率<strong>万1.5</strong></span>
      </div>
      <div class="sub-content">
        <div class="m-item">借多久 <span class="right">6个月</span></div>
        <div class="m-item">怎么还 <span class="right">每月等额</span></div>
        <div class="m-item">总利息 <span class="right">{{interestNum}}</span></div>
      </div>
      <div class="interest-info">
        <p>1000元借1天，利息0.15元</p>
        <p>按期还款利息低</p>
      </div>
    </div>

    <router-link class="btn-next-step" to="/confirm"
                 v-bind="{class: loanData.loanNum && loanData.loanType !== null && !isOut
                  ? 'able' : '',
                  to: loanData.loanNum && loanData.loanType !== null && !isOut
                  ? '/confirm' : '/loan'}">下一步
    </router-link>
  </div>
</template>

<script>
  export default{
    name: 'loan',
    data() {
      return {
        loanNum: null,
        isOut: false,
        isShowTips: false,
      }
    },
    beforeMount: function() {
    },
    computed: {
      profile() {
        return this.$store.state.profile
      },
      loanData() {
        return this.$store.state.loanData
      },
      interestNum() {
        return this.$store.state.interestNum
      },
      typeOneName() {
        let type = this.$store.state.loanData.loanType;
        if(type === null){
          return 'init'
        } else if(type === 1){
          return 'expand'
        } else {
          return ''
        }
      },
      typeZeroName() {
        let type = this.$store.state.loanData.loanType;
        if(type === null){
          return 'init'
        } else if(type === 0){
          return 'expand'
        } else {
          return ''
        }
      }
    },
    methods: {
      switchType: function(type, e) {
        this.$store.dispatch('switchType', type);
        this.$store.dispatch('updateLoanTime');
        if(this.$store.state.loanData.loanNum !== 0 && !this.isOut){
          this.$store.dispatch('computeInterest');
        }
      },
      loanNumChange: function(e) {
        let type = this.$store.state.loanData.loanType;
        let value = parseInt(e.target.value);
        let last = this.$store.state.profile.total - this.$store.state.profile.current;

        this.isOut = value > last;

        this.$store.dispatch('updateLoanNum', e.target.value === '' ? 0 : e.target.value);
        if(type !== null && !this.isOut){
          this.$store.dispatch('computeInterest');
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .m-item{
    background: #fff;
    position: relative;
    margin: 0 15px;
    &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: #e1e1e1;
      -webkit-transform-origin: bottom left;
      -webkit-transform: scaleY(0.5);
    }
  }
  .m-loan{
    .loan-input-box{
      background: #fff;
      height: 66px;
      font-size: 16px;
      color: #111;
      .lable-loan-num{
        display: inline-block;
        vertical-align: top;
        line-height: 66px;
      }
      .input-loan-num{
        display: inline-block;
        height: 22px;
        padding: 22px 0;
        line-height: 22px;
        -webkit-appearance: none;
        background: transparent;
        border: transparent;
        font-size: 22px;
        text-indent: 20px;
        outline: none;
        &::-webkit-input-placeholder{
          font-size: 12px;
        }
      }
      .m-item{
      }
    }

    .interest-compute-box{
      margin: 21px 15px 0;
      background: #fff;
      border: 1px solid #e1e1e1;
      .m-item{
        height: 42px;
        line-height: 42px;
        .right{
          font-size: 12px;
          color: #888;
          float: right;
        }
      }
      .interest-info{
        display: none;
      }
      .main-content{
        height: 42px;
        line-height: 42px;
        padding: 0 15px;
        position: relative;
        .type-check{
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border: 1px solid #888;
          -webkit-border-radius: 50%;
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          margin: auto;
          outline: none;
          &:checked{
            border-color: #108ee9;
            background: #108ee9;
          }
        }
        .type-name{
          padding-left: 30px;
          opacity: .5;
        }
        .type-info{
          float: right;
          font-size: 12px;
          opacity: .5;
          strong{
            font-size: 14px;
            color: #ff8208;
            font-weight: normal;
          }
        }
      }
      .sub-content{
        display: none;
      }

      &.expand{
        .sub-content{
          display: block;
        }
        .main-content{
          border-bottom: 1px solid #e1e1e1;
          .type-info, .type-name{
            opacity: 1;
          }
        }
      }

      &.init{
        .main-content{
          .type-info, .type-name{
            opacity: 1;
          }
        }
        .interest-info {
          display: block;
          border-top: 1px dashed #e1e1e1;
          margin: 0 15px 0 45px;
          padding: 10px 0;
          p{
            font-size: 11px;
            color: #888;
            line-height: 1.5;
          }
        }
      }
    }
  }
  .btn-next-step{
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
  .float-tips-bar{
    position: fixed;
    height: 20px;
    width: 100%;
    line-height: 20px;
    background: rgba(0,0,0, .7);
    -webkit-transition: opacity .5s ease;
    opacity: 0;
    text-align: center;
    font-size: 12px;
    color: #fff;
    z-index: 0;
    top: 0;
    left: 0;
    &.show{
      opacity: 1;
      z-index: 9;
    }
  }
</style>
