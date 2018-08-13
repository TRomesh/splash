import { STATS } from "../constant/appconstant";

const statsReducer = (state = {}, action) => {
  switch (action.type) {
    case STATS.LOAD:
      return Object.assign({}, state, {
        isLoading: true,
        downloads: null,
        error: false
      });
    case STATS.LOAD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        downloads: action.downloads,
        error: false
      });
    case STATS.LOAD_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        downloads: null,
        error: true
      });
    default:
      return state;
  }
};

export default statsReducer;
