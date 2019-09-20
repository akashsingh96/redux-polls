import { SET_AUTHED_USER } from "../actions/authed";

const setAuthedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.authedId;
    default:
      return state;
  }
};

export default setAuthedUser;
