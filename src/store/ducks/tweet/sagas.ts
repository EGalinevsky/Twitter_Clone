import {  setTweetLoadingState, setTweetData } from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects'
import { LoadingState} from './contracts/state';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionTypes';
// ...

// Our worker Saga: will perform the async increment task
export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface): any{
  try {
   const data= yield call(TweetsApi.fetchTweetData, tweetId);
   yield put(setTweetData(data))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  } 
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}