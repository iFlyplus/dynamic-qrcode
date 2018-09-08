<template>
  <div class="login-page">
    <div class="header">
        <img class="logo" src="@/assets/logo.png" />
        <el-button class="return-button" type="primary">
          <img class="img" src="@/assets/return-arrow.png" />
          <span class="text">返回到我们的网站</span>
        </el-button>
        <!-- <div class="return-button">
            <img class="img" src="@/assets/return-arrow.png" />
            <span class="text">返回到我们的网站</span>
        </div> -->
    </div>
    <div class="content">
      <div class="title-wrap">
        <!-- <h1 class="title">二维动态码生成器</h1> -->
        <h1 >二维动态码生成器</h1>
      </div>
      
      <div class="login-box-wrap">
        <h1>登录</h1>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <div class="errdiv" v-if="errorInfo">
            <span>{{errInfo}}</span>
          </div>
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <div class="login-btn">
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
          <el-row>
              <el-col span="12"><p class="find-back" @click="gotoFindback()">忘记密码？</p></el-col>
              <el-col span="12"><p class="register" @click="gotoRegister()">没有账号？ 注册</p></el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <div class="footer">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      errorInfo: false,
      errInfo: ""
    };
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login-page {
  padding: 120px 30px 140px;
  .header {
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #3c4245;
    padding: 21px 24px 19px;
    -webkit-display: flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    .logo {
      width: 28px;
      height: 28px;
    }
    .return-button {
      width: 200px;
      margin-left: 40px;
      background-color: rgba(0, 0, 0, 0);
      border-color: rgba(0, 0, 0, 0);
      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
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
  .content {
    .title-wrap {
      text-align: center;
      .title {
        font-size: 26px;
        font-weight: 600;
        color: #a4a6a8;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        margin-bottom: 40px;
      }
    }
    .login-box-wrap {
      border: 1px solid #d4d4d4;
      border-radius: 2px;
      padding: 50px 50px 65px !important;
      width: 400px;
      max-width: 100%;
      margin: 0 auto;
      .errdiv {
        position: absolute;
        color: red;
        font-size: 14px;
        top: 60px;
      }
      .login-btn {
        text-align: center;
        .el-button.el-button--primary {
          width: 100%;
          height: 54px;
          background-color: #90c52d;
          border: 0;
          font-size: 18px;
        }
        .el-button.el-button--primary:hover {
          width: 100%;
          height: 54px;
          background-color: #85b62b;
        }
      }
      .find-back {
        font-size: 14px;
        line-height: 30px;
        color: #2e82ff;
        cursor: pointer;
        float: left;
      }
      .register {
        font-size: 14px;
        line-height: 30px;
        color: #2e82ff;
        cursor: pointer;
        float: right;
      }
    }
  }
  .footer {
  }
}
</style>