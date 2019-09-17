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

export const addTeamAction = _team => dispatch => {
  dispatch({
    type: "ADD_TEAM",
    payload: _team
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

export const deleteTeamAction = _teamName => dispatch => {
  dispatch({
    type: "DELETE_TEAM",
    payload: _teamName
  });
};

export const deletePlayerAction = (_teamName, _player) => dispatch => {
  dispatch({
    type: "DELETE_PLAYER",
    payload: {
      teamName: _teamName,
      player: _player
    }
  });
};
