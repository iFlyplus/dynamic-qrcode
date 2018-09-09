<template>
  <div class="qrcode-manage-page">
    <div class="manage-bar">
      <div class="left">
        <img v-if="folder === 'all'" class="folder-img" src="@/assets/all-qrcode.png" />
        <img v-else-if="folder === 'active'" class="folder-img" src="@/assets/active-qrcode.png" />
        <img v-else-if="folder === 'paused'" class="folder-img" src="@/assets/paused-qrcode.png" />
        <img v-else class="folder-img" src="@/assets/folder.png" />
        <span class="folder-name">{{folderName}}</span>
        <el-dropdown v-if="folder === 'folder'" trigger="click">
          <span class="el-dropdown-link">
            显示选项
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>所有二维码</el-dropdown-item>
            <el-dropdown-item>活跃的二维码</el-dropdown-item>
            <el-dropdown-item>暂停的二维码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="right">
        <el-dropdown class="display-sorter" trigger="click">
          <span class="el-dropdown-link">
            排序方式
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>最近创建</el-dropdown-item>
            <el-dropdown-item>最多扫描</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button class="create-qrcode" type="success" @click="createQrcode">创建动态二维码</el-button>
      </div>
    </div>

    <div v-if="isQrcodeListEmpty" class="qrcode-list"></div>
    <div v-else class="qrcode-list">
      <qrcode-item v-for="(item,index) in items" :key="index"></qrcode-item>
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" layout="prev, pager, next" :total="total"> </el-pagination>
    </div>
  </div>
</template>


<script>
import qrcodeItem from "./qrcodeItem";

export default {
  components: {
    qrcodeItem
  },
  mounted() {
    //TODO : get data
    this.total = 500;
    this.$nextTick();
  },
  data() {
    return {
      /************manage bar */
      folder: "folder",
      //   folder: "active",
      folderName: "活跃的二维码（12）",

      /************qrcode list */
      isQrcodeListEmpty: false,
      items: [1, 2, 3, 4, 5],
      total: 100,
      currentPage1: 1
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    createQrcode() {
      this.$router.push("/create");
    },
    handleCurrentChange() {}
  }
};
</script>


<style rel="stylesheet/scss" lang="scss">
.qrcode-manage-page {
  position: absolute;
  .manage-bar {
    width: 1100px;
    height: 60px;
    position: relative;
    margin: 0 auto;

    -webkit-display: flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    .left {
      flex: 0 1 auto;
      -webkit-display: flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      .folder-img {
        width: 30px;
        height: 30px;
      }
      .folder-name {
        margin-left: 10px;
      }
      .display-filter {
        margin-left: 50px;
      }
    }
    .right {
      flex: 1 1 auto;
      text-align: right;
      .display-sorter {
        margin-right: 20px;
      }
      .create-qrcode {
        margin-right: 10px;
      }
    }
  }
  .qrcode-list {
    width: 1100px;
    position: relative;
    margin: 0 auto;
  }
}
</style>