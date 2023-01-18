import React from 'react'
import Link from 'next/link'
import { Box, FlexBox, HeadingText, Word } from '@/styles/components'
import { setTokenToLocalStorage } from '@/lib/common'
import { setAuthToken } from '@/service'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const logout = () => {
    setTokenToLocalStorage(null)
    setAuthToken(null)
    router.push('/login')
  }

  return (
    <Box
      padding='24px 32px'
      bgColor='var(--cr-gray)'
    >
      <FlexBox justify='space-between' align='center'>
        <Link href='/'>
          <HeadingText level={2}>Logo</HeadingText>
        </Link>
        <FlexBox gap={12}>
          <Box>
            <Link href='/users'><Word>Users</Word></Link>
          </Box>
          <Box>
            <Link href='/events'><Word>Calandar</Word></Link>
          </Box>
          <Box onClick={logout} cursor='pointer'>
            <Word>Logout</Word>
          </Box>
        </FlexBox>
      </FlexBox>
    </Box>
  )
}

export default Header
