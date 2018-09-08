<template>
    <div class="container">
        <qrcode-manage-bar ></qrcode-manage-bar>

        <div v-if="isQrcodeListEmpty" ></div>
            <div v-else>
            <qrcode-list :qrcodeItems="qrcodeItems"></qrcode-list>
        </div>
    </div>
</template>


<script>
import qrcodeManageBar from "@/views/qr-manage-content/qrcodeManageBar";
import qrcodeList from "@/views/qr-manage-content/qrcodeList";

export default {
  components: {
    qrcodeManageBar,
    qrcodeList
  },
  data() {
    return {
      isQrcodeListEmpty: false,
      qrcodeItems: null
    };
  }
};
</script>


<style rel="stylesheet/scss" lang="scss">
.container{
    width:1100px;
    margin: 0 auto;
}
</style>