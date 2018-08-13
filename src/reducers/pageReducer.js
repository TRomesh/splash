import { IMAGES } from "../constant/appconstant";

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return Object.assign({}, state, state + 1);
    default:
      return state;
  }
};

export default pageReducer;
