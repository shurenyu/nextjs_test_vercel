import { userReducer } from "./userReducer";
import { eventReducer } from "./eventReducer";

const mainReducer = (state: any, action: any) => {
  return {
    userState: userReducer(state.userState, action),
    eventState: eventReducer(state.eventState, action)
  };
};

export default mainReducer;
