import { getMoviRankAsync, getMovieUrlAsync } from './actions';
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

const getMovieDailyRank = createAsyncSaga(getMoviRankAsync, movieApi.getDailyBoxOfficeList)
const getMovieUrl = createAsyncSaga(getMovieUrlAsync, movieApi.getMovieUrl)

export function* movieSaga() {
  yield takeEvery(getMoviRankAsync.request, getMovieDailyRank);
  yield takeEvery(getMovieUrlAsync.request, getMovieUrl);
}