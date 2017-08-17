<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button @click="click()" >ClickMe</el-button>
    </div>
</template>

<script>
    export  default {
        data(){
            return{
                tableData:[],
                input:'',
            }
        },
        
        methods:{
            click() {
                console.log("get in the js method");
                this.$http.post('/api/got-voteInfo',{
                    user:this.input,
                }).then(function (response) {
                    console.log("hellow");
                    console.log(response);
                    this.input=response.data;
                })
            }
        }
    }
</script>