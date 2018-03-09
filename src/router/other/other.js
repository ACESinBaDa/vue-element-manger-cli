const notice = () =>
  import(/* webpackChunkName: "notice" */ '@/components/other/notice')
const other = [{
  path: 'other/notice',
  component: notice,
  name: 'notice',
  meta: { title: '发布公告' }
}]

export default other
