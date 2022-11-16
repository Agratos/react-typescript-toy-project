import { getUserProfileAsync, GET_USER_PROFILE } from './actions';
import { IGithubProfile } from 'src/apis/github/types';
import { getUserProfile } from 'src/apis/github';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
  try {
    const userProfile: IGithubProfile = yield call(getUserProfile, action.payload);
    yield put(getUserProfileAsync.success(userProfile));
  } catch (e: unknown | any) {
    yield put(getUserProfileAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}