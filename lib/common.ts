export const setTokenToLocalStorage = (token: string | null) => {
  if (!token) {
    localStorage.removeItem('token')
    return
  }

  localStorage.setItem('token', token)
}

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token')
}
