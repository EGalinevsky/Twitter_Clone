import { TweetsApi } from './../../../services/api/tweetsApi';
import { TweetsActionsType, setTweetsLoadingState, setTweets } from './actionCreators';
import { call, takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { LoadingState, Tweet } from './contracts/state';

// ...

// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest(): Generator<unknown, void, Tweet[]> {
  try {
    const items: Tweet[] = yield call(TweetsApi.fetchTweets);
   yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  } 
  // console.log( yield call(TweetsApi.fetchTweets))
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}