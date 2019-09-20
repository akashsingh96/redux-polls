import { RECEIVE_POLLS } from "../actions/polls";

const receivePolls = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POLLS:
      return { ...state, ...action.polls };
    default:
      return state;
  }
};

export default receivePolls;
