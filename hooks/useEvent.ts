import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/context'
import { IEvent } from '@/lib/interfaces'
import { getEvents } from '@/service/eventService'

export const useGetEvents = () => {
  const { eventState, dispatch } = useAppContext()
  const [events, setEvents] = useState<IEvent[]>([])

  useEffect(() => {
    if (eventState.events) {
      setEvents(eventState.events)
      return
    }

    getEvents().then(({ data, error }) => {
      if (!error) {
        const formatted = data.map((item: any) => ({
          ...item,
          start: new Date(item.start),
          end: new Date(item.end)
        }))
        setEvents([...formatted])
        dispatch({ type: 'setEvents', payload: formatted })
      }
    })
  }, [eventState.events, dispatch])

  return { events }
}
