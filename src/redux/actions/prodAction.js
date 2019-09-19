/**
 *  Actions are payloads of information which send data
 * to the store. Essentially, they are JavaScript objects.
 * What makes a particular action unique is the type key defined in it.
 */

import axios from "axios";

export const getDataAction = () => async dispatch => {
  let data = await axios.get(`https://chobdy-api.herokuapp.com/cfbc/`);
  dispatch({
    type: "GET_DATA",
    payload: data
  });
};

export const addTeamAction = teamName => async dispatch => {
  if (teamName) {
    let data = await axios.post(
      `https://chobdy-api.herokuapp.com/cfbc/addteam`,
      {
        teamName: teamName
      }
    );
    console.log("Data from react team action: ", data);
    dispatch({
      type: "ADD_TEAM",
      payload: data
    });
  } else {
    alert("Team Name cannot be blank!");
  }
};

export const addPlayerAction = (teamName, player) => async dispatch => {
  let data = await axios.post(
    `https://chobdy-api.herokuapp.com/cfbc/addplayer`,
    {
      teamName: teamName,
      player: player
    }
  );

  dispatch({
    type: "ADD_PLAYER",
    payload: {
      data
    }
  });
};

export const deleteTeamAction = teamName => async dispatch => {
  let data = await axios.delete(
    `https://chobdy-api.herokuapp.com/cfbc/deleteteam`,
    { data: { teamName: teamName } }
  );

  dispatch({
    type: "DELETE_TEAM",
    payload: data
  });
};

export const deletePlayerAction = (teamName, player) => async dispatch => {
  let data = await axios.delete(
    `https://chobdy-api.herokuapp.com/cfbc/deleteplayer`,
    { data: { teamName: teamName, player: player } }
  );

  dispatch({
    type: "DELETE_PLAYER",
    payload: data
  });
};
