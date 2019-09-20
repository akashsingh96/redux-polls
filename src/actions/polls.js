export const RECEIVE_POLLS = "RECEIVE_POLLS";

const receivePolls = polls => ({
  type: RECEIVE_POLLS,
  polls
});

export default receivePolls;
