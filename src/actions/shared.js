import { getInitialData } from "../utils/api";
import receiveUsers from "./users";
import receivePolls from "./polls";
import setAuthedUser from "./authed";
import { showLoading, hideLoading } from "react-redux-loading";

const authedId = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(authedId));
      dispatch(hideLoading());
    });
  };
}
