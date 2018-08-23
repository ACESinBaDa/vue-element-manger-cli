<template>
  <div class="notice">
    <div class="search">
      <div class="left">
        <em class="btn-b">添加公告</em>
      </div>
    </div>
    <tables :options="options" @setData="setData">
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </tables>
  </div>
</template>
<script type="text/ecmascript-6">
import Tables from '@/components/tables/tables'
import md5 from 'md5'
export default {
  name: 'notice',
  components: {
    Tables
  },
  computed: {
    options () {
      return {
        apiUrl: '/platform/account/login',
        params: {
          userName: '15658195723',
          password: md5(123456)
        }
      }
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    setData (data) {
      this.tableData = [{
        name: '123',
        type: '1'
      }]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.notice
  margin 20px
  padding 20px
  background #ffffff
  font-size 14px
  .import
    display inline-block
    width 54px
    height 18px
    border-radius 2px
    border 1px solid #FF3341
    color #FF3341
    font-size 12px
    line-height 18px
    text-align center
  .search
    padding-bottom 20px
    border-bottom 1px solid #e5e5e5
    display flex
    .left
      flex 1
      span
        margin-right 10px
      .btn
        margin-left 20px
    .right
      flex 1
      text-align right
  .table
    margin-top 20px
</style>
