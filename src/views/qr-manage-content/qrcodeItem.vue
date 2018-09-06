<template>
    <el-card class="card">
        <el-col :span="12" :offset="1">
            <el-col :offset="2"><div>Website</div></el-col>
            <div class="nameInput">
                <el-row>
                <el-col :span="1"><i class="el-icon-edit" width="40px" height="40px"></i></el-col>
                <el-col :span="10" :offset="1"><el-input v-model="name" placeholder="请输入内容"></el-input></el-col>
                </el-row>
            </div>
            
            <el-row>
                <el-col :span="11" :offset="1">
                    <el-row>
                        <el-col :span="1"><i class="el-icon-edit" width="40px" height="40px"></i></el-col>
                        <el-button @click="test" type="text">{{aaaa}}</el-button>
                    </el-row>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-edit" width="40px" height="40px"></i></el-col>
                        <div>日期</div>
                    </el-row>

                </el-col>
                <el-col :span="11" :offset="1"><a href="http://l.ead.me/bax7mX">l.ead.me/bax7mX</a></el-col>
            </el-row>           
        </el-col>
        <el-col :span="8" :offset="1">
            <el-row>
                <el-col :span="8">{{aaaa}}<div><el-button type="text">Insights</el-button></div></el-col>
                <el-col :span="8"><img src=""></el-col>
                <el-col :span="8">
                    <el-dropdown>
  <el-button type="primary">
    更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
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
            aaaa: 'No folder',
            name:"123"
         }
     },
     methods:{
         test() {
             console.log(111)
         }
     }
    }
</script>

<style>
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
</style>