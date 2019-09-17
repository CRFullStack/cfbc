import React from "react";
import { connect } from "react-redux";
import {
  testAction,
  addTeamAction,
  addPlayerAction
} from "../redux/actions/prodAction";
import Nav from "../nav/nav";
import Head from "../header/header";
import Body from "../body/body";
import "./App.css";

class App extends React.Component {
  // this calls mapDispatchtoProps
  testAction = event => {
    this.props.testAction();
  };

  addTeam = (teamName, player) => {
    this.props.addTeam(teamName);
  };

  addPlayer = (player, teamName) => {
    this.props.addPlayer(teamName, player);
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Head />
        <Body
          addPlayer={this.addPlayer}
          addTeam={this.addTeam} // this adds a card for the teams
          teams={this.props.productionReducer.teams} // passes array from reducer to body component
        />
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
  testAction: () => dispatch(testAction()),
  addTeam: teamName => dispatch(addTeamAction(teamName)),
  addPlayer: (teamName, player) => dispatch(addPlayerAction(teamName, player))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
