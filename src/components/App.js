import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return this.props.loading ? null : (
      <div>
        <Dashboard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.authedUser === null
});

export default connect(mapStateToProps)(App);
