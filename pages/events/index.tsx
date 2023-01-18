import React, { useMemo, useState } from 'react'
import Layout from '@/layout'
import { Button } from 'antd'
import { Box, Container, FlexBox, HeadingText } from '@/styles/components'
// import EventModal from '@/components/EventModal'
import { useAppContext } from '@/context'
import { useGetUsers } from '@/hooks/useUser'
import UsersTable from '@/components/UsersTable'
import EventCalendar from '@/components/EventCalendar'
import { useGetEvents } from '@/hooks/useEvent'
import { DateLocalizer } from 'react-big-calendar'
import PropTypes from 'prop-types'
import EventModal from '@/components/EventModal'

export default function EventsPage() {
  // const { dispatch } = useAppContext()
  // const { events } = useGetEvents()

  // const handleAddUser = () => {
  //   const payload = {
  //     currentUser: null,
  //     openModal: true
  //   }
  //   dispatch({ type: 'updateUserState', payload})
  // }

  return (
    <Layout>
      <Container>
        <Box padding='24px 16px'>
          <HeadingText level={2}>Events</HeadingText>
          <Box>
            <EventCalendar />
          </Box>
        </Box>
        <EventModal />
      </Container>
    </Layout>
  )
}
