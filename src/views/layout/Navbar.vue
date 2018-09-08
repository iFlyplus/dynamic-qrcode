<template>
<div class="navbar">
    <div class="navbar-left">
        <img class="logo" src="@/assets/logo.png" />
        
        <div class="menu-button">
            <img class="img" src="@/assets/menu.png" />
            <span class="text">菜单</span>
        </div>
    </div>
    <div class="navbar-right">
        <el-dropdown >
            <span class="el-dropdown-link" style=" font-size:22px; color: white;">
                账户<i class="el-icon-arrow-down el-icon--right"/>
            </span>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <el-dropdown-item>我的账户</el-dropdown-item>
                <el-dropdown-item>用户管理</el-dropdown-item>
                <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">退出</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</div>
</template>



<script>
export default {
  methods: {
    logout() {}
  }
};
</script>




<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 70px;
  width: 100%;
  background-color: #3c4245;
  padding: 21px 24px 19px;
  -webkit-display: flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  .navbar-left {
    flex: 0 1 auto;
    -webkit-display: flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    .logo {
      width: 28px;
      height: 28px;
    }
    .menu-button {
      width: 100px;
      margin-left: 40px;
      -webkit-display: flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      .img {
        width: 26px;
        height: 26px;
      }
      .text {
        margin-left: 12px;
        font-size: 18px;
        color: white;
      }
    }
  }
  .navbar-right {
    flex: 1 1 auto;
    text-align: right;
  }
}
</style>



