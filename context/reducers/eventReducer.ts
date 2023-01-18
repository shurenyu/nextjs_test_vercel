import { IEvent } from "@/lib/interfaces"

export const eventReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'createEvent': {
      const newEvent = action.payload
      const events = state.events || []
      const index = events.findIndex((item: IEvent) => item.id === newEvent.id)
      if (index === -1) {
        events.push(action.payload)
      }
      return {
        ...state,
        events: events,
        openModal: false,
      }
    }

    case 'updateEvent': {
      const updatedEvent = action.payload
      const events = state.events || []
      const index = events.findIndex((item: IEvent) => item.id === updatedEvent.id)
      if (index > -1) {
        events[index] = updatedEvent
      }
      return {
        ...state,
        events: events,
        openModal: false,
      }
    }

    case 'deleteEvent': {
      const deletedEvent = action.payload
      const temp = state.events || []
      const events = temp.filter((item: IEvent) => item.id !== deletedEvent.id)
      return {
        ...state,
        events: events,
        openModal: false,
      }
    }

    case 'setEvents': {
      return {
        ...state,
        events: action.payload
      }
    }

    case 'setCurrentEvent': {
      return {
        ...state,
        currentEvent: action.payload
      }
    }

    case 'openEventModal': {
      return {
        ...state,
        openModal: action.payload
      }
    }

    case 'updateEventState': {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state
  }
}
