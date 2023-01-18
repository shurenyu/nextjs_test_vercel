import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/context'
import { getUsers } from '@/service/userService'
import { IUser } from '@/lib/interfaces'

export const useGetUsers = () => {
  const { userState, dispatch } = useAppContext()
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (userState.users) {
      setUsers(userState.users)
      return
    }

    getUsers().then(({ data, error }) => {
      if (!error) {
        setUsers([...data])
        dispatch({ type: 'setUsers', payload: data })
      }
    })
  }, [userState.users, dispatch])

  return { users }
}
