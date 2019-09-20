import { getInitialData } from "../utils/api";
import receiveUsers from "./users";
import receivePolls from "./polls";
import setAuthedUser from "./authed";

const authedId = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(authedId));
    });
  };
}
