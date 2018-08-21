export const pageCommon = {
  data () {
    return {
      pageSizeArray: [5, 10, 20, 50, 100],
      pageNo: 1,
      pageSize: 5,
      pageTotal: null,
      total: null,
      isEmpty: false
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    // 修改每页显示的数据数目
    handleSizeChange (val) {
      this.pageSize = val
      this.getList()
    },
    // 设置pageNo
    handleCurrentChange (val) {
      this.pageNo = val
      this.getList()
    },
    // 查看数据api
    getList () {
      this.$ajax.post(this.apiUrl, this.params)
        .then((response) => {
          let mydata = response.data
          if (mydata.code === '200') {
            this.pageTotal =
              mydata.data.total || mydata.totalCount || mydata.data.totalCount
            let myDatas =
              mydata.data.waitingSendSMSList ||
              mydata.data.data ||
              mydata.data.datas ||
              mydata.data.userAccountDOList ||
              mydata.data.buyers ||
              mydata.data ||
              mydata.data.chargeApplys
            if (myDatas.length > 0) {
              this.isEmpty = false
            } else {
              this.isEmpty = true
            }
            this.setList(myDatas)
          } else {
            this.$message({
              message: mydata.message,
              type: 'warning'
            })
          }
        }).catch((error) => {
          console.log(error)
          this.$message.error('网络错误，刷新下试试')
        })
    }
  }
}
