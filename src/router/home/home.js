import other from '../other/other'

const Home = () =>
  import(/* webpackChunkName: "Home" */ '@/pages/home/home')

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
