import { loadUserInfo, loadUserToken, loadSellerInfo } from '../assets/js/cache'
const state = {
  userInfo: loadUserInfo(),
  userToken: loadUserToken(),
  // userAccountId: null,
  errorTimeList: [],
  sellerInfo: loadSellerInfo()
}
export default state
