import axios from "axios"
import { User } from "../types/types"

const ENDPOINT_URL = "https://qiita.com/api/v2/items?query=$Mukai%20Yuuki"

const userApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL)
    return result.data
  },
  async post(user: User) {
    const result = await axios.post(ENDPOINT_URL, user)
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
}

export default userApi
