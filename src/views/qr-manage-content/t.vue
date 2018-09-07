<template>
    <el-card class="qrcode-card">
        <el-col :span="1" >asd </el-col>
        <el-col :span="11" :offset="1">
            <el-row class="">            
                <el-col :offset="2">
                网站
                </el-col> 
            </el-row>

            <div class="title">
                <el-col :span="1">
                    <i class="el-icon-edit" width="40px" height="40px"></i>
                </el-col>
                <el-col :span="22" :offset="1">
                    <el-input v-model="name" placeholder="请输入内容"></el-input>
                </el-col>
            </div>
            
            <!-- <el-row>
                
                <el-col :span="11" :offset="1">
                    <el-row>
                        <el-col :span="1"><i class="el-icon-edit" width="40px" height="40px"></i></el-col>
                        <el-button @click="test" type="text">无文件夹</el-button>
                    </el-row>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-edit" width="40px" height="40px"></i></el-col>
                        <div>日期</div>
                    </el-row>
                </el-col>
                <el-col :span="11" :offset="1">
                    <a href="http://l.ead.me/bax7mX">l.ead.me/bax7mX</a>
                </el-col>
            </el-row> -->
        </el-col>
        <el-col :span="10" :offset="1">
            <el-row >
                <el-col :span="8">{{aaaa}}<div><el-button type="text">Insights</el-button></div></el-col>
                <el-col :span="8">
                    <div class="qrcode-image">
                        <img class='img' :src="qrcodeImgUrl" />
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-dropdown split-button type="primary" @click="handleClick">下载
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑</el-dropdown-item>
                            <el-dropdown-item>设计</el-dropdown-item>
                            <el-dropdown-item>添加到文件夹</el-dropdown-item>
                            <el-dropdown-item divided>暂停</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-col>
    </el-card>
</template>

<script>
    export default {
     data(){
         return {
            aaaa: '无文件夹',
            name:"我的 PDF",
            qrcodeImgUrl:'https://qrcgcustomers.s3.amazonaws.com/account3683758/qrcodes/11346190.png?rnd=1536290793562'
         }
     },
     methods:{
         test() {
             console.log(111)
         }
     }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-card__body {
    padding: 5px;
}
.qrcode-card{
    width:1100px;
    height: 150px;
    .body-style {
        padding: 10px;
    }
    .title{
        .el-input__inner{
        border:1px solid #fff;
        font-size: 24px;
        padding: 2px 8px;
        height: 30px;
        }
        .el-input__inner:hover{
            border-color: rgb(255, 0, 34);
        }
    }


    .qrcode-image {
        display: inline-block;
        position: relative;
        width: 100%;
        padding: 0 0 100%;
        margin: 0;
        text-align: center;
        .img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
}


// .card{
//         width:1100px;
//         height: 150px;
//         .nameInput .el-input__inner{
//         border:1px solid #fff;
//         font-size: 24px;
//         padding: 2px 8px;
//         height: 30px;
//     }
//     .nameInput .el-input__inner:hover {
//         border-color: blue;
//     }
//     .qrcode-image {
//         display: inline-block;
//         position: relative;
//         width: 100%;
//         padding: 0 0 100%;
//         margin: 0;
//         text-align: center;
//         .img{
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         border: 0;
//         }
//     }
// }
</style>



<!--style>
.card{
    width:1100px;
    height: 150px;
}

.nameInput .el-input__inner{
    border:1px solid #fff;
    font-size: 24px;
    padding: 2px 8px;
    height: 30px;
}
.nameInput .el-input__inner:hover {
    border-color: blue;
}
</style-->
