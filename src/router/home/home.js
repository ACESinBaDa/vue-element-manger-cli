import other from '../other/other'
const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}
const defaultHome = [{
  path: '/home',
  redirect: {
    name: 'notice'
  }
}]
const home = [{
  path: '/',
  component: Home,
  name: 'home',
  children: [...defaultHome, ...other]
}]
export default home
