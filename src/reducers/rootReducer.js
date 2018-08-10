import { combineReducers } from "redux";
import loadingReducer from "./loadReducer";
import errorReducer from "./errorReducer";
import imageReducer from "./imageReducer";

const rootReducers = combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer
});

export default rootReducers;
