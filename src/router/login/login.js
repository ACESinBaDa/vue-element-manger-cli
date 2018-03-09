const Login = (resolve) => {
    import('@/components/login/login').then((module) => {
      resolve(module)
    })
}
// const Sign = (resolve) => {
//   import('@/components/login/sign').then((module) => {
//     resolve(module)
//   })
// }
// const Reg = (resolve) => {
//   import('@/components/login/reg').then((module) => {
//     resolve(module)
//   })
// }

const login = [{
  path: '/login',
  component: Login,
  name: 'login',
  meta: { title: '登录' }
}]
/*  {
    path: '/sign',
    component: Sign,
    name: 'sign',
    meta: { title: '找回密码' }
  }, {
    path: '/reg',
    component: Reg,
    name: 'reg',
    meta: { title: '登陆' }
  } */

export default login
