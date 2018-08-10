import { IMAGES } from "../constant";

const loadImages = () => {
  type: IMAGES.LOAD;
};

const setImages = image => ({
  type: IMAGES.LOAD_SUCCESS,
  images
});

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error
});

export { loadImages, setImages, setError };
