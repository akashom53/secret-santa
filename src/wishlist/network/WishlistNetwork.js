import axios from "axios"


export default class WishlistNetwork {

  static fetchWishlist = async (userId) => new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('api/wishlist/', { params: { userId } })
      resolve(response.data.wishlist)
    } catch (e) {
      reject(e.response.data.msg)
    }
  })

  static addWishlistItem = async (userId, item) => new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('api/wishlist/', { userId, ...item })
      resolve(response.data.msg)
    } catch (e) {
      reject(e.response.data.msg)
    }
  })
}