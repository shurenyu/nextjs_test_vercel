import React, { createContext, useContext, useReducer, PropsWithChildren } from "react";
import reducers from "./reducers";
import { AppState, IAppContext } from "@/lib/interfaces"

const initialState: AppState = {
  userState: {
    users: null,
    currentUser: null,
    openModal: false,
  },
  eventState: {
    events: null,
    currentEvent: null,
    openModal: false,
  }
}

const initialContext: IAppContext = {
  ...initialState,
  dispatch: () => {},
}

export const AppContext = createContext<IAppContext>(initialContext)

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducers, initialState)
  return (
    <AppContext.Provider value={{...state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

export default ContextProvider
