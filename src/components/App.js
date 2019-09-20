import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : <Leaderboard />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.authedUser === null
});

export default connect(mapStateToProps)(App);
