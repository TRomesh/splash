import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const configureStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLs_EXTENTION__ && window.__REDUX_DEVTOOLs_EXTENTION__()
  );
  return store;
};

export default configureStore;
