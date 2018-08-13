import { combineReducers } from "redux";
import loadingReducer from "./loadReducer";
import errorReducer from "./errorReducer";
import imageReducer from "./imageReducer";
import statsReducer from "./statsReducer";
import pageReducer from "./pageReducer";

const rootReducers = combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  imageStats: statsReducer,
  nextPage: pageReducer
});

export default rootReducers;
