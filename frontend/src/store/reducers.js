// store/reducers.js
import { combineReducers } from "redux";
// Import your reducers here
// For example:
// import counterReducer from "./counterReducer";
import sidebarReducer from "./reducers/sidebarReducer";

const rootReducer = combineReducers({
  // Add your reducers here
//   counter: counterReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
