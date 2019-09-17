/**
 *  Actions are payloads of information which send data
 * to the store. Essentially, they are JavaScript objects.
 * What makes a particular action unique is the type key defined in it.
 */

export const testAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};
