import { IEvent } from "@/lib/interfaces"
import { APIHub } from "."

export const getEvents = async () => {
  try {
    const response = await APIHub.get('/events')
    const { result } = response.data
    return { data: result, error: false, message: '' }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}

export const createEvent = async (payload: IEvent) => {
  try {
    const response = await APIHub.post('/events', payload)
    const { result } = response.data
    return { data: result, error: false }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}

export const updateEvent = async (payload: IEvent, id: string) => {
  try {
    const response = await APIHub.post(`/events/${id}`, payload)
    const { result } = response.data
    return { data: result, error: false }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}

export const deleteEvent = async (id: string) => {
  try {
    const response = await APIHub.delete(`/events/${id}`)
    const { result } = response.data
    return { data: result, error: false }
  } catch (error: any) {
    const { data } = error.response
    return { data: null, error: true, message: data.message}
  }
}
