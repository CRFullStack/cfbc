/**
 * These describe how the application state
 * changes with respect to actions dispatched to the redux store.
 */

const initialState = {
  teams: [
    {
      teamName: "Green",
      players: ["Chris", "Mom", "Hayden"]
    },
    {
      teamName: "Red",
      players: ["Chris", "Mom"]
    },
    {
      teamName: "Yellow",
      players: ["Chris", "Mom", "Hayden"]
    },
    {
      teamName: "Gold",
      players: ["Chris", "Mom", "Hayden", "Kevin"]
    },
    {
      teamName: "Black",
      players: ["Chris", "Mom", "Hayden", "Gwen", "Joey"]
    }
  ]
};

// When the reducer receives an action from dispach,
const productionReducer = (state = initialState, action) => {
  const newState = { ...state };

  // Our dispach actions go here

  if (action.type === "MESSAGE") {
    newState.message = action.payload;
  }
  if (action.type === "ADD_TEAM") {
    const teamNameCheck = newState.teams.filter(
      team => team.teamName.toLowerCase() === action.payload.toLowerCase()
    );
    if (teamNameCheck && teamNameCheck.length) {
      // array and array.length are truthy then
      // That team exist already
      console.log("That team name exist");
      alert("That team name already exist, please choose another.");
    } else {
      newState.teams.push({ teamName: action.payload, players: [] });
    }
  }
  if (action.type === "ADD_PLAYER") {
    const searched = newState.teams.find(
      team => team.teamName === action.payload.teamName
    );
    searched.players.push(action.payload.player);
  }
  if (action.type === "DELETE_TEAM") {
    const index = newState.teams.findIndex(x => x.teamName === action.payload);
    newState.teams.splice(index, 1);
    console.log("team deleted: ", index);
  }
  if (action.type === "DELETE_PLAYER") {
    const indexOfTeam = newState.teams.findIndex(
      x => x.teamName === action.payload.teamName
    );
    const indexOfPlayer = newState.teams[indexOfTeam].players.findIndex(
      x => x === action.payload.player
    );
    newState.teams[indexOfTeam].players.splice(indexOfPlayer, 1);
    console.log("player index: ", indexOfPlayer);
  }

  console.log("new current: ", newState);
  return newState;
};

export default productionReducer;
