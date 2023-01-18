import axios from 'axios'
import { API_URL } from '@/lib/constants'

export const APIHub = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {"Content-Type": 'application/json'}
})

export const setAuthToken = (token: string | null) => {
  return new Promise<void>((resolve) => {
      // do something asynchronous which eventually calls either:
      if (token) {
          APIHub.defaults.headers.Authorization = `Bearer ${token}`
          resolve()
      } else {
          delete APIHub.defaults.headers.Authorization
          resolve()
      }
  })
}
