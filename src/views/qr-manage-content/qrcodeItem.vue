<template>
    <el-card class="qrcode-card">
        <el-col :span="1">
            <input type="checkbox" id="john" value="John" v-model="xxx" class="checkbox">
        </el-col>
        <el-col :span="11" :offset="1">
            <div>
                <el-col :offset="2">
                    网站
                </el-col>
            </div>
            <div class="title">
                <el-col :span="1">
                    <img class="img" src="@/assets/file.png" />
                </el-col>
                <el-col :span="22" :offset="1">
                    <el-input v-model="name" placeholder="请输入内容"></el-input>
                </el-col>
            </div>

            <el-row class="info">
                <el-col :span="11">
                    <el-row>
                        <el-col :span="1">
                            <img width="15px" height="15px" src="@/assets/folder.png" />
                        </el-col>
                        <el-button @click="test" type="text">无文件夹</el-button>
                    </el-row>
                    <el-row>
                        <el-col :span="1">
                            <img src="@/assets/time.png" width="15px" height="15px" />
                        </el-col>
                        <div class="date">日期</div>
                    </el-row>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-row>
                        <img width="15px" height="15px" src="@/assets/link.png" />
                        <a href="http://l.ead.me/bax7mX">l.ead.me/bax7mX</a>
                    </el-row>
                    <el-row>
                        <img width="15px" height="15px" src="@/assets/arrow.png" />
                        <a href="http://139.199.207.xaa3">139.199.207.xaa3</a>
                    </el-row>

                </el-col>
            </el-row>
            <!-- <div class="info">
                <el-col :span="11" :offset="1">
                    <div class="info-left">
                        <el-col :span="1">
                            <img class="img" src="@/assets/folder.png" />
                        </el-col>
                        <el-button @click="test" type="text">无文件夹</el-button>
                    </div>

                    <el-row>
                        <el-col :span="1">
                            <img  src="@/assets/time.png" width="15px" height="15px"/>
                            </el-col>
                        <div>日期</div>
                    </el-row>
                </el-col>

                <el-col :span="11" :offset="1">
                    <a href="http://l.ead.me/bax7mX">l.ead.me/bax7mX</a>
                </el-col>
            </div> -->

        </el-col>

        <el-col :span="10" :offset="1">
            <el-col :span="8" class="qrcode-report">
                <span>访问量: {{count}}</span>
                <div>
                    <el-button type="text">详细报告</el-button>
                </div>
            </el-col>

            <el-col :span="8">
                <div class="qrcode-image">
                    <img class='img' :src="qrcodeImgUrl" />
                </div>
            </el-col>

            <el-col :span="8" class="qrcode-operation">
                <div class="button">
                    <el-dropdown split-button type="primary" @click="handleClick">下载
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑</el-dropdown-item>
                            <el-dropdown-item>设计</el-dropdown-item>
                            <el-dropdown-item>添加到文件夹</el-dropdown-item>
                            <el-dropdown-item divided>暂停</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-col>
    </el-card>
</template>

<script>
export default {
  data() {
    return {
      xxx: null,
      count: 16,
      aaaa: "无文件夹",
      name: "我的 PDF",
      qrcodeImgUrl:
        "https://qrcgcustomers.s3.amazonaws.com/account3683758/qrcodes/11346190.png?rnd=1536290793562"
    };
  },
  methods: {
    test() {
      console.log(111);
    },
    handleClick() {}
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.qrcode-card {
  width: 1100px;
  height: 150px;
  .el-card__body {
    padding: 5px;
  }
  .checkbox {
    margin-top: 60px;
    margin-left: 20px;
  }
  .title {
    display: inline-block;
    margin-top: 5px;
    .img {
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }
    .el-input__inner {
      border: 1px solid #fff;
      font-size: 24px;
      padding: 2px 8px;
      height: 30px;
      vertical-align: middle;
    }
    .el-input__inner:hover {
      border-color: #d4d4d4;
    }
  }
  .info {
    .el-row {
      margin-top: 5px;
    }
    .el-button {
      padding: 0;
      margin-left: 15px;
    }
    .date {
      display: inline-block;
      margin-left: 15px;
      font-size: 14px;
    }
  }
  .qrcode-image {
    width: 136px;
    height: 136px;
    display: inline-block;
    .img {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
  .qrcode-report {
    padding-top: 36px;
    padding-left: 20px;
  }
  .qrcode-operation {
    padding-top: 40px;
    padding-left: 20px;
    .button {
    }
    .el-button--primary {
      background-color: rgba(25, 25, 25, 0.5);
      border-color: #d4d4d4;
    }
  }
}
</style>


