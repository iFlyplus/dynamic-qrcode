<template>
    <div class="manage-bar">
        <div class="left">
            <img v-if="folder === 'all'" class="folder-img" src="@/assets/all-qrcode.png" />
            <img v-else-if="folder === 'active'" class="folder-img" src="@/assets/active-qrcode.png" />
            <img v-else-if="folder === 'paused'" class="folder-img" src="@/assets/paused-qrcode.png" />
            <img v-else class="folder-img" src="@/assets/folder.png" />
            <span class="folder-name">{{folderName}}</span>
            
            <el-dropdown v-if="folder === 'folder'" trigger="click">
                <span class="el-dropdown-link">
                    显示选项<i class="el-icon-arrow-down el-icon--right"></i>
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
                    排序方式<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>最近创建</el-dropdown-item>
                    <el-dropdown-item>最多扫描</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-button class="create-qrcode"  type="success">创建动态二维码</el-button>
        </div>

    </div>
</template>


<script>
export default {
  data() {
    return {
      folder: "folder",
      //   folder: "active",
      folderName: "活跃的二维码（12）"
    };
  }
};
</script>


<style rel="stylesheet/scss" lang="scss">
.manage-bar {
  width: 1100px;
  height: 60px;
  display: inline-block;
  position: relative;
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
</style>