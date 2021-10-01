import { TweetsApi } from './../../../services/api/tweetsApi';
import { TweetsActionsType, setTweetsLoadingState, setTweets, FetchAddTweetActionInterface } from './actionCreators';
import { call, takeEvery, put, takeLatest } from 'redux-saga/effects'
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
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface): Generator<unknown, void, Tweet[]> {
  try {
   const data: Tweet = {
     _id: Math.random().toString(36).substr(2),
     text: payload,
     user: {
      fullName: "Robbins Parks",
      userName: "spence",
      avatarUrl: "https://source.unsplash.com/random/100x100?5"
    }
   }
   const item: Tweet[] = yield call(TweetsApi.addTweet, data);
   yield put(setTweets(item))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  } 
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}