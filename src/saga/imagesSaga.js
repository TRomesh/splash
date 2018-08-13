import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from "../constant/appconstant";
import { fetchImages, setImages, setError } from "../actions/actions";

const getPage = state => state.nextPage;

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const image = yield call(fetchImages, page);
    yield put(setImages(image));
  } catch (error) {
    //dispatch error
    yield put(setError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
