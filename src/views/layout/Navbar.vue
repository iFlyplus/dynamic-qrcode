<template>
<el-menu class="navbar" mode="horizontal">
    <div class="logo">
        <img class="img" src="@/assets/logo.png" />
    </div>
    <div class="menu-button">
        <img class="img" src="@/assets/menu.png" />
        <span class="text">菜单</span>
    </div>
    <div class="navbar-element">
        <div class="navbar-separator-line"></div>
    </div>

    <el-dropdown class="avatar-container">
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
</el-menu>
</template>



<script>
import vHamburger from '@/components/Hamburger'
import vLevelbar from '@/views/layout/Levelbar'

export default {
    components:{
        vHamburger,
        vLevelbar
    },
    methods:{
        logout(){

        }
    }
}
</script>




<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 70px;
        line-height: 70px;
        border-radius: 0px !important;
        background: #3c4245;
        .logo{
            position:absolute;
            top:50%;
            margin-top:-20px;
            width:40px;
            height:40px ;
            line-height: 40px;
            margin-left: 20px;
            display:inline-block;
            .img{
                position: absolute;
                top: 50%;
                left: 50%;
                margin: -11px;
                width: 22px;
                height: 22px;
            }
        }   
        .navbar-element{
            position:absolute;
            top:50%;
            margin-top:-20px;
            margin-left: 80px;
            width:40px;
            height:40px ;
            line-height: 40px;
            display: inline-block;
        }
        .navbar-separator-line{
            position:absolute;
            left: 50%;
            vertical-align:middle;
            border-left: 1px solid #ffffff;
            height: 40px;
        }
        .menu-button {
            position:absolute;
            top:50%;
            margin-top:-20px;
            margin-left: 120px;
            width:100px;
            height:40px ;
            line-height: 40px;
            display: inline-block;
            .img{
                width:22px;
                height:22px;
                vertical-align:middle
            }
            .text {
                vertical-align: middle;
                margin-left: 12px;
                font-size:22px;
                color: white;
            }
        }
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }

        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 150px;
        }
        .screenfull {
            position: absolute;
            right: 90px;
            top: 16px;
            color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>



