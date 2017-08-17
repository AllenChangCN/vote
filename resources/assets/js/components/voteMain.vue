<template>
    <div>
        <el-row :gutter="20" class="navig">
            <el-col :span="6"><div class="grid-content bg-purple"> <router-link to="/vote">投票</router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/history">历史记录</router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/advice">建议与反馈</router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/other">其他</router-link></div></el-col>
        </el-row>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                radio:'1'
            }
        }
    }


</script>

<style>
    @import url("//unpkg.com/element-ui@1.4.2/lib/theme-default/index.css");
    .navig{
        width: 75%;
        vertical-align: middle;
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
             margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align: center;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>