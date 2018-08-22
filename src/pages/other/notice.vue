<template>
  <div class="notice">
    <div class="search">
      <div class="left">
        <em class="btn-b">添加公告</em>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="标题" align="center">
          <template slot-scope="scope">
            <div>
              <span>哈哈哈哈</span>
              <em class="import">最重要</em>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="摘要" align="center">
        </el-table-column>
        <el-table-column prop="address" label="内容" show-overflow-tooltip align="center" width="150">
        </el-table-column>
        <el-table-column prop="address" label="发布时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="setImport" type="text" size="small">设置为最重要</el-button>
            <el-button @click="dele" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'notice',
  data () {
    return {
      currentPage: 1,
      tableData: [{
        date: '2017-01-08',
        name: 'sdafsasafsa',
        address: 'fgsaasgadsasaddadasgas'
      }]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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
