<template>
    <div class="m-camera">
        <input type="file" @change="fileHandler" class="file-inputer">
    </div>
</template>
<script>
    export default {
      name: 'camera',
      beforeMount: function (){
        this.$store.dispatch('clearPhotoSrc');
      },
      methods: {
        fileHandler: function(e){
          let files = Array.prototype.slice.call(e.target.files);
          files.forEach(file => {
            if(file.type.match('image.*')){
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.addEventListener('load', this.readerHandler.bind(this), false);
            }
          });
        },
        readerHandler: function(e){
          this.$store.dispatch('updatePhotoSrc', e.target.result);
        }
      }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .m-camera{
        position: absolute;
        right: 15px;
        top: 11px;
        width: 24px;
        height: 24px;
        background: url(data:image/png;base64,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) no-repeat center;
        -webkit-background-size: contain;
        background-size: contain;
        .file-inputer{
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            opacity: 0;
        }
    }
</style>
