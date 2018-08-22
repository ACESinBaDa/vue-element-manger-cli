const Notice = () =>
  import(/* webpackChunkName: "Notice" */ '@/pages/other/notice')

const other = [{
  path: 'other/notice',
  component: Notice,
  name: 'notice',
  meta: {
    title: '发布公告'
  }
}]

export default other
