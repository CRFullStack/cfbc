/**
 * These describe how the application state
 * changes with respect to actions dispatched to the redux store.
 */

export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
