import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    show: false
  };
  toggleState = () => {
    this.setState(prev => ({ show: !prev.show }));
  };
  render() {
    const { answered, unanswered } = this.props;
    const { show } = this.state;
    const list = show ? answered : unanswered;
    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={{
              textDecoration: show === false ? "underline" : null
            }}
            onClick={this.toggleState}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={{
              textDecoration: show === true ? "underline" : null
            }}
            onClick={this.toggleState}
          >
            Answered
          </button>
        </div>
        <ul className="dashboard-list">
          {list.map(poll => (
            <li key={poll.id}>
              <Link to={`polls/${poll.id}`}>{poll.question}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ polls, users, authedUser }) => {
  const answers = users[authedUser].answers;
  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return { answered, unanswered };
};

export default connect(mapStateToProps)(Dashboard);
