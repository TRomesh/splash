import { IMAGES } from "../constant/appconstant";

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return Object.assign({}, state, { images: action.images.data });
    default:
      return state;
  }
};

export default imagesReducer;
