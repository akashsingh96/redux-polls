export const SET_AUTHED_USER = "SET_AUTHED_USER";

const setUser = authedId => ({
  type: SET_AUTHED_USER,
  authedId
});

export default setUser;
