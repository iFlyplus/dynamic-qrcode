<template>
<el-menu class="navbar" mode="horizontal">
    <v-hamburger class="hamburger-container" ></v-hamburger>
    <v-levelbar></v-levelbar>
    <el-dropdown class="avatar-container">
      <span class="el-dropdown-link">
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
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
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



