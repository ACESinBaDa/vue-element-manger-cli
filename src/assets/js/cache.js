import storage from 'good-storage'

const USER_INFO_KEY = '__userInfo__'
const USER_TOKEN_KEY = '__userToken__'
const ERROR_TIME = '__errorTime__'
const SELLER_INFO_KEY = '__sellerInfo__'
// 设置个人信息
export function setUserInfoStorage (userInfo) {
  storage.session.set(USER_INFO_KEY, userInfo)
  return userInfo
}
export function clearUserInfo () {
  storage.session.remove(USER_INFO_KEY)
  return []
}
export function loadUserInfo () {
  return storage.session.get(USER_INFO_KEY, [])
}
// 设置卖家信息
export function setSellerInfoStorage (sellerInfo) {
  storage.session.set(SELLER_INFO_KEY, sellerInfo)
  return sellerInfo
}
export function loadSellerInfo () {
  return storage.session.get(SELLER_INFO_KEY, [])
}
// 设置用户登录token
export function setUserTokenStorage (userToken) {
  storage.session.set(USER_TOKEN_KEY, userToken)
  return userToken
}
export function clearUserToken () {
  storage.session.remove(USER_TOKEN_KEY)
  return []
}
export function loadUserToken () {
  return storage.session.get(USER_TOKEN_KEY, [])
}
// 设置失效时间
export function setErrorTimeList (time) {
  let hasArr = storage.session.get(ERROR_TIME) || []
  hasArr.push(time)
  return storage.session.set(ERROR_TIME, hasArr)
}
export function getErrorTimeList (query) {
  return storage.session.get(ERROR_TIME)
}
export function clearErrorTimeList (query) {
  storage.session.remove(ERROR_TIME)
}
