<template>
  <div class="create-page">
    <div class="header">
        <div class="header-left">
            <img class="logo" src="@/assets/logo.png" />
            <div class="return-button">
                <img class="img" src="@/assets/return-arrow.png" />
                <span class="text">返回</span>
            </div>
        </div>
        <div class="header-right">
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
    
    <div class="content">

    </div>

    <div class="footer">
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style rel="stylesheet/scss" lang="scss">
.create-page {
  .header {
    height: 70px;
    width: 100%;
    background-color: #3c4245;
    padding: 21px 24px 19px;
    -webkit-display: flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    .header-left {
      flex: 0 1 auto;
      -webkit-display: flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      .logo {
        width: 28px;
        height: 28px;
      }
      .return-button {
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
      .return-button :hover {
        cursor: pointer;
      }
    }
    .header-right {
      flex: 1 1 auto;
      text-align: right;
    }
  }
  .content {
  }
  .footer {
  }
}
</style>