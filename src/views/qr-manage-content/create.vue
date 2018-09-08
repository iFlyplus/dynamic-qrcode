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
        <div class="generator">
            <div v-if="step === 'select qrcode type'">
                <h3 class="h3">选择你的二维码类型</h3>
                <div class="dynamic-qrcode-type-select">
                    <el-radio-group v-model="qrcodeType">
                        <el-row>
                            <el-col :span="10" >
                                <el-radio-button label="website">网站</el-radio-button>
                            </el-col>
                            <el-col :span="10" :offset="1">
                                <el-radio-button label="pdf">PDF</el-radio-button>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10" >
                                <el-radio-button label="picture">图片</el-radio-button>
                            </el-col>
                            <el-col :span="10" :offset="1"></el-col>
                        </el-row>
                    </el-radio-group>
                </div>
            </div>
            <div v-else-if="step === 'enter website address'">
                <div class="section">
                    <div class="section-header">
                        <img class="img" src="@/assets/website.png" >
                        <h3>输入你的网站地址</h3>
                    </div>
                    <div class="section-body">
                        <div class="section-info">
                            <h3>输入动态二维码的目标网站</h3>
                            <div class="item">
                                <span>网站:</span>
                                <el-input v-model="qrcodeDestinationWebsite" @blur="qrcodeDestinationWebsiteBlur" placeholder="http://www.XXX.com"></el-input>
                            </div>
                            <div class="item">
                                <span>名字:</span>
                                <el-input v-model="qrcodeName" placeholder="XXX 的二维码"></el-input> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="step === 'design qrcode'">
                <div class="qrcode">
                    <img :src="qrcodeImgUrl" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="button">
            <el-button @click="handleClickFooterButton" :disabled="isFooterButtonDisabled()">{{getFooterButtonName()}}</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: "select qrcode type",
      //   step: 'enter qrcodeDestinationWebsite address',
      //   step: 'design qrcode',
      qrcodeType: null,
      qrcodeDestinationWebsite: "",
      qrcodeName: "",
      qrcodeImgUrl: ""
    };
  },
  methods: {
    logout() {},
    qrcodeDestinationWebsiteBlur() {
      let parse_url = /(([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/gi;
      if (this.qrcodeDestinationWebsite === "") {
        this.$alert("请输入动态二维码的目标网站", {
          confirmButtonText: "确定"
        });
      } else if (!parse_url.test(this.qrcodeDestinationWebsite)) {
        this.$alert("目标网站不是一个有效的URL", {
          confirmButtonText: "确定"
        });
      }
    },
    handleClickFooterButton() {
      let self = this;
      if (self.step === "select qrcode type") {
        self.step = "enter website address";
      } else if (self.step === "enter website address") {
        if (self.qrcodeDestinationWebsite === "") {
          self.$alert("请输入动态二维码的目标网站", {
            confirmButtonText: "确定"
          });
          return;
        } else {
          // TODO: 请求生成二维码
          let Params = {
            originUrl: self.qrcodeDestinationWebsite
          };
          self.$axios
            .post("/create/handleurlsubmit", Params)
            .then(res => {
              self.qrcodeImgUrl =
                "https://app.qr-code-generator.com/create/getqrcode?6292111";
              self.step = "design qrcode";
            })
            .catch(err => {
              this.$message({
                type: "info",
                message: err
              });
            });

          // {"message":"Code added successfully.","status":"success","newOldCodeId":"6654771","chartId":"5612358","codeCount":"14"}
          // {"status":"success","message":"Template found.","templateData":
          //{"parent_id":2,"errorCorrection":"Q","BackgroundColor":"#ffffff","ForegroundColor":"#3B579D","ForegroundTemplate":"0","logoPath":"_logocodes\/templates\/2\/logo.png","logoPositionX":"0","logoPositionY":"0","designer_logos_id":null,"logoFill":null,"individualEyes":"1","lteInnerColor":"#3B579D","lteOuterColor":"#3B579D","lteTemplate":"5","rteInnerColor":"#3B579D","rteOuterColor":"#3B579D","rteTemplate":"6","lbeInnerColor":"#3B579D","lbeOuterColor":"#3B579D","lbeTemplate":"7","globalTemplate":0,"systemTemplate":0}}
        }
      } else if (self.step === "design qrcode") {
        // TODO:
        self.$router.push("/manage");
      }
    },
    isFooterButtonDisabled() {
      if (this.step === "select qrcode type") {
        return this.qrcodeType === null;
      } else if (this.step === "enter website address") {
        return false;
      } else if (this.step === "design qrcode") {
        return false;
      }
    },
    getFooterButtonName() {
      if (this.step === "select qrcode type") {
        return "下一步";
      } else if (this.step === "enter website address") {
        return "下一步";
      } else if (this.step === "design qrcode") {
        return "完成";
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.create-page {
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
    position: fixed;
    top: 70px;
    bottom: 80px;
    left: 0;
    height: 100%;
    width: 100%;
    .generator {
      position: absolute;
      width: 856px;
      // TODO: 为什么 margin: 0 auto 无法居中
      left: 50%;
      margin-left: -428px;
      //   margin: 0 auto;
      .h3 {
        margin-top: 30px;
        margin-bottom: 7px;
        font-size: 26px;
        color: #616568;
        font-weight: 600 !important;
      }
      .dynamic-qrcode-type-select {
        width: 100%;
        .el-radio-group {
          width: 100%;
        }
        .el-row {
          padding: 13px 0;
        }
        .el-radio-button__inner {
          width: 360px;
          height: 68px;
        }
      }
      .section {
        margin-top: 60px;
        border: 1px #d4d4d4 solid;
        .section-header {
          width: 100%;
          -webkit-display: flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          background-color: #f4f4f4;
          .img {
            width: 22px;
            height: 22px;
            margin-left: 36px;
            margin-right: 28px;
          }
          .h3 {
            font-size: 26px;
            color: #616568;
            font-weight: 600 !important;
          }
        }
        .section-body {
          font-size: 15px;
          .section-info {
            margin: 10px 80px 20px;
            .item {
              margin: 20px auto;
              -webkit-display: flex;
              display: flex;
              -webkit-align-items: center;
              align-items: center;
              .text {
              }
              .el-input {
                width: 300px;
                margin-left: 100px;
              }
            }
          }
        }
      }
      .qrcode {
        width: 368px;
        height: 360px;
        border: 1px #d4d4d4 solid;
        position: absolute;
        margin: 100px auto;
      }
    }
  }
  .footer {
    height: 80px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #3c4245;
    padding: 21px 24px 19px;
    -webkit-display: flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    .button {
      height: 45px;
      width: 350px;
      position: absolute;
      left: 50%;
      margin-left: -175px;
      .el-button.el-button--default {
        height: 45px;
        width: 350px;
        background-color: #90c52d;
        border: 0;
        color: white;
      }
      .el-button.el-button--default:hover {
        height: 45px;
        width: 350px;
        background-color: #85b62b;
      }
      .el-button.el-button--default.is-disabled {
        height: 45px;
        width: 350px;
        background-color: #729635;
        cursor: default;
      }
    }
  }
}
</style>