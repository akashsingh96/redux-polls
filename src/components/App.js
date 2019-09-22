import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "../actions/shared";
// import Dashboard from "./Dashboard";
// import Leaderboard from "./Leaderboard";
// import Addpoll from "./Addpoll";
import Poll from "./Poll";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <Poll match={{ params: { id: "xj352vofupe1dqz9emx13r" } }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.authedUser === null
});

export default connect(mapStateToProps)(App);
