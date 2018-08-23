<template>
  <div class="tablesBox">
    <noCont v-if="isEmpty"></noCont>
    <div class="tables" v-else>
      <slot></slot>
      <div class="pager">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import NoCont from '@/components/noCont/noCont'
import { PageCommon } from '@/assets/js/pageCommon'
export default {
  name: 'tables',
  mixins: [PageCommon],
  components: {
    NoCont
  },
  props: {
    options: Object
  },
  computed: {
    apiUrl () {
      if (this.options && this.options.apiUrl) {
        return this.options.apiUrl
      } else {
        return ''
      }
    },
    params () {
      if (this.options && this.options.params) {
        return this.options.params
      } else {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    setList (data) {
      this.$emit('setData', data)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
