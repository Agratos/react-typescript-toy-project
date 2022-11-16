import { getMoviRankAsync, GET_MOVIE_RANK } from './actions';
import { BoxOfficeResult } from './types';
import movieApi from 'src/apis/movieApi';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getUserProfileSaga(action: ReturnType<typeof getMoviRankAsync.request>) {
  try {
    const movieRank: BoxOfficeResult = yield call(movieApi.getDailyBoxOfficeList, action.payload);
    yield put(getMoviRankAsync.success(movieRank));
  } catch (e: unknown | any) {
    yield put(getMoviRankAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_MOVIE_RANK, getUserProfileSaga);
}