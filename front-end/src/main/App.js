import React from "react";
import { connect } from "react-redux";
import { testAction } from "../redux/actions/prodAction";
import Nav from "../nav/nav";
import "./App.css";

class App extends React.Component {
  /**
   * @memberof App
   * @summary handles button click
   */
  testAction = event => {
    this.props.testAction();
  };

  render() {
    return <Nav />;
  }
}
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
