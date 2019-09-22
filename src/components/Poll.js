import React, { Component } from "react";
import { connect } from "react-redux";
import { getPercentage } from "../utils/helpers";

class Poll extends Component {
  handleAnswer = answer => {
    const { poll, authedUser } = this.props;
    this.answered = true;
    console.log(answer);
  };
  render() {
    if (!this.props.poll) return <p>This poll does not exit</p>;
    const { poll, vote, authorAvatar } = this.props;
    const total = ["aVotes", "bVotes", "cVotes", "dVotes"].reduce(
      (total, key) => (total = total + poll[key].length),
      0
    );
    // debugger;
    return (
      <div className="poll-container">
        <h1 className="question">{poll.question}</h1>
        <div className="poll-author">
          By <img src={authorAvatar} alt="Author's avatar" />
        </div>
        <ul>
          {["aText", "bText", "cText", "dText"].map(key => {
            const count = poll[key[0] + "Votes"].length;
            return (
              <li
                onClick={() => {
                  if (!vote && !this.answered) return this.handleAnswer(key[0]);
                }}
                className={`option ${vote === key[0] ? "chosen" : ""}`}
              >
                {vote === null ? (
                  poll[key]
                ) : (
                  <div className="result">
                    <span>{poll[key]}</span>
                    <span>
                      {getPercentage(count, total)}%({count})
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
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
