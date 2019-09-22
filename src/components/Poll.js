import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    return <div className="poll-container">{JSON.stringify(this.props)}</div>;
  }
}

const mapStateToProps = ({ authedUser, polls, users }, { match }) => {
  const { id } = match.params;
  const poll = polls[id];
  if (!poll)
    return {
      poll: null
    };

  const vote = ["aVotes", "bVotes", "cVotes", "dVotes"].reduce((vote, iter) => {
    if (vote) return vote[0];

    return poll[iter].includes(authedUser) ? iter : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  };
};

export default connect(mapStateToProps)(Poll);
