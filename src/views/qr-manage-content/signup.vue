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
        <h1>注册</h1>

        <el-form :model="signupForm" :rules="rules" ref="signupForm" label-width="0px" class="demo-ruleForm">
          <div class="errdiv" v-if="errorInfo">
            <span>{{errInfo}}</span>
          </div>
          <el-form-item prop="email">
            <el-input v-model="signupForm.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-col :span="12">
              <el-input v-model="signupForm.captcha" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-button width="100%" @click="generateCaptcha(signupForm.email)">获取邮箱验证码</el-button>
            </el-col>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="signupForm.password"></el-input>
          </el-form-item>
          <div class="login-btn">
              <el-button type="primary" @click="submitSignupForm('signupForm')">注册</el-button>
          </div>
          <el-row>
              <p class="register" @click="gotoLogin()">已有账号？ 登录</p>
          </el-row>
        </el-form>
      </div>
    </div>

    <div class="footer">
    </div>

  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    var password = (rule, value, callback) => {
      if (value.indexOf("_") === 0) {
        callback(new Error("密码不得以下划线开头"));
      } else {
        callback();
      }
    };
    return {
      signupForm: {
        email: "",
        password: "",
        captcha: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱!", trigger: "blur" },
          { type: "email", message: "请输入正确的Email格式", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码!", trigger: "blur" },
          { validator: password, trigger: "change" },
          {
            pattern: /^[a-zA-Z0-9][_a-zA-Z0-9]*$/,
            message: "密码必须由字母、数字或下划线组成"
          },
          { min: 6, max: 20, message: "长度在6-20位之间", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "请输入邮箱验证码!", trigger: "blur" }
        ]
      },
      errorInfo: false,
      errInfo: ""
    };
  },
  methods: {
    generateCaptcha() {
      const self = this;
      //   self.errorInfo = false;
      //   self.errInfo = "";
      self.$refs["signupForm"].validateField("email", message => {
        if (message === "") {
          self.$axios
            .post("/signup/generateCaptcha", { email: self.signupForm.email })
            .then(res => {
              if (res.data.status === "success") {
                Message({
                  message: "已发送验证码，请查收",
                  type: "success",
                  center: true
                });
              } else {
                self.errorInfo = true;
                self.errInfo = res.data.message;
              }
            })
            .catch(err => {
              Message({
                // message: "请检查网络并重试",
                message: err,
                type: "error",
                center: true
              });
            });
        }
      });
    },
    submitSignupForm(formName) {
      const self = this;
      //   self.errorInfo = false;
      //   self.errInfo = "";
      self.$refs[formName].validate(valid => {
        if (valid) {
          self.$axios
            .post("/signup/submit_signup", formName)
            .then(res => {
              if (res.data.status === "success") {
                Message({
                  message: "注册成功",
                  type: "success",
                  center: true
                });
                self.gotoLogin();
              } else {
                self.errorInfo = true;
                self.errInfo = res.data.message;
              }
            })
            .catch(err => {
              console.log(err);
              Message({
                message: "请检查网络并重试",
                type: "error",
                center: err
              });
            });
        }
      });
    },
    gotoLogin() {
      this.$router.push("/login");
    }
  }
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