import React, { useMemo, useState } from 'react'
import Layout from '@/layout'
import { Button } from 'antd'
import { Box, Container, FlexBox, HeadingText } from '@/styles/components'
import UserModal from '@/components/UserModal'
import { useAppContext } from '@/context'
import { useGetUsers } from '@/hooks/useUser'
import UsersTable from '@/components/UsersTable'

export default function UsersPage() {
  const { dispatch } = useAppContext()
  const { users } = useGetUsers()

  const handleAddUser = () => {
    const payload = {
      currentUser: null,
      openModal: true
    }
    dispatch({ type: 'updateUserState', payload})
  }

  return (
    <Layout>
      <Container>
        <Box padding='24px 16px'>
          <HeadingText level={2}>Users list</HeadingText>
          <Box>
            <FlexBox justify='flex-end'>
              <Button type='primary' onClick={handleAddUser}>
                Add user
              </Button>
            </FlexBox>
            <Box>
              <UsersTable users={users} />
            </Box>
          </Box>
        </Box>
        <UserModal />
      </Container>
    </Layout>
  )
}
