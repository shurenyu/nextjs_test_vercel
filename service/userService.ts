import { IUser } from "@/lib/interfaces"
import { APIHub } from "."

export const getUsers = async () => {
  try {
    const response = await APIHub.get('/users')
    const { result } = response.data
    return { data: result, error: false, message: '' }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}

export const createUser = async (payload: IUser) => {
  try {
    const response = await APIHub.post('/users', payload)
    const { result } = response.data
    return { data: result, error: false }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}

export const updateUser = async (payload: IUser, id: string) => {
  try {
    const response = await APIHub.post(`/users/${id}`, payload)
    const { result } = response.data
    return { data: result, error: false }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}

export const deleteUser = async (id: string) => {
  try {
    const response = await APIHub.delete(`/users/${id}`)
    const { result } = response.data
    return { data: result, error: false }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}
