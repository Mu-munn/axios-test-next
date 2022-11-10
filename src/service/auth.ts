import axios from "axios"
import { User } from "../types/types"

const ENDPOINT_URL = "https://hoge/login"

const authApi = {
  async get() {
    const result = await axios.get(ENDPOINT_URL)
    return result.data
  },
  async post(user: User) {
    const result = await axios.post(ENDPOINT_URL, user, { withCredentials: true })
    return result.data
  },
  async delete(user: User) {
    const result = await axios.delete(ENDPOINT_URL + "/" + user.id)
    return result.data
  },
  async patch(user: User) {
    const result = await axios.put(ENDPOINT_URL + "/" + user.id, user)
    return result.data
  },
  async check(user: User) {
    const result = await axios.post(ENDPOINT_URL, user)
    return result.data.user_data.success === "OK"
  },
}

export default authApi
