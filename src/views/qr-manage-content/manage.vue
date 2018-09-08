<template>
        <div>
            <div class="sidebar">
                <sidebar></sidebar> 
            </div>
            <div class="main">
                <qrcode-manage></qrcode-manage>
            </div>
        </div>
</template>

<script>
import sidebar from "@/views/layout/Sidebar.vue";
import qrcodeManage from "@/views/qr-manage-content/qrcodeManage.vue";
export default {
  components: {
    sidebar,
    qrcodeManage
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.sidebar{
    height:100%;
    width: 260px;
    position:fixed;
    top:70px;
    left:0;
}
.main{
    height: 100%;
    width: 100%;
    position: fixed;
    top:70px;
    left: 260px;
    overflow: scroll;
}
</style>