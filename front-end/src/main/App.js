import React from "react";
import { connect } from "react-redux";
import { testAction } from "../redux/actions/prodAction";
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
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://miro.medium.com/max/540/1*7A4lpkuHgEyGrIYzfAj4dA.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.testAction}>Test redux action</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
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
