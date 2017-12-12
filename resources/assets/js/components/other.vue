<template>
    <div id="other">
        this is the compnent other!
<<<<<<< HEAD
        <el-row :gutter="20">
           <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
=======
        <Calendar
                :value="value"
                :disabled-days-of-week="disabled"
                :format="format"
                :clear-button="clear"
                :placeholder="placeholder"
                :pane="2"
                :has-input="false"
        ></Calendar>
>>>>>>> 50dab93d41e591e58cf9c0dde2717a133148e02d
    </div>

</template>

<script>
<<<<<<< HEAD

</script>

<style>
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
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
=======
    import Calendar from '../module/Calendar.vue'
    export default {
        data(){
            return{
                disabled: [],
                value: '2015-06-10',
                format: 'yyyy-MM-dd',
                clear: true,
                placeholder: 'placeholder is displayed when value is null or empty'
            }
        },

        components: {
            Calendar
        }
    }
</script>
>>>>>>> 50dab93d41e591e58cf9c0dde2717a133148e02d
