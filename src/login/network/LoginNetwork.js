import axios from "axios"
import { clear, log } from "../../core/debugLog/state/logSlice"
import store from "../../store/store"

export default class LoginNetwork {
  static login = async (phone) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post('/api/login/', { phone })
        resolve(response.data)
      } catch (e) {
        reject(e.response.data.msg)
      }
    })
  }
}