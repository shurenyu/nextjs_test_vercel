export interface IUser {
  id?: string
  age?: number
  email?: string
  name?: string
}

export interface IEvent {
  id?: string
  title?: string
  start?: string
  end?: string
}

export interface UserState {
  users: IUser[] | null
  currentUser: IUser | null
  openModal: boolean
}

export interface EventState {
  events: IEvent[] | null
  currentEvent: IEvent | null
  openModal: boolean
}

export interface AppState {
  userState: UserState
  eventState: EventState
}

export interface IAppContext extends AppState {
  dispatch: any
}
