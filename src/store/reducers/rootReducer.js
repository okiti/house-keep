import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  firestore: firestoreReducer
});

export default rootReducer;
