import { useState, useEffect } from 'react'
import Router from 'next/router'
import { getTokenFromLocalStorage } from '@/lib/common';
import { setAuthToken } from '@/service';

export function useAuth() {
  const [authenticated, setAutenticated] = useState(false)

  useEffect(() => {
    const localToken = getTokenFromLocalStorage()

    if (!localToken) {
      setAuthToken(null)
      Router.push('/login')
      return
    }

    setAutenticated(true)
    setAuthToken(localToken)
  }, []);

  return { authenticated };
}
