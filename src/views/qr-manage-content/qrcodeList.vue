<template>
<div class="block">
  <qrcode-item v-for="(item,index) in items" :key="index"></qrcode-item>
  <el-pagination
    @current-change="handleCurrentChange" :current-page.sync="currentPage1"
    layout="prev, pager, next"
    :total="total">
  </el-pagination>
</div>
    
</template>

<script>
import qrcodeItem from "./qrcodeItem"
export default {
    components:{
        qrcodeItem
    },
    mounted(){
        console.log(this.$route)
        //TODO : get data
        this.total=500
        this.$nextTick(
            
        )
    
    },
    data(){
        return {
            items:[
                1,2,3,4,5,6,7,8,9,10
            ],
            total:100
        }
    },
    methods:{
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
    
}
</script>

<style rel="stylesheet/scss" lang="scss">
.block{
    width: 1100px;
}
</style>
