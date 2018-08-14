import { IMAGES, STATS } from "../constant/appconstant";
import axios from "axios";

const splashService = process.env.REACT_APP_SPLASH_API;
const key = process.env.REACT_APP_CLIENT_ID;

const loadImages = () => ({
  type: IMAGES.LOAD
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images
});

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error
});

const loadImageStats = id => ({
  type: STATS.LOAD,
  id
});

const setImageStats = (id, downloads) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  downloads
});

const setImageStatsError = id => ({
  type: STATS.LOAD_FAIL,
  id
});

const fetchImages = async page => {
  const response = await axios.get(
    `${splashService}?client_id=${key}&per_page=28`
  );
  if (response.status >= 400 || response.status >= 404) {
    throw new Error(response.errors);
  }
  return response;
};

const fetchImageStats = async id => {
  const response = await axios.get(`${splashService}${id}/statistics${key}`);
  if (response.status >= 400) {
    throw new Error(response.errors);
  }
  return response;
};

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError,
  fetchImages,
  fetchImageStats
};
