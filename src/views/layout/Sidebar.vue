<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">
      <!-- <img class="img" src="@/assets/all-qrcode.png" /> -->
      <i class="el-icon-document"></i>
      <span slot="title">所有二维码</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <span slot="title">激活的二维码</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">暂停的二维码</span>
    </el-menu-item>
  </el-menu>
</template>



<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  min-height: 100%;
  width: 260px;
  background-color: #616568;
  .img {
    height: 20px;
    widows: 20px;
  }
}
</style>