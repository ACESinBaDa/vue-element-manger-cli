const Login = () =>
  import(/* webpackChunkName: "Login" */ '@/pages/login/login')

const login = [{
  path: '/login',
  component: Login,
  name: 'login',
  meta: {
    title: '登录'
  }
}]

export default login
