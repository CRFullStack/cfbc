/**
 *  Actions are payloads of information which send data
 * to the store. Essentially, they are JavaScript objects.
 * What makes a particular action unique is the type key defined in it.
 */

export const testAction = () => dispatch => {
  dispatch({
    type: "MESSAGE",
    payload: "Our production script!"
  });
};

export const addTeamAction = team => dispatch => {
  dispatch({
    type: "ADD_TEAM",
    payload: team
  });
};

export const addPlayerAction = (_teamName, _player) => dispatch => {
  dispatch({
    type: "ADD_PLAYER",
    payload: {
      teamName: _teamName,
      player: _player
    }
  });
};
