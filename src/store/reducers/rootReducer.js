import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
