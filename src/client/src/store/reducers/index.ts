import { combineReducers } from "redux";
import { exerciseReducer } from "./exercises";
import { usersReducer } from "./users";

const rootReducers = combineReducers({
  exercises: exerciseReducer,
  users: usersReducer,
});

export default rootReducers;
