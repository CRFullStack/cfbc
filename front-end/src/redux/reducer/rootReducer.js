/**
 * combine all reducers in the app into a single index reducer.
 */

import { combineReducers } from "redux";
import productionReducer from "./prodReducer";

export default combineReducers({
  productionReducer
});
