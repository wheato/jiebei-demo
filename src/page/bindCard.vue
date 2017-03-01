<template>
  <div class="m-bind-card">
    <div class="m-card-preview"  v-bind="{class: {show: hasPhoto}}" >
      <figure class="card-img-wrap" v-bind="{style: card_img}" >
      </figure>
    </div>

    <div class="add-box">
      <input type="number" class="card-num" placeholder="银行卡号" pattern="[0-9]*" v-model="cardNo">
      <input type="text" class="card-name" placeholder="持卡人姓名" v-model="cardName">
      <Camera></Camera>
    </div>
    <div class="btn-add-card"
         @click="addHandler" v-bind="{class: {able: isAble}}">添加卡片</div>
  </div>
</template>

<script>
  import Camera from '../components/Camera'

  export default{
    name: 'bindCard',
    data() {
      return {
        cardNo: "",
        cardName: ""
      }
    },
    computed: {
      isAble() {
        return (this.cardName && this.cardNo);
      },
      hasPhoto() {
        return this.$store.state.cardPhotoSrc !== '';
      },
      card_img() {
        if(this.$store.state.cardPhotoSrc){
          this.cardNo = '6222020903001483077';
          this.cardName = 'testUser';
        }
        return `background-image: url(${this.$store.state.cardPhotoSrc});background-color: transparent;`;
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
    },
    components: {Camera}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .m-bind-card{
    .add-box{
      background: #fff;
      border-top: 1px solid #e1e1e1;
      margin: 15px 0 0;
      padding: 0 15px;
      position: relative;
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
  .m-card-preview{
    display: none;
    &.show{
      display: block;
    }
    .card-img-wrap{
      margin: 30px;
      padding-bottom: 50%;
      background: #e1e1e1;
      background-position: center;
      -webkit-background-size: contain;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .card-no{
      padding: 0 15px;
      height: 35px;
      line-height: 35px;
      font-size: 15px;
      background: #fff;
      color: #111;
      border-top: #e1e1e1 1px solid;
      border-bottom: #e1e1e1 1px solid;
    }
  }
</style>
