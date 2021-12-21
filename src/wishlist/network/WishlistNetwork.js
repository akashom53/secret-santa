import axios from "axios"
import store from "../../store/store"


export default class WishlistNetwork {

  static fetchWishlist = async (userId) => new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('api/wishlist/', { params: { userId }, headers: { token: store.getState().login.token } })
      resolve(response.data.wishlist)
    } catch (e) {
      reject({ msg: e.response.data.msg, status: e.response.status })
    }
  })

  static addWishlistItem = async (userId, item) => new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('api/wishlist/', { userId, ...item }, { headers: { token: store.getState().login.token } })
      resolve(response.data.msg)
    } catch (e) {
      reject(e.response.data.msg)
    }
  })
}