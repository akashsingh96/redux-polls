import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import AddPoll from "./Addpoll";
import Nav from "./Nav";
import Poll from "./Poll";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="container">
          <LoadingBar />
          <Nav />
          {this.props.loading === true ? null : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/polls/:id" component={Poll} />
              <Route path="/add" component={AddPoll} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.authedUser === null
});

export default connect(mapStateToProps)(App);
