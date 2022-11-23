import { getMoviRankAsync, getMovieDetailAsync, getMovieSearchAsync } from './actions';
import movieApi from 'src/apis/movieApi';
import { takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../createAsyncSaga';

// function* getUserProfileSaga(action: ReturnType<typeof getMoviRankAsync.request>) {
//   try {
//     const movieRank: BoxOfficeResult = yield call(movieApi.getDailyBoxOfficeList, action.payload);
//     yield put(getMoviRankAsync.success(movieRank));
//   } catch (e: unknown | any) {
//     yield put(getMoviRankAsync.failure(e));
//   }
// }

const getMovieDailyRank = createAsyncSaga(getMoviRankAsync, movieApi.getDailyBoxOfficeList);
const getMovieDetail = createAsyncSaga(getMovieDetailAsync, movieApi.getMovieDetail);
const getMovieSearch = createAsyncSaga(getMovieSearchAsync, movieApi.getMovieSearch);

export function* movieSaga() {
  yield takeEvery(getMoviRankAsync.request, getMovieDailyRank);
  yield takeEvery(getMovieDetailAsync.request, getMovieDetail);
  yield takeEvery(getMovieSearchAsync.request, getMovieSearch);
}