import { RECEIVE_USERS } from "../actions/users";

const receiveUsers = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
};

export default receiveUsers;
