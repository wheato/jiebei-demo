<template>

</template>

<script>
    export default {
      name: 'preview',
      data() {
        return {
          card_src: ''
        }
      },
      computed: {
        card_img() {
            return `background-image: url(${this.$store.state.cardPhotoSrc});background-color: transparent;`;
        }
      },
      beforeMount: function (){
        console.log(this.$router);
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .m-card-preview{
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