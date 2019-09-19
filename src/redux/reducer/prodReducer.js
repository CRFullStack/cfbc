/**
 * These describe how the application state
 * changes with respect to actions dispatched to the redux store.
 */

const initialState = {
  teams: []
};

// When the reducer receives an action from dispach,
const productionReducer = (state = initialState, action) => {
  let newState = { ...state };

  // Our dispach actions go here

  if (action.type === "GET_DATA") {
    newState = { ...newState, teams: action.payload.data };
  }
  if (action.type === "ADD_TEAM") {
    newState = { ...newState, teams: action.payload.data };
  }
  if (action.type === "ADD_PLAYER") {
    newState = { ...newState, teams: action.payload.data.data };
  }
  if (action.type === "DELETE_TEAM") {
    newState = { ...newState, teams: action.payload.data };
  }
  if (action.type === "DELETE_PLAYER") {
    newState = { ...newState, teams: action.payload.data };
  }

  console.log("new current: ", newState);
  return newState;
};

export default productionReducer;
