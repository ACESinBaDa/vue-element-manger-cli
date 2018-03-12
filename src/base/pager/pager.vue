<template>
  <div>
    <div class="pager" v-if="!isEmpty">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
      </el-pagination>
    </div>
    <noCont v-if="isEmpty"></noCont>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
import NoCont from '../../base/noCont/noCont'
export default {
  name: 'pager',
  mixins: [pageCommon],
  components: {
    NoCont
  },
  props: {
    currentPage: Number,
    pageSizeArray: Array,
    pageSize: Number,
    pageTotal: Number
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
