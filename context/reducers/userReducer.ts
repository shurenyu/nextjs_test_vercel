import { IUser } from "@/lib/interfaces"

export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'createUser': {
      const newUser = action.payload
      const users = state.users || []
      const index = users.findIndex((item: IUser) => item.id === newUser.id)
      if (index === -1) {
        users.push(action.payload)
      }
      return {
        ...state,
        users: users,
        openModal: false,
      }
    }

    case 'updateUser': {
      const updatedUser = action.payload
      const users = state.users || []
      const index = users.findIndex((item: IUser) => item.id === updatedUser.id)
      if (index > -1) {
        users[index] = updatedUser
      }
      return {
        ...state,
        users: users,
        openModal: false,
      }
    }

    case 'deleteUser': {
      const deletedUser = action.payload
      const temp = state.users || []
      const users = temp.filter((item: IUser) => item.id !== deletedUser.id)
      return {
        ...state,
        users: users
      }
    }

    case 'setUsers': {
      return {
        ...state,
        users: action.payload
      }
    }

    case 'setCurrentUser': {
      return {
        ...state,
        currentUser: action.payload
      }
    }

    case 'openUserModal': {
      return {
        ...state,
        openModal: action.payload
      }
    }

    case 'updateUserState': {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state
  }
}
