/**
 * These describe how the application state
 * changes with respect to actions dispatched to the redux store.
 */

const initialState = {
  message: "",
  outcome: "Hello"
};

// When the reducer receives an action from dispach,
const productionReducer = (state = initialState, action) => {
  const newState = { ...state };

  // Our dispach actions go here

  if (action.type === "MESSAGE") {
    newState.message = action.payload;
  }

  return newState;
};

export default productionReducer;
