import React, { Fragment, useState, useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Calendar, Views, DateLocalizer, momentLocalizer } from 'react-big-calendar'
import { IEvent } from '@/lib/interfaces'
import { useGetEvents } from '@/hooks/useEvent'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { createEvent } from '@/service/eventService'
import { useAppContext } from '@/context'
import { toast } from 'react-toastify'

export default function EventCalendar() {
  const { dispatch } = useAppContext()
  const { events } = useGetEvents()

  const handleSelectSlot = useCallback(
    async ({ start, end }: any) => {
      const title = window.prompt('New Event name')
      if (title) {
        const payload = { title, start, end }
        const { data, error, message } = await createEvent(payload)
        if (error) {
          toast.error(message || 'Failed to create')
          return
        }
        dispatch({ type: 'createEvent', payload: data })
      }
    },
    [dispatch]
  )

  const handleSelectEvent = useCallback(
    (event: any) => {
      dispatch({ type: 'setCurrentEvent', payload: event })
      dispatch({ type: 'openEventModal', payload: true })
    },
    [dispatch]
  )

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  )

  return (
    <Fragment>
      <div className="calender-wrapper">
        <Calendar
          defaultDate={defaultDate}
          defaultView={Views.MONTH}
          views={['month', 'agenda']}
          events={[...events]}
          localizer={momentLocalizer(moment)}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
        />
      </div>
    </Fragment>
  )
}
