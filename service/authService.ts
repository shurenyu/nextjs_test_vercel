import { APIHub } from "."

export const login = async (email: string, password: string) => {
  try {
    const response = await APIHub.post('/auth/login', {
      email: email,
      password: password
    })
    const { token } = response.data
    return { token, message: 'Logged in successfully.' }
  } catch (error: any) {
    const { data } = error.response
    return { token: null, message: data.message}
  }
}

export const signUp = async (email: string, password: string) => {
  try {
    const response = await APIHub.post('/auth/sign-up', {
      email: email,
      password: password
    })
    const { token } = response.data
    return { token, message: 'Registered successfully.' }
  } catch (error: any) {
    const { data } = error.response
    return { token: null, message: data.message}
  }
}
