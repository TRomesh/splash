import { IMAGES } from "../constant/appconstant";

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return Object.assign({}, state, action.images);
    default:
      return state;
  }
};

export default imagesReducer;
