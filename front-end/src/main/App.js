import React from "react";
import { connect } from "react-redux";
import { testAction } from "../redux/actions/prodAction";
import Nav from "../nav/nav";
import Head from "../header/header";
import "./App.css";

class App extends React.Component {
  // this calls mapDispatchtoProps
  testAction = event => {
    this.props.testAction();
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Head />
      </React.Fragment>
    );
  }
}

/// Redux stuff from here on
/**
 *
 * The mapStateToProps parameter of connect allows
 * the React component to subscribe to redux state updates.
 */
const mapStateToProps = state => ({
  ...state
});

/**
 * 
 The mapDispatchToProps parameter of connect can either be:
    an object of action creators wrapped into a dispatch.
 */
const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
